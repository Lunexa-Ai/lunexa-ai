import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 bg-opacity-90 bg-teal-900 backdrop-blur-lg shadow-lg p-4 flex justify-between items-center z-50 rounded-full px-6 w-[90%] max-w-4xl transition-all duration-300 ${
        showNavbar
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <span className="text-white text-2xl font-bold">PAVISE</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 mx-auto">
        <a href="#" className="text-gray-200 hover:text-white transition">
          Home
        </a>
        <a href="#aboutUs" className="text-gray-200 hover:text-white transition">
          About Us
        </a>
        <a href="#features" className="text-gray-200 hover:text-white transition">
          Features
        </a>
        <a href="#faq" className="text-gray-200 hover:text-white transition">
          FAQ
        </a>
      </div>

      {/* Desktop Button */}
      <button className="hidden md:block bg-white text-teal-900 px-4 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition">
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
        className={`absolute top-16 left-0 w-full bg-teal-900 p-6 flex flex-col items-center space-y-4 md:hidden rounded-lg shadow-md transition-all duration-300 ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <a href="#" className="text-gray-200 hover:text-white transition">
          Home
        </a>
        <a href="#aboutUs" className="text-gray-200 hover:text-white transition">
          About Us
        </a>
        <a href="#features" className="text-gray-200 hover:text-white transition">
          Features
        </a>
        <a href="#faq" className="text-gray-200 hover:text-white transition">
          FAQ
        </a>
        <button className="bg-white text-teal-900 px-4 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
