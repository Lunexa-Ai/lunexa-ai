"use client";
import React, { useState, useRef, useEffect } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import * as tf from "@tensorflow/tfjs";

export function FileUploadDemo() {
  const [aiResponse, setAiResponse] = useState<{
    id: string;
    text: string;
    sender: string;
  } | null>(null); // Move this inside the component

  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState<
    { label: string; confidence: number; box: number[]; size: number }[] | null
  >(null);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const sendPredictionsToAI = async (
    context: string,
    predictions: { label: string; confidence: number }[]
  ) => {
    try {
      const predictionsContent = predictions
        .map(
          (prediction) =>
            `${prediction.label} (${(prediction.confidence * 100).toFixed(2)}%)`
        )
        .join(", ");

      const messageContent = `${context}: ${predictionsContent}`;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: messageContent }],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch AI response");

      const data = await response.text();

      const aiMessage = {
        id: Date.now().toString(),
        text: data,
        sender: "ai",
      };

      setAiResponse(aiMessage);
      return aiMessage;
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        id: Date.now().toString(),
        text: "Failed to get response from AI.",
        sender: "ai",
      };
      setAiResponse(errorMessage);
      return errorMessage;
    }
  };

  useEffect(() => {
    async function loadModel() {
      try {
        const loadedModel = await tf.loadGraphModel(
          "/models/my-model/model.json"
        );
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    }
    loadModel();
  }, []);

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    setPredictions(null);
    setImageUploaded(true);
    setShowResults(false);

    if (uploadedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (imageRef.current && event.target) {
          imageRef.current.src = event.target.result as string;
        }
      };
      reader.readAsDataURL(uploadedFiles[0]);
    }
  };

  const LABELS: Record<number, string> = {
    1: "Glioma",
    2: "Meningioma",
    3: "Pituitary",
  };

  const runInference = async () => {
    if (!model || !imageRef.current || !canvasRef.current) return;

    setIsLoading(true);
    const img = imageRef.current;
    let tensor = tf.browser
      .fromPixels(img)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toInt();

    try {
      const output = await model.executeAsync({ input_tensor: tensor });
      if (Array.isArray(output)) {
        const [
          numDetectionsTensor,
          ,
          ,
          scoresTensor,
          classesTensor,
          ,
          boxesTensor,
        ] = output;

        if (
          numDetectionsTensor instanceof tf.Tensor &&
          boxesTensor instanceof tf.Tensor &&
          scoresTensor instanceof tf.Tensor &&
          classesTensor instanceof tf.Tensor
        ) {
          const numDetections = (await numDetectionsTensor.data())[0];
          const boxes = await boxesTensor.data();
          const scores = await scoresTensor.data();
          const classes = await classesTensor.data();
          const formattedPredictions = [];
          for (let i = 0; i < numDetections; i++) {
            if (scores[i] > 0.5) {
              const classId = Math.floor(classes[i]);
              const [yMin, xMin, yMax, xMax] = [
                boxes[i * 4],
                boxes[i * 4 + 1],
                boxes[i * 4 + 2],
                boxes[i * 4 + 3],
              ];
              const width = xMax - xMin;
              const height = yMax - yMin;
              const size = width * height; // Tumor size based on bounding box area

              formattedPredictions.push({
                label: LABELS[classId] || "Tumor",
                confidence: Math.round(scores[i] * 100) / 100,
                box: [yMin, xMin, yMax, xMax],
                size: Math.round(size * 100) / 100, // Store the tumor size in cm² or another unit based on your scale
              });
            }
          }
          setPredictions(formattedPredictions);
          setShowResults(true);
          drawBoundingBoxes(formattedPredictions);
          const aiResponse = await sendPredictionsToAI(
            "give recommendations to minimize",
            formattedPredictions
          );
        }
      }
    } catch (error) {
      console.error("Error during inference:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const drawBoundingBoxes = (
    detections: { label: any; confidence: any; box: any }[]
  ) => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = img.clientWidth;
      canvas.height = img.clientHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    detections.forEach(({ label, confidence, box }) => {
      const [yMin, xMin, yMax, xMax] = box;
      const x = xMin * canvas.width;
      const y = yMin * canvas.height;
      const width = (xMax - xMin) * canvas.width;
      const height = (yMax - yMin) * canvas.height;

      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, width, height);
      ctx.fillStyle = "rgb(242, 255, 0)";
      ctx.fillRect(x, y - 20, ctx.measureText(label).width + 50, 20);
      ctx.fillStyle = "black";
      ctx.fillText(`${label} (${confidence * 100}%)`, x + 5, y - 5);
    });
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <h1 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
        Pavise is Ready to Analyze your Scan
      </h1>

      {!imageUploaded && <FileUpload onChange={handleFileUpload} />}

      {imageUploaded && (
        <div className="relative mt-6">
          <img
            ref={imageRef}
            alt="Preview"
            className="max-w-full mx-auto rounded-lg shadow-md"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 rounded-lg"
          />
        </div>
      )}

      {showResults && predictions && predictions.length > 0 && (
        <div className="mt-6 space-y-4">
          {predictions.map((prediction, index) => (
            <Card key={index} className="shadow-lg bg-white dark:bg-gray-800">
              <CardContent>
                <h2 className="text-xl font-semibold text-center">
                  {prediction.label}
                </h2>
                <p className="text-center">
                  Confidence: {prediction.confidence * 100}%
                </p>
                <p className="text-center">Tumor Size: {prediction.size} cm²</p>
                {aiResponse && aiResponse.text && <p>{aiResponse.text}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {imageUploaded && (
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <Button
            onClick={runInference}
            disabled={!model || isLoading}
            className="px-8 py-5 bg-yellow-500 text-white rounded-lg hover:bg-teal-500 transition text-xl"
          >
            {isLoading ? (
              <Loader2 className="animate-spin w-6 h-6" />
            ) : (
              "Scan Images"
            )}
          </Button>

          <Button
            onClick={() => {
              setImageUploaded(false);
              setShowResults(false); // Reset and show the file upload again
            }}
            className="px-8 py-5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition text-xl"
          >
            Upload Another Image
          </Button>
        </div>
      )}
    </section>
  );
}
