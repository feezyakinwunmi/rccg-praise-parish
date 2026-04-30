"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {name:"Events", href:"/events"},
  {name:"Gallery", href:"/gallery"},
  { name: "Join", href: "/join" },
  { name: "Contact", href: "/contact" }
];

// Custom SVG Icons
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const GiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openYouTubeLive = () => {
    window.open("https://youtube.com/live/your-channel", "_blank");
  };

  const openGivePage = () => {
    window.open("/give", "_blank");
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className={`rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-sm"
          } w-full max-w-7xl`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo with Link */}
              <a href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg sm:text-xl text-purple-900/90">
                  <img src="/tpplogo.jpg" alt="RCCG Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                </div>
                <div>
                  <h1 className={`font-bold text-sm sm:text-base md:text-lg ${isScrolled ? "text-gray-900" : "text-white"}`}>
                    RCCG
                  </h1>
                  <p className={`text-xs ${isScrolled ? "text-gray-500" : "text-blue-300"}  sm:block`}>
                    The Praise Parish LP 132
                  </p>
                </div>
              </a>

              {/* Desktop Menu with Links */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-400 transition-colors font-medium text-sm lg:text-base`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                {/* YouTube Live Button */}
                <button
                  onClick={openYouTubeLive}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105 shadow-md"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">Live</span>
                </button>

                {/* Give Button */}
                <button
                  onClick={openGivePage}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105 shadow-md"
                >
                  <GiftIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">Give</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className={isScrolled ? "text-gray-900" : "text-white"} />
                ) : (
                  <Menu size={24} className={isScrolled ? "text-gray-900" : "text-white"} />
                )}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu with Links */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-40 bg-gradient-to-br from-blue-900 to-purple-900 pt-20 sm:pt-24"
        >
          <div className="flex flex-col items-center space-y-6 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xl sm:text-2xl hover:text-blue-200 transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
              <button
                onClick={openYouTubeLive}
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 w-full"
              >
                <YoutubeIcon className="w-5 h-5" />
                <span className="font-semibold">Watch Live</span>
              </button>
              
              <button
                onClick={openGivePage}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 w-full"
              >
                <GiftIcon className="w-5 h-5" />
                <span className="font-semibold">Give / Donate</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}