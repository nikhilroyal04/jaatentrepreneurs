"use client";
import { motion } from "framer-motion";
import { Lightbulb, Code2, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const process = [
  { icon: Lightbulb, label: "Ideate" },
  { icon: Code2, label: "Develop" },
  { icon: Rocket, label: "Launch" },
];

const floatingIcons = [
  { icon: Lightbulb, top: "10%", left: "8%", delay: 0 },
  { icon: Code2, top: "80%", left: "12%", delay: 0.3 },
  { icon: Rocket, top: "20%", right: "10%", delay: 0.6 },
];

const headlineWords = [
  "Build.",
  " ",
  <span key="launch" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Launch.</span>,
  " ",
  "Grow.",
];

export default function HeroSection() {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    setTimeout(() => setReveal(true), 400);
  }, []);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      {/* Animated SVG Blobs */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] z-0"
        viewBox="0 0 500 500"
        fill="none"
      >
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <motion.path
          d="M421,307Q393,364,334,390Q275,416,217,393Q159,370,120,320Q81,270,110,210Q139,150,200,120Q261,90,320,120Q379,150,418,200Q457,250,421,307Z"
          fill="url(#blob1)"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        />
      </motion.svg>
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -bottom-32 right-0 w-[400px] h-[400px] z-0"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <motion.path
          d="M320,240Q300,320,220,340Q140,360,100,290Q60,220,100,150Q140,80,220,100Q300,120,320,200Q340,280,320,240Z"
          fill="url(#blob2)"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        />
      </motion.svg>
      {/* Metro/Techno Animated SVG Pattern for Whole Hero BG */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        initial={{ opacity: 0.18, rotate: 0 }}
        animate={{ opacity: [0.18, 0.28, 0.18], rotate: 360 }}
        transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
        style={{ minWidth: '100vw', minHeight: '100vh' }}
      >
        {/* Large animated concentric rings */}
        <motion.circle
          cx="720" cy="450" r="380"
          stroke="#38bdf8" strokeWidth="1.5"
          strokeDasharray="12 18"
          initial={{ pathLength: 0.7 }}
          animate={{ pathLength: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />
        <motion.circle
          cx="720" cy="450" r="260"
          stroke="#06b6d4" strokeWidth="1.2"
          strokeDasharray="8 12"
          initial={{ pathLength: 0.5 }}
          animate={{ pathLength: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
        />
        {/* Metro-style lines */}
        <motion.line
          x1="0" y1="200" x2="1440" y2="200"
          stroke="#38bdf8" strokeWidth="0.7"
          initial={{ x1: 0 }}
          animate={{ x1: [0, 200, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.line
          x1="0" y1="700" x2="1440" y2="700"
          stroke="#06b6d4" strokeWidth="0.7"
          initial={{ x2: 1440 }}
          animate={{ x2: [1440, 1240, 1440] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 3 }}
        />
        {/* Dots for metro effect */}
        <motion.circle
          cx="200" cy="120" r="4" fill="#38bdf8"
          animate={{ cy: [120, 140, 120] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.circle
          cx="1240" cy="780" r="3" fill="#06b6d4"
          animate={{ cy: [780, 800, 780] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        />
        {/* More subtle geometric patterns can be added here */}
      </motion.svg>
      {/* Floating Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute z-10"
          style={{ top: item.top, left: item.left, right: item.right }}
          initial={{ y: 0, opacity: 0.5 }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 6 + idx * 2, delay: item.delay, ease: "easeInOut" }}
        >
          <item.icon size={32} className="text-cyan-400 drop-shadow-lg opacity-80" />
        </motion.div>
      ))}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center text-center"
      >
        {/* Animated Headline Reveal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-4 text-base font-semibold text-blue-600 tracking-widest uppercase"
        >
          India&apos;s Leading Software Development Agency
        </motion.div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 flex flex-wrap justify-center gap-2">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.6, type: "spring" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-gray-600 mb-8">
          We craft modern software solutions for ambitious brands. Partner with us to turn your ideas into reality. From ideation to launch, we deliver digital products that scale and delight.
        </p>
        {/* Animated process bar with connectors */}
        <motion.div
          className="flex items-center justify-center gap-8 mb-10 relative"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        >
          {process.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
              className="flex flex-col items-center relative"
            >
              <div className="rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-5 mb-2 shadow-2xl ring-4 ring-cyan-200/30">
                <step.icon size={32} className="text-white drop-shadow-lg" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{step.label}</span>
            </motion.div>
          ))}
        </motion.div>
        {/* CTA Button with pulse */}
        <a href="#get-started">
          <motion.button
            whileHover={{ scale: 1.09, boxShadow: "0 4px 32px #38bdf855", filter: "brightness(1.08) drop-shadow(0 0 16px #38bdf8aa)", borderColor: "#38bdf8" }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0 0 0 0 #38bdf855",
                "0 0 0 12px #38bdf822",
                "0 0 0 0 #38bdf800"
              ],
              y: [0, -4, 0, 4, 0],
            }}
            transition={{
              boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 3.2, ease: "easeInOut" }
            }}
            className="px-6 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 shadow-lg hover:shadow-blue-400/30 hover:shadow-2xl transition-all duration-200 text-base mb-8 relative overflow-hidden cursor-pointer border-2 border-transparent backdrop-blur-md bg-opacity-80"
            style={{ outline: 'none', background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 60%, #0ea5e9 100%)', boxShadow: '0 2px 16px #38bdf822, 0 1.5px 8px #2563eb22' }}
          >
            <span className="relative z-10">Get Started</span>
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
