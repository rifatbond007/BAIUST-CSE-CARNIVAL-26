import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function CarnivalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#2E3A2E] rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="text-xl font-bold tracking-tight text-[#2E3A2E]">
            BAIUST <span className="font-light">CSE</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: "HOME", href: "/" },
            { label: "EVENTS", href: "/#segments" },
            { label: "FAQ", href: "/#faq" },
            { label: "CONTACT", href: "/#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-[#2E3A2E] hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/register"
            className="bg-[#2E3A2E] text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            REGISTER NOW
          </a>
        </div>

        <button
          className="md:hidden text-[#2E3A2E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100 flex flex-col p-6 space-y-4">
          {[
            { label: "Home", href: "/" },
            { label: "Events", href: "/#segments" },
            { label: "FAQ", href: "/#faq" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-semibold text-[#2E3A2E]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/register"
            className="bg-[#2E3A2E] text-white px-6 py-3 rounded-xl text-lg font-bold w-full text-center block"
          >
            REGISTER NOW
          </a>
        </div>
      )}
    </nav>
  );
}
