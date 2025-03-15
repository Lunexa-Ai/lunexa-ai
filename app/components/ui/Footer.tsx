"use client";
import React from "react";
import { FaGithub, FaBook, FaTelegram, FaXTwitter } from "react-icons/fa6";

export function ModernFooter() {
  return (
    <footer className="w-full bg-teal-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">SCANWITHPAVISE</h2>
          <p className="text-white/80 text-sm mt-1">
            © 2025 SCANWITHPAVISE. All rights reserved.
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-6 mt-6 md:mt-0">
          <FooterIcon href="https://github.com/scanwithpavise" icon={<FaGithub />} label="GitHub" />
          <FooterIcon href="https://pavise.gitbook.io/pavise" icon={<FaBook />} label="Docs" />
          <FooterIcon href="https://x.com/ScanWithPavise" icon={<FaXTwitter />} label="Twitter" />
          <FooterIcon href="https://t.me/PavisePortal" icon={<FaTelegram />} label="Telegram" />
        </div>
      </div>
    </footer>
  );
}

// Component untuk ikon social media
function FooterIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center hover:text-yellow-500 transition-all"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}
