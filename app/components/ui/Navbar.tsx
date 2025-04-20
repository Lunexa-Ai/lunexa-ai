import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 bg-opacity-90 bg-sky-500 backdrop-blur-lg shadow-xl p-4 flex justify-between items-center z-50 rounded-full px-6 w-[90%] max-w-4xl transition-all duration-300 ${
        showNavbar
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <span className="text-white text-2xl font-extrabold tracking-wide">
          LUNEXA
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 mx-auto">
        <a
          href="#"
          className="text-white/80 hover:text-white font-medium transition duration-200"
        >
          Home
        </a>
        <a
          href="#scan"
          className="text-white/80 hover:text-white font-medium transition duration-200"
        >
          Scan
        </a>
        <a
          href="#aboutUs"
          className="text-white/80 hover:text-white font-medium transition duration-200"
        >
          About Us
        </a>
        <a
          href="#roadmap"
          className="text-white/80 hover:text-white font-medium transition duration-200"
        >
          Roadmap
        </a>
        <Link
          href="/pages/whitepaper"
          className="text-white/80 hover:text-white font-medium transition duration-200"
        >
          Whitepaper
        </Link>
      </div>

      {/* Desktop Button */}
      <button className="hidden md:block bg-white text-sky-600 px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-200">
        Connect Wallet
      </button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className="text-white" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-sky-500 p-6 flex flex-col items-center space-y-5 md:hidden rounded-xl shadow-md transition-all duration-300 ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <a
          href="#"
          className="text-white/90 hover:text-white font-medium transition"
        >
          Home
        </a>
        <a
          href="#scan"
          className="text-white/90 hover:text-white font-medium transition"
        >
          Scan
        </a>
        <a
          href="#aboutUs"
          className="text-white/90 hover:text-white font-medium transition"
        >
          About Us
        </a>
        <a
          href="#roadmap"
          className="text-white/90 hover:text-white font-medium transition"
        >
          Roadmap
        </a>
        <a
          href="#roadmap"
          className="text-white/90 hover:text-white font-medium transition"
        >
          Whitepaper
        </a>
        <button className="bg-white text-sky-600 px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-200">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
