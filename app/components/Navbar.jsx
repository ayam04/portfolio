"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Work", path: "#work" },
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-3 md:top-5 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto flex items-center gap-1 rounded-full bg-ink text-paper py-1.5 pl-5 pr-1.5 transition-all duration-500 ${
          scrolled ? "shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]" : ""
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-sm font-medium tracking-tight pr-3 md:pr-5 flex items-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          Ayamullah Khan
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.path}
                className="block px-4 py-2 text-xs uppercase tracking-[0.18em] text-paper/70 hover:text-paper transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-signal text-paper-pure pl-4 pr-4 py-2 text-xs uppercase tracking-[0.18em] font-medium hover:bg-signal-deep transition-colors duration-300"
        >
          Let&apos;s talk
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setNavbarOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-paper text-ink"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-4 w-4" />
          ) : (
            <Bars3Icon className="h-4 w-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
