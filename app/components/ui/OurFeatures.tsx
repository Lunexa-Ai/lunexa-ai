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
    description: "Detect tumors quickly and accurately using Pavise AI.",
    icon: <FaMicroscope className="text-4xl text-teal-600" />,
  },
  {
    title: "Health Consultation",
    description: "Get personalized health recommendations from Pavise AI.",
    icon: <FaUser className="text-4xl text-teal-600" />,
  },
  {
    title: "Free and Open Source",
    description:
      "Pavise is a free and open source project inviting developers to contribute innovative code and ideas.",
    icon: <FaCode className="text-4xl text-teal-600" />,
  },
  {
    title: "Community Participation",
    description:
      "Pavise holders are at the heart of our strategic decision, actively shaping the platform's future with their valuable insights.",
    icon: <FaPeopleArrows className="text-4xl text-teal-600" />,
  },
  {
    title: "Token Burn Mechanism",
    description:
      "To secure long term value and control inflation, $PAVISE employs a structured token burn mechanism that gradually reduces supply.",
    icon: <FaFire className="text-4xl text-teal-600" />,
  },
];

export function OurFeatures() {
  return (
    <section
      className="w-full bg-white py-16 px-6 md:px-16 lg:px-24"
      id="features"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Features</h2>
        <p className="text-gray-600 mt-2">
          Explore the key features of Pavise that can assist your health
          journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-2xl transition-all"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              {feature.icon}
              <CardTitle className="text-xl font-semibold text-gray-900">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
