"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/roles", label: "Talent" },
  { href: "/pricing", label: "Pricing" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-xl text-white font-semibold tracking-tight">
              ZeeStaffer
            </span>
          </Link>

          {/* Desktop Navigation — pill container */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.06] rounded-full px-2 py-1.5 border border-white/[0.08]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="mailto:hello@zeestaffer.com"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
              target="_blank"
              className="btn-ghost !h-10 !text-sm !px-4"
            >
              Schedule Call to Hire Talent
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <motion.span
                className="absolute left-0 w-full h-[1.5px] bg-white"
                animate={{
                  top: isMobileMenuOpen ? "50%" : "0%",
                  rotate: isMobileMenuOpen ? 45 : 0,
                  translateY: isMobileMenuOpen ? "-50%" : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-1/2 w-full h-[1.5px] bg-white -translate-y-1/2"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 w-full h-[1.5px] bg-white"
                animate={{
                  bottom: isMobileMenuOpen ? "50%" : "0%",
                  rotate: isMobileMenuOpen ? -45 : 0,
                  translateY: isMobileMenuOpen ? "50%" : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden bg-zee-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-start justify-center h-full px-8 pt-20">
              <nav className="flex flex-col gap-1 w-full">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-2xl font-display text-white hover:text-zee-heading transition-colors border-b border-white/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-6"
                >
                  <Link
                    href="https://calendar.app.google/B6CxcnikLLZpyzSX6"
                    target="_blank"
                    className="btn-ghost"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Schedule Call to Hire Talent
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
