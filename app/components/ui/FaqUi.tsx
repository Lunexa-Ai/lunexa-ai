"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FaqSection() {
  return (
    <section
      className="w-full min-h-screen pt-24 pb-16 px-6 bg-sky-500 flex flex-col justify-center items-center text-white"
      id="faq"
    >
      {/* Judul Section */}
      <h2 className="text-4xl font-bold text-center mb-8">
        Stay Connected & Get Support
      </h2>

      <div className="w-full max-w-2xl">
        {/* Email Subscription */}
        <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-3">Subscribe for Updates</h3>
          <p className="text-white/80 mb-4">
            Enter your email to get the latest updates about Pavise AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/80 text-gray-900"
            />
            <Button className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
