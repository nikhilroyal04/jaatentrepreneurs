"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Cloud } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Robust, scalable, and modern web apps tailored to your business needs. We deliver high-performance websites using Next.js, React, and the latest technologies. Our solutions are optimized for speed, security, and seamless user experience, helping your business stand out online.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Beautiful, high-performance apps for iOS and Android platforms. Our team builds custom mobile solutions ensuring seamless user experiences and robust functionality. We handle everything from concept to launch, so your app succeeds in a competitive market.",
    color: "from-fuchsia-500 to-blue-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Stunning, user-centric designs that delight and convert. We create engaging digital experiences focused on usability, accessibility, and brand impact. Our design process ensures your product is intuitive, attractive, and effective for your audience.",
    color: "from-cyan-400 to-fuchsia-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure and DevOps services. We help businesses leverage the power of the cloud for growth, efficiency, and innovation. Our experts ensure your systems are reliable, cost-effective, and ready for future expansion.",
    color: "from-blue-600 to-fuchsia-400",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 relative py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-fuchsia-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Services</span>
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl text-gray-600 mb-8">
          From idea to launch, we deliver end-to-end solutions for modern brands.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 40px #38bdf855", borderColor: "#38bdf8" }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
              viewport={{ once: true }}
              className={`
                group relative rounded-3xl p-8 bg-white/60 shadow-2xl border-2 border-transparent
                backdrop-blur-2xl flex flex-col items-center overflow-hidden transition-all duration-300
                hover:border-blue-400 hover:shadow-blue-400/40 hover:shadow-2xl
              `}
              style={{
                boxShadow: '0 2px 24px #38bdf822, 0 1.5px 8px #2563eb22',
                background: 'linear-gradient(120deg,rgba(255,255,255,0.85) 60%,rgba(236,254,255,0.7) 100%)',
              }}
            >
              {/* Gradient Accent Bar */}
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-400 animate-gradient-x" />
              {/* Service Icon with animation */}
              <motion.div
                className={`mb-5 p-5 rounded-full bg-gradient-to-tr ${service.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-200 z-20`}
                animate={{ y: [0, -8, 0, 8, 0], rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.2 + i, ease: "easeInOut" }}
                style={{ boxShadow: '0 4px 24px #38bdf855' }}
              >
                <service.icon size={40} />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight z-20">{service.title}</h3>
              <p className="text-gray-500 text-base z-20">{service.desc}</p>
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