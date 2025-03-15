"use client";
import Image from "next/image";

import Hero from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";
import AboutUs from "./components/ui/AboutUs";
import Roadmap from "./components/ui/Roadmap";
import { FileUploadDemo } from "./components/ui/FileInput";
import { ChatPaviseAI } from "./components/ui/ChatPavise";
import { FaqSection } from "./components/ui/FaqUi";
import { ModernFooter } from "./components/ui/Footer";
import { OurFeatures } from "./components/ui/OurFeatures";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurFeatures />
      <Roadmap />
      <FileUploadDemo />
      <ChatPaviseAI />
      <FaqSection />
      <ModernFooter />
    </>
  );
}
