"use client";
import React, { useState } from "react";
import { FaGithub, FaBook, FaTelegram, FaXTwitter } from "react-icons/fa6";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ModernFooter() {
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const openModal = (title: string, description: string) => {
    setModalContent({ title, description });
  };

  const FooterIcon = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-sky-400 text-2xl"
      >
        <span className="sr-only">{label}</span>
        {icon}
      </a>
    );
  };

  return (
    <footer className="w-full bg-sky-600 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Nara</h2>
          <p className="text-white/80 text-sm mt-1">
            © 2025 Nara. All rights reserved.
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-6 mt-6 md:mt-0">
          <FooterIcon
            href="https://x.com/scanwithnara"
            icon={<FaXTwitter />}
            label="Twitter"
          />
          <FooterIcon
            href="https://t.me/NaraPortal"
            icon={<FaTelegram />}
            label="Telegram"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={() =>
                openModal(
                  "Disclaimer",
                  `Disclaimer – No Medical Advice & Liability Waiver\n\nThe services provided on this platform are for informational purposes only and do not constitute medical advice, diagnosis, or treatment. We are not a medical provider, and our platform is not intended to replace professional medical consultations.\n\nOur AI technology analyzes uploaded MRI scans and, if applicable, may identify potential abnormalities, including tumors. The AI may also suggest possible treatment options based on medical data and existing research. However, this analysis is purely informational and does not replace a professional medical evaluation.\n\nBy using our platform, you acknowledge and agree that:\n1. AI analysis is not a substitute for medical expertise – while our system may highlight potential findings, only a qualified medical professional can confirm a diagnosis and recommend appropriate treatment.\n2. We do not provide medical advice – any information generated is for informational purposes only and should not be considered a medical opinion or guidance.\n3. No liability is assumed – we do not guarantee the accuracy, completeness, or reliability of AI-generated insights and are not responsible for any decisions made based on them.\n\nIf an abnormality is detected, or if you have any health concerns, always consult a qualified healthcare professional. In case of a medical emergency, seek immediate medical attention.\n\nBy using this service, you agree that all medical decisions should be made in consultation with a doctor and that our platform serves only as an informational support tool, not a diagnostic or treatment service.`
                )
              }
              className="text-white hover:text-sky-400"
            >
              Disclaimer
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{modalContent.title}</DialogTitle>
              <DialogDescription className="whitespace-pre-line">
                {modalContent.description}
              </DialogDescription>
            </DialogHeader>
            <DialogClose asChild>
              <Button className="mt-4 bg-sky-700 hover:bg-sky-500">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={() =>
                openModal(
                  "Privacy & Data Protection Policy",
                  `We are committed to protecting your personal data and ensuring your privacy while using our platform. This Privacy & Data Protection Policy outlines how we collect, process, and store your information in compliance with applicable global data protection regulations, including but not limited to the General Data Protection Regulation (GDPR), the Data Protection Act (DPA), the California Consumer Privacy Act (CCPA), and other relevant privacy laws.\n\n1. Scope of Data Collection\n• User-Provided Data: This includes MRI scans, personal information (e.g., name, email address, and any optional details you provide when using our services).\n• Automated Data Collection: We may automatically collect anonymized data such as IP addresses, browser types, referral sources, and device information.\n• Cookies & Tracking Technologies: We use cookies and similar technologies to analyze website traffic and improve service functionality.\n\n2. Data Security & Protection Measures\n• Encryption: All uploaded MRI scans and sensitive data are encrypted in transit and at rest using AES-256, TLS 1.2/1.3.\n• Access Controls: Only authorized personnel with a legitimate need to process your data have access.\n• Anonymization & Data Minimization: Personal identifiers are removed where applicable.\n\n3. Data Usage & Processing Purposes\n• AI-Based Medical Analysis\n• Service Improvement\n• Customer Support & Communication\n\n4. No Data Sharing with Third Parties\nWe do not sell, rent, or share user-generated data. Data will only be disclosed for legal compliance or fraud prevention.\n\n5. User Rights & Control Over Data\n• Right to Access & Rectification\n• Right to Deletion\n• Right to Object & Restriction of Processing\n• Right to Data Portability\n• Right to Withdraw Consent\n\n6. Data Retention Policy\n• Medical Data (MRI Scans): Deleted upon user request.\n• Anonymized Data: May be retained for research and service improvement.\n\n7. International Data Transfers\nWe ensure compliance with Standard Contractual Clauses (SCCs) and recognized legal frameworks for data transfers.\n\n8. Third-Party Services & External Links\nWe are not responsible for third-party privacy practices.\n\n9. Policy Updates & Changes\nWe may update this Privacy Policy from time to time.\n\n10. Contact Information\nFor concerns, contact our Data Protection Officer at pavise56@gmail.com.`
                )
              }
              className="text-white hover:text-sky-400"
            >
              Privacy Policy
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{modalContent.title}</DialogTitle>
              <DialogDescription className="whitespace-pre-line">
                {modalContent.description}
              </DialogDescription>
            </DialogHeader>
            <DialogClose asChild>
              <Button className="mt-4 bg-sky-700 hover:bg-sky-500">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
}
