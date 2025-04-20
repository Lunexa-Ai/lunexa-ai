"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ModernFooter } from "../../components/ui/Footer";
import Navbar from "@/app/components/ui/Navbar";

export default function WhitePaper() {
  return (
    <>
      <section className="bg-white py-24 px-6 md:px-16 lg:px-32 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-sky-500 mb-4">
              How It Works
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              (Beta Version)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/whitepaper.png"
                alt="Lunexa AI Scan"
                width={600}
                height={600}
                className="rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Lunexa is an advanced system designed to assist in medical
                diagnosis using CT-SCAN images. This system works in a very
                intuitive and efficient manner, allowing users (such as doctors
                or healthcare professionals) to analyze medical images faster
                and more accurately. Here's a more detailed explanation of how
                Lunexa works:
                <br />
                <br />
                <strong>User Data Input:</strong> The user begins by uploading
                the CT-SCAN image data they want to diagnose into the system.
                <br />
                <br />
                <strong>Data Processing:</strong> The system sends the image to
                a server connected to a machine learning model hosted on GitHub.
                Lunexa uses a FASTER CNN architecture to detect important
                patterns and features in CT-SCAN images with high precision.
                <br />
                <br />
                <strong>Automated Detection and Diagnosis:</strong> The model
                detects potential issues such as tumors, blood clots, or other
                anomalies.
                <br />
                <br />
                <strong>Detection Results Display:</strong> Lunexa displays
                diagnosis results with visual highlights on abnormalities and
                estimations.
                <br />
                <br />
                <strong>FASTER CNN Architecture:</strong> Lunexa uses FASTER
                CNN, optimized with a Region Proposal Network (RPN) to improve
                object detection in medical imagery.
                <br />
                <br />
                <strong>Benefits and Applications:</strong> Lunexa speeds up
                diagnosis, reduces error, supports emergency response, and helps
                monitor patient progress effectively.
                <br />
                <br />
                With a combination of fast processing and high diagnostic
                accuracy, Lunexa makes a significant contribution to the
                healthcare field.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-sky-500 mb-6">Tokenomics</h2>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Token Overview</strong>
              <br />
              Token Name: Lunexa
              <br />
              Symbol: Lunexa
              <br />
              Blockchain: Solana
              <br />
              Total Supply: 1,000,000,000 $Lunexa
              <br />
              Launch Type: Fairlaunch (No pre-sale, ensuring equal opportunity
              for all participants)
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Utility & Use Cases</strong>
              <br />
              <br />
              <strong>1. Community Participation & Governance</strong>
              <br />
              $Lunexa holders participate in decentralized governance:
              <br />
              - Vote on features, AI development, and policies.
              <br />
              - Propose integrations and enhancements.
              <br />- Fund research and development.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>2. Access to Features & AI Services</strong>
              <br />
              $Lunexa grants access to AI services such as:
              <br />
              - Advanced AI scanning and analytics.
              <br />
              - Adaptive AI-driven solutions.
              <br />- Priority access to premium features.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>3. Business & Community Integration</strong>
              <br />
              $Lunexa connects AI and DeFi:
              <br />
              - Enable enterprise AI integrations.
              <br />
              - Fund AI enhancements.
              <br />- Support community-led innovation.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>4. Token Burn Mechanism</strong>
              <br />
              - Buyback & Burn: A portion of AI service revenue is used to buy
              and burn tokens.
              <br />- Balancing scarcity with rewards through staking.
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Conclusion</strong>
              <br />
              $Lunexa bridges AI innovation and decentralized governance. Its
              tokenomics ensures fair access, long-term value, and sustainable
              growth, creating a powerful ecosystem for collaborative AI
              development.
            </p>
          </motion.div>
        </div>
      </section>
      <ModernFooter />
    </>
  );
}
