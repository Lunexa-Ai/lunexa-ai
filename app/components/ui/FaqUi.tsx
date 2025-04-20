"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGithub, FaBook, FaTelegram, FaXTwitter } from "react-icons/fa6";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Left - Email Subscription */}
        <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center md:text-left">
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

        {/* Right - Contact Cards */}
        <div className="grid grid-cols-2 gap-4">
          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            desc="Explore our projects."
            href="https://github.com/scanwithpavise"
          />
          <ContactCard
            icon={<FaBook />}
            title="GitBook"
            desc="Read our documentation."
            href="https://pavise.gitbook.io/pavise"
          />
          <ContactCard
            icon={<FaXTwitter />}
            title="X (Twitter)"
            desc="Follow us for updates."
            href="https://x.com/ScanWithPavise"
          />
          <ContactCard
            icon={<FaTelegram />}
            title="Telegram"
            desc="Join our chat community."
            href="https://t.me/PavisePortal"
          />
        </div>
      </div>
    </section>
  );
}

// Component untuk Contact Cards
function ContactCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg hover:bg-sky-600 hover:text-white transition-all"
    >
      <div className="flex items-center gap-2">
        {icon} <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-white/80">{desc}</p>
    </a>
  );
}
