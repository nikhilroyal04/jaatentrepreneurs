"use client";
import { motion } from "framer-motion";
import React from "react";

const clients = [
  { name: "Acme Corp" },
  { name: "Techify" },
  { name: "InnoSoft" },
  { name: "CloudBase" },
  { name: "FinEdge" },
  { name: "HealthSync" },
  { name: "EduPro" },
  { name: "RetailX" },
];

export default function ClientsSection() {
  // Marquee pause state
  const [paused, setPaused] = React.useState(false);
  // Duplicate clients for infinite effect
  const marqueeClients = [...clients, ...clients];

  return (
    <section id="clients" className="relative py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Clients</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl text-lg text-gray-600 mb-10"
        >
          Trusted by innovative brands worldwide.
        </motion.p>
        {/* Marquee */}
        <div
          className="relative w-full overflow-x-hidden py-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            animate={{
              x: paused ? 0 : [0, -((marqueeClients.length / 2) * 320)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                ease: "linear",
              },
            }}
            style={{ display: 'flex', minWidth: 'max-content' }}
          >
            {marqueeClients.map((client, i) => (
              <motion.div
                key={client.name + i}
                whileHover={{ scale: 1.12, boxShadow: "0 4px 32px #38bdf855", borderColor: "#38bdf8" }}
                className="flex items-center justify-center h-20 w-56 mx-6 bg-white/80 rounded-2xl shadow border border-blue-100/40 backdrop-blur-lg transition-all duration-300 cursor-pointer hover:shadow-blue-400/30 hover:shadow-2xl hover:border-cyan-400/60"
                style={{ minWidth: 220 }}
              >
                <span className="text-xl font-bold text-gray-700 tracking-wide">{client.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 