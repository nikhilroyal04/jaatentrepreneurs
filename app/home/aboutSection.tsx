"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 relative py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-fuchsia-50">
      {/* Optional animated SVG background */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="none"
        initial={{ opacity: 0.13, rotate: 0 }}
        animate={{ opacity: [0.13, 0.22, 0.13], rotate: 360 }}
        transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
        style={{ minWidth: '100vw', minHeight: '300px' }}
      >
        <motion.ellipse
          cx="400" cy="200" rx="220" ry="90"
          fill="url(#aboutblob1)"
          initial={{ opacity: 0.2, scale: 0.9 }}
          animate={{ opacity: [0.2, 0.3, 0.2], scale: [0.9, 1.05, 0.9] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="1100" cy="180" rx="180" ry="70"
          fill="url(#aboutblob2)"
          initial={{ opacity: 0.15, scale: 1 }}
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <defs>
          <radialGradient id="aboutblob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.08" />
          </radialGradient>
          <radialGradient id="aboutblob2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a21caf" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
          </radialGradient>
        </defs>
      </motion.svg>
      {/* Floating Dots/Particles Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-cyan-200 opacity-60"
            style={{
              width: `${12 + (i % 3) * 6}px`,
              height: `${12 + (i % 3) * 6}px`,
              left: `${(i * 11) % 100}%`,
              top: `${(i * 23) % 100}%`,
              filter: 'blur(1.5px)'
            }}
            animate={{
              y: [0, (i % 2 === 0 ? 18 : -18), 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 7 + (i % 5),
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Us</span>
        </motion.h2>
        {/* Bold Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl text-xl font-bold text-blue-700 mb-4"
        >
          🚀 Empowering visionaries to disrupt, scale, and lead with digital brilliance.
        </motion.p>
        {/* Animated Main Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl text-lg text-gray-600 mb-8"
        >
          We&apos;re not just another agency&mdash;we&apos;re your digital growth partners. At Jaat Entrepreneurs, we blend code, creativity, and business strategy to launch brands into the future. Our team is a tribe of innovators, engineers, and designers obsessed with building products that don&apos;t just work, but wow.<br /><br />
          From startups with wild ideas to enterprises ready to level up, we architect solutions that are fast, beautiful, and built to scale. We live and breathe Next.js, React, cloud, and cutting-edge tech&mdash;so your business always stays ahead of the curve.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl text-base text-gray-600 mb-8"
        >
          Our work isn&apos;t just about pixels and code. It&apos;s about impact. We believe in radical transparency, relentless quality, and partnerships that feel like family. Every project is a new adventure, every client a collaborator.<br /><br />
          Ready to make your mark? Let&apos;s build something legendary&mdash;together.
        </motion.p>
        {/* Animated Team Avatars/Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-3 shadow-lg">
            <span role="img" aria-label="Engineers" className="text-3xl">💻</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-fuchsia-500 to-blue-400 p-3 shadow-lg">
            <span role="img" aria-label="Designers" className="text-3xl">🎨</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 p-3 shadow-lg">
            <span role="img" aria-label="Strategists" className="text-3xl">🚀</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-blue-600 to-fuchsia-400 p-3 shadow-lg">
            <span role="img" aria-label="Collaborators" className="text-3xl">🤝</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 p-3 shadow-lg">
            <span role="img" aria-label="Creators" className="text-3xl">💡</span>
          </motion.div>
        </motion.div>
        {/* Call-to-action/Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl text-lg font-semibold text-cyan-700 italic"
        >
          &quot;Don&apos;t just build a website. Build a legacy.&quot;
        </motion.p>
      </div>
    </section>
  );
} 