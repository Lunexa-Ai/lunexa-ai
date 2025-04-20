import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const certificationText = "-";

  const handleCopy = () => {
    navigator.clipboard.writeText(certificationText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-sky-100 px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl w-full">
        {/* Left Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/lunexa.png"
            alt="Lunexa AI"
            width={400}
            height={400}
            className="rounded-3xl shadow-xl border-4 border-white"
          />
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-800 leading-tight drop-shadow">
            Welcome to <span className="text-sky-500 text-7xl font-semibold">LUNEXA AI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Revolutionizing health diagnostics with cutting-edge AI technology.
            LUNEXA AI empowers medical professionals with accurate and rapid
            detection of critical illnesses, all at your fingertips.
          </p>

          {/* Certification */}
          <div
            onClick={handleCopy}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/30 text-gray-700 rounded-full shadow-sm cursor-pointer hover:bg-white/80 transition"
          >
            <span className="text-sm font-medium">{certificationText}</span>
            {copied && (
              <span className="text-green-500 text-sm font-semibold">
                Copied!
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#scan"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Start Scanning <ArrowRight size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
