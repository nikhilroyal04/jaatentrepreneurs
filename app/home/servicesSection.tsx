"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Cloud } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Robust, scalable, and modern web apps tailored to your business needs.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Beautiful, high-performance apps for iOS and Android platforms.",
    color: "from-fuchsia-500 to-blue-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Stunning, user-centric designs that delight and convert.",
    color: "from-cyan-400 to-fuchsia-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure and DevOps services.",
    color: "from-blue-600 to-fuchsia-400",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-fuchsia-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Services</span>
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl text-gray-600 mb-8">
          From idea to launch, we deliver end-to-end solutions for modern brands.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08, rotateX: 10, rotateY: -10 }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 bg-white/50 shadow-2xl border border-blue-100/40 backdrop-blur-2xl flex flex-col items-center group relative overflow-hidden transition-all duration-300 hover:shadow-blue-400/40 hover:shadow-2xl hover:border-cyan-400/60`}
              style={{
                boxShadow: '0 2px 24px #38bdf822, 0 1.5px 8px #2563eb22',
                border: '1.5px solid rgba(56,189,248,0.10)',
                background: 'linear-gradient(120deg,rgba(255,255,255,0.75) 60%,rgba(236,254,255,0.7) 100%)',
              }}
            >
              {/* Animated border/glow on hover */}
              <motion.span
                className="absolute inset-0 rounded-3xl pointer-events-none z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: `linear-gradient(120deg, #38bdf8 0%, #a21caf 100%)`,
                  filter: 'blur(12px)',
                  mixBlendMode: 'screen',
                }}
              />
              {/* Service Icon with floating animation */}
              <motion.div
                className={`mb-5 p-5 rounded-full bg-gradient-to-tr ${service.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-200 z-20`}
                animate={{ y: [0, -8, 0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.2 + i, ease: "easeInOut" }}
                style={{ boxShadow: '0 4px 24px #38bdf855' }}
              >
                <service.icon size={40} />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 tracking-tight z-20">{service.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base z-20">{service.desc}</p>
              {/* Glass shine effect */}
              <motion.span
                className="absolute left-0 top-0 w-full h-full rounded-3xl pointer-events-none z-20"
                initial={{ opacity: 0, x: -60 }}
                whileHover={{ opacity: 0.18, x: 60 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(120deg, transparent 60%, #fff 80%, transparent 100%)",
                  mixBlendMode: "overlay"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 