"use client";
import { motion } from "framer-motion";

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-16 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* All Technologies Used Grid */}
        <div className="relative mt-2 w-full flex flex-col items-center z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Tech Stack</span>
          </h2>
          <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 tracking-tight">What We Use</h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto relative z-20">
            {[
              "React", "Next.js", "Tailwind CSS", "TypeScript", "Redux",
              "Node.js", "Express", "Python", "FastAPI", "MongoDB",
              "React Native", "Flutter", "Swift", "Kotlin",
              "AWS", "GCP", "Azure", "Vercel",
              "Nginx", "Docker", "Linux", "CI/CD",
              "GitHub Actions", "Netlify"
            ].map((tech, i) => (
              <motion.span
                key={tech}
                animate={{
                  y: [0, -18 - (i % 3) * 4, 0, 12 + (i % 4) * 3, 0],
                  boxShadow: [
                    "0 1.5px 8px #38bdf822",
                    "0 4px 24px #38bdf855",
                    "0 1.5px 8px #38bdf822"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2 + (i % 5) * 0.3,
                  ease: "easeInOut",
                  delay: (i % 7) * 0.13
                }}
                whileHover={{ scale: 1.16, boxShadow: "0 2px 24px #38bdf8aa" }}
                className="px-4 py-2 rounded-full bg-white/60 border border-blue-100/40 backdrop-blur-md text-sm font-semibold text-gray-700 shadow transition-all duration-200 cursor-default select-none"
                style={{
                  background: 'linear-gradient(120deg,rgba(255,255,255,0.85) 60%,rgba(236,254,255,0.7) 100%)',
                  border: '1.5px solid rgba(56,189,248,0.13)',
                  boxShadow: '0 1.5px 8px #38bdf822',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 