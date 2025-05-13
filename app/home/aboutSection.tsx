"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
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
          Empowering brands to build, launch, and grow with world-class digital products.
        </motion.p>
        {/* Animated Main Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl text-lg text-gray-600 mb-8"
        >
          We are a vibrant collective of engineers, designers, and strategists who thrive on innovation and collaboration. Our culture is built on creativity, transparency, and a relentless drive to deliver real impact. We believe in pushing boundaries, embracing new technologies, and crafting experiences that delight users and empower businesses. Every project is a partnership, and every client is part of our journey.
        </motion.p>
        {/* Animated Team Avatars/Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {/* Example animated avatars/icons */}
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-3 shadow-lg">
            <span role="img" aria-label="Engineer" className="text-3xl">💻</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-fuchsia-500 to-blue-400 p-3 shadow-lg">
            <span role="img" aria-label="Designer" className="text-3xl">🎨</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 p-3 shadow-lg">
            <span role="img" aria-label="Strategist" className="text-3xl">🚀</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-blue-600 to-fuchsia-400 p-3 shadow-lg">
            <span role="img" aria-label="Collaboration" className="text-3xl">🤝</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.12 }} className="rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 p-3 shadow-lg">
            <span role="img" aria-label="Creativity" className="text-3xl">💡</span>
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
          &quot;Let&apos;s build something extraordinary together. Your vision, our expertise.&quot;
        </motion.p>
      </div>
    </section>
  );
} 