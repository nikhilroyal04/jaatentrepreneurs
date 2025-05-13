"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[60] w-full bg-white border-b border-blue-100 shadow-md backdrop-blur-xl">
      {/* Soft gradient blur background */}
      <div className="absolute left-0 right-0 top-0 h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-blue-200 to-cyan-50 blur-2xl" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between px-4 z-10">
        {/* Logo and Title */}
        <motion.div
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="flex flex-row items-center justify-center cursor-pointer"
        >
          <Link href="/" className="flex flex-row items-center">
            <Image src="/jaat.png" alt="Jaat Entrepreneurs" width={125} height={125} />
          </Link>
        </motion.div>
        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="cursor-pointer"
            >
              <Link
                href={link.href}
                className="font-bold tracking-wide text-gray-700 transition-all duration-200 relative after:content-[''] after:block after:h-[2.5px] after:rounded-full after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        {/* Actions - hidden on mobile */}
        <motion.div
          whileHover={{ scale: 1.07, boxShadow: "0 4px 32px #38bdf833" }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 min-w-[120px] justify-end"
        >
          <a href="#get-started">
            <Button className="font-bold px-7 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-xl hover:shadow-blue-400/30 hover:shadow-2xl transition-all duration-200 border-0 text-base tracking-wide">
              Get Started
            </Button>
          </a>
        </motion.div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full  text-blue-600 hover:bg-blue-50 transition-all duration-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Popover Menu (dropdown below header) */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="md:hidden absolute left-0 right-0 top-full z-50 flex justify-center"
        >
          <div className="bg-white rounded-b-2xl shadow-2xl border-x border-b border-blue-100/40 backdrop-blur-lg px-8 py-8 flex flex-col items-center gap-6 w-full max-w-xs mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-200 w-full text-center py-2 rounded-lg hover:bg-blue-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
