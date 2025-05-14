"use client";
import { Linkedin, Github, MessageCircle, MessageSquare, X } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  {
    href: "https://www.linkedin.com/in/nikhilroyal04/", // Replace with your LinkedIn
    icon: <Linkedin size={22} />, 
    label: "LinkedIn",
    bg: "bg-gradient-to-br from-blue-600 to-cyan-400"
  },
  {
    href: "https://github.com/nikhilroyal04", // Replace with your GitHub
    icon: <Github size={22} />, 
    label: "GitHub",
    bg: "bg-gradient-to-br from-gray-800 to-blue-600"
  },
  {
    href: "https://wa.me/919068552519", // Replace with your WhatsApp
    icon: <MessageCircle size={22} />, 
    label: "WhatsApp",
    bg: "bg-gradient-to-br from-green-500 to-cyan-400"
  },
];

export default function FloatingButton() {
  const [open, setOpen] = React.useState(false);

  // Close socials when a social is clicked
  function handleSocialClick() {
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`group ${s.bg} shadow-xl rounded-full p-3 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-1 w-14 h-14`}
            initial={{ opacity: 0, y: 20, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.7 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 24,
              delay: open ? i * 0.09 : 0,
              delayChildren: open ? i * 0.09 : 0,
              staggerChildren: 0.04,
            }}
            onClick={handleSocialClick}
          >
            <span className="text-white group-hover:scale-125 transition-transform duration-200">
              {s.icon}
            </span>
          </motion.a>
        ))}
      </AnimatePresence>
      <motion.button
        aria-label={open ? "Close social links" : "Open social links"}
        onClick={() => setOpen((v) => !v)}
        className="bg-gradient-to-br from-blue-600 via-cyan-400 to-fuchsia-500 shadow-2xl rounded-full p-3 flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-110 transition-all duration-200 w-14 h-14"
        whileTap={{ scale: 0.92 }}
        animate={{
          y: [0, -8, 0, 8, 0],
          boxShadow: [
            "0 2px 16px #38bdf822, 0 1.5px 8px #2563eb22",
            "0 4px 32px #38bdf855",
            "0 2px 16px #38bdf822, 0 1.5px 8px #2563eb22"
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: "easeInOut"
        }}
      >
        {open ? <X size={28} className="drop-shadow" /> : <MessageSquare size={28} className="drop-shadow" />}
      </motion.button>
    </div>
  );
}
