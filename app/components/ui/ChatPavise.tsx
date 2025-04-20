"use client";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export function ChatPaviseAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: inputMessage }],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch AI response");

      const data = await response.text();
      const aiMessage: Message = {
        id: Date.now().toString(),
        text: data,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Failed to get response from AI.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
        Chat with Lunexa
      </h2>
      <p className="text-gray-600 text-center dark:text-gray-400 mt-2">
        Ask anything about your medical scans or related topics.
      </p>

      <div className="mt-4 h-60 overflow-y-auto border border-gray-300 dark:border-gray-700 rounded-md p-4 space-y-3">
        {messages.length === 0 && (
          <p className="text-gray-500">Start a conversation...</p>
        )}
        {messages.map((msg) => (
          <Card
            key={msg.id}
            className={`p-3 w-fit max-w-xs ${
              msg.sender === "user"
                ? "ml-auto bg-sky-500 text-white"
                : "mr-auto bg-white text-black"
            }`}
          >
            {msg.text}
          </Card>
        ))}

        {isLoading && (
          <div className="mr-auto p-3 w-fit max-w-xs bg-gray-200 text-black rounded-md animate-pulse">
            Lunexa is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex gap-2">
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          disabled={isLoading}
          className="flex-1"
        />
        <Button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="bg-sky-500 text-white px-4 py-2 rounded-md"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
