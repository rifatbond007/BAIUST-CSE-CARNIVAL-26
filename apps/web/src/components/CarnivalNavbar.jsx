import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#segments" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Schedule", href: "/#schedule" },
  { label: "FAQ", href: "/#faq" },
];

export default function CarnivalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links
        .map((l) => l.href.replace("/#", ""))
        .filter(Boolean);
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#2E3A2E] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-sm">
            B
          </div>
          <div>
            <div className="text-sm font-black tracking-tight text-[#2E3A2E] leading-tight">
              BAIUST <span className="font-light">CSE</span>
            </div>
            <div className="text-[9px] text-[#2E3A2E]/40 font-bold uppercase tracking-[0.2em] leading-tight">
              Carnival 2026
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((item) => {
            const sectionId = item.href.replace("/#", "");
            const isActive = sectionId && active === sectionId;
            const isHome = item.href === "/";

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${
                  isHome
                    ? "text-[#2E3A2E]/40 hover:text-[#2E3A2E]"
                    : isActive
                    ? "text-[#2E3A2E] bg-[#2E3A2E]/8"
                    : "text-[#2E3A2E]/40 hover:text-[#2E3A2E] hover:bg-[#2E3A2E]/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-[#2E3A2E]/8 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <div className="ml-3 pl-3 border-l border-gray-200">
            <a
              href="/register"
              className="bg-[#2E3A2E] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#1B261B] hover:scale-105 transition-all shadow-sm inline-block"
            >
              Register
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-[#2E3A2E]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-lg border-t border-gray-100 flex flex-col p-6 gap-2"
          >
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 text-sm font-bold text-[#2E3A2E]/60 hover:text-[#2E3A2E] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-gray-100 pt-4 mt-2">
              <a
                href="/register"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-[#2E3A2E] text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-center hover:bg-[#1B261B] transition-colors"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
