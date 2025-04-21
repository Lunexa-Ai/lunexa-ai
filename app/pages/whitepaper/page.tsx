"use client";
import { motion } from "framer-motion";
import { ModernFooter } from "../../components/ui/Footer";

export default function WhitePaper() {
  return (
    <>
      <section className="bg-white py-24 px-6 md:px-16 lg:px-32 text-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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

          {/* How It Works Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-sky-50 border border-sky-200 rounded-3xl p-8 shadow-xl mb-24"
          >
            <h2 className="text-2xl font-bold text-sky-600 mb-4">
              Step-by-Step Process
            </h2>
            <ul className="space-y-6 text-gray-700 text-lg list-disc list-inside">
              <li>
                <strong>User Data Input:</strong> Users upload CT-SCAN images to
                begin the diagnosis process.
              </li>
              <li>
                <strong>Data Processing:</strong> Images are sent to a machine
                learning model using FASTER CNN hosted on GitHub.
              </li>
              <li>
                <strong>Automated Detection:</strong> The model detects
                anomalies like tumors, blood clots, and more.
              </li>
              <li>
                <strong>Results Display:</strong> Diagnosis results are shown
                visually with highlighted areas of concern.
              </li>
              <li>
                <strong>FASTER CNN Architecture:</strong> Built with a Region
                Proposal Network (RPN) to optimize accuracy in detection.
              </li>
              <li>
                <strong>Benefits:</strong> Faster analysis, reduced errors, and
                improved emergency response for healthcare professionals.
              </li>
            </ul>
          </motion.div>

          {/* Tokenomics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-sky-500 mb-6">Tokenomics</h2>
            <div className="grid gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 text-lg">
                  <strong>Token Overview</strong>
                  <br />
                  Token Name: Nara <br />
                  Symbol: Nara <br />
                  Blockchain: Solana <br />
                  Total Supply: 1,000,000,000 $Nara <br />
                  Launch Type: Fairlaunch
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 text-lg">
                  <strong>1. Community Participation & Governance</strong>
                  <br />
                  $Nara holders can vote, propose changes, and fund R&D.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 text-lg">
                  <strong>2. Access to Features & AI Services</strong>
                  <br />
                  Get premium AI services, analytics, and scanning access.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 text-lg">
                  <strong>3. Business & Community Integration</strong>
                  <br />
                  Support enterprise AI integrations and innovations.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 text-lg">
                  <strong>4. Token Burn Mechanism</strong>
                  <br />
                  Revenue-based buyback & burn system to control supply and
                  reward holders.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <p className="text-gray-700 text-lg">
                  <strong>Conclusion</strong>
                  <br />
                  $Nara bridges AI and decentralized governance with fair
                  access and long-term growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ModernFooter />
    </>
  );
}
