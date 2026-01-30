"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/roles", label: "Talent" },
  { href: "/pricing", label: "Pricing" },
  { href: "mailto:hello@zeestaffer.com", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/">
            <span className="font-display text-xl text-white font-semibold tracking-tight">
              ZeeStaffer
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ZeeStaffer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
