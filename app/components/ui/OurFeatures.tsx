"use client";
import React from "react";
import {
  FaMicroscope,
  FaUser,
  FaFire,
  FaPeopleArrows,
  FaCode,
} from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Tumor Scanning",
    description: "Detect tumors quickly and accurately using Lunexa.",
    icon: <FaMicroscope className="text-4xl text-sky-500" />,
  },
  {
    title: "Health Consultation",
    description: "Get personalized health recommendations from Lunexa.",
    icon: <FaUser className="text-4xl text-sky-500" />,
  },
  {
    title: "Community Participation",
    description:
      "Lunexa holders are at the heart of our strategic decisions, actively shaping the platform's future with their valuable insights.",
    icon: <FaPeopleArrows className="text-4xl text-sky-500" />,
  },
  {
    title: "Token Burn Mechanism",
    description:
      "To secure long-term value and control inflation, $LUNEXA employs a structured token burn mechanism that gradually reduces supply.",
    icon: <FaFire className="text-4xl text-sky-500" />,
  },
];

export function OurFeatures() {
  return (
    <section
      className="w-full bg-white py-16 px-6 md:px-16 lg:px-24"
      id="features"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-sky-500 mb-4">
          Discover Our Powerful Features
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore the groundbreaking features of Lunexa that empower your health
          journey with cutting-edge AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="transform transition-transform hover:scale-105 hover:shadow-2xl bg-white border border-gray-200 shadow-lg hover:border-sky-500 rounded-xl p-6"
          >
            <CardHeader className="flex flex-row items-center gap-6 mb-4">
              {feature.icon}
              <CardTitle className="text-2xl font-semibold text-sky-500">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
