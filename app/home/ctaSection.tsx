"use client";
import { motion } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import React from "react";

const headline = [
  "Ready to ",
  <span key="build" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 animate-gradient-x">build</span>,
  ", ",
  <span key="launch" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-gradient-x">launch</span>,
  ", and ",
  <span key="grow" className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-600 animate-gradient-x">grow</span>,
  " your project?"
];

// Define a type for a sparkle
interface Sparkle {
  left: string;
  top: string;
  fontSize: string;
  color: string;
  yOffset: number;
  duration: number;
}

export default function CtaSection() {
  // Typewriter effect for headline
  const [reveal, setReveal] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setReveal(true), 400);
  }, []);

  // Generate sparkles only on the client to avoid hydration mismatch
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([]);
  React.useEffect(() => {
    setSparkles(
      Array.from({ length: 18 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${18 + Math.random() * 18}px`,
        color: i % 2 === 0 ? "#38bdf8" : "#a21caf",
        yOffset: -30 - Math.random() * 40,
        duration: 6 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <section id="get-started" className="relative py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden">
      {/* Animated SVG Blobs, Rings, Metro Lines */}
      <motion.svg
        className="absolute -top-40 -left-40 w-[600px] h-[600px] z-0"
        viewBox="0 0 600 600"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <defs>
          <radialGradient id="cta-blob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <motion.ellipse
          cx="300" cy="300" rx="220" ry="180"
          fill="url(#cta-blob1)"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        />
        <motion.circle
          cx="300" cy="300" r="180"
          stroke="#38bdf8" strokeWidth="2" fill="none"
          strokeDasharray="12 18"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
      </motion.svg>
      <motion.svg
        className="absolute -bottom-32 right-0 w-[420px] h-[420px] z-0"
        viewBox="0 0 420 420"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <defs>
          <radialGradient id="cta-blob2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <motion.ellipse
          cx="210" cy="210" rx="160" ry="120"
          fill="url(#cta-blob2)"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        />
        <motion.circle
          cx="210" cy="210" r="110"
          stroke="#a21caf" strokeWidth="2" fill="none"
          strokeDasharray="8 12"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
        />
      </motion.svg>
      {/* Animated Confetti/Sparkles */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.5, 0.7, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      >
        {sparkles.map((sparkle, i) => (
          <motion.span
            key={i}
            className="absolute"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              fontSize: sparkle.fontSize,
              color: sparkle.color,
              opacity: 0.7,
            }}
            animate={{
              y: [0, sparkle.yOffset, 0],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: sparkle.duration,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-20 flex flex-col items-center text-center"
      >
        {/* Animated Headline with typewriter effect */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 flex flex-wrap justify-center gap-2">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.6, type: "spring" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-fuchsia-500 mb-10 animate-gradient-x"
        >
          Let&apos;s build something extraordinary together. Your vision, our expertise.
        </motion.p>
        {/* CTA Button */}
        <a href="#contact">
          <motion.button
            whileHover={{ scale: 1.11, boxShadow: "0 4px 32px #38bdf855", filter: "brightness(1.08) drop-shadow(0 0 16px #38bdf8aa)", borderColor: "#38bdf8" }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0 0 0 0 #38bdf855",
                "0 0 0 16px #38bdf822",
                "0 0 0 0 #38bdf800"
              ],
              y: [0, -4, 0, 4, 0],
            }}
            transition={{
              boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 3.2, ease: "easeInOut" }
            }}
            className="px-7 py-3 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-400 to-fuchsia-500 shadow-lg hover:shadow-blue-400/30 hover:shadow-2xl transition-all duration-200 text-lg mb-8 relative overflow-hidden cursor-pointer border-2 border-transparent backdrop-blur-md bg-opacity-80 flex items-center gap-3"
            style={{ outline: 'none', background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 60%, #a21caf 100%)', boxShadow: '0 2px 16px #38bdf822, 0 1.5px 8px #2563eb22' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket size={22} className="inline-block" />
              Get Started Now
              <Sparkles size={16} className="inline-block text-yellow-400 ml-1 animate-pulse" />
            </span>
            {/* Ripple SVG */}
            <motion.span
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15, scale: 1.2 }}
              transition={{ duration: 0.4 }}
              style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
            />
            {/* Animated border shine */}
            <motion.span
              className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none"
              initial={{ opacity: 0, x: -60 }}
              whileHover={{ opacity: 0.7, x: 60 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(120deg, transparent 60%, #fff 80%, transparent 100%)",
                mixBlendMode: "overlay"
              }}
            />
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
} 