import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const certificationText = "2TUQ21D87yrbZM1F3RB93sbkiGXeTTfkb8wWqG2ipump";

  const handleCopy = () => {
    navigator.clipboard.writeText(certificationText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-700 to-cyan-700 opacity-70 animate-pulse"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-400 opacity-40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400 opacity-50 rounded-full blur-3xl animate-float delay-200"></div>

      {/* Logo Certificate */}
      <motion.div
        className="w-28 h-28 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/pavise.jpeg"
          alt="Crypto CA Certification"
          width={800}
          height={800}
          className="rounded-full"
        />
      </motion.div>

      <motion.h1
        className="text-6xl font-bold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pavise is the First AI-Powered Health Diagnostic
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Engineered with cutting-edge AI technology, Pavise is designed for
        exceptional accuracy and reliability in disease detection, empowering
        healthcare professionals with precise diagnostics.
      </motion.p>

      {/* Certificate Badge & Info */}
      <motion.div
        className="mt-6 flex items-center gap-3 bg-white bg-opacity-20 px-4 py-2 rounded-lg shadow-md text-white cursor-pointer hover:bg-opacity-30 transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onClick={handleCopy}
      >
        <ShieldCheck size={28} className="text-green-400" />
        <span className="text-sm text-black font-medium">
          {certificationText}
        </span>
        {copied && <ClipboardCheck size={20} className="text-green-500" />}
      </motion.div>

      {/* Copy Success Notification */}
      {copied && (
        <motion.div
          className="mt-3 px-4 py-2 text-sm bg-green-600 text-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          Copied to clipboard!
        </motion.div>
      )}

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a href="#scan" className="px-14 py-4 text-xl font-semibold rounded-full flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl hover:scale-110 transition-transform">
          Scan Images <ArrowRight size={24} />
        </a>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
