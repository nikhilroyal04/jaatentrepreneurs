"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";

// Define a type for a sparkle
interface Sparkle {
  left: string;
  top: string;
  fontSize: string;
  color: string;
  yOffset: number;
  duration: number;
}

export default function ContactSection() {
  // Generate sparkles only on the client to avoid hydration mismatch
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([]);
  React.useEffect(() => {
    setSparkles(
      Array.from({ length: 14 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${16 + Math.random() * 16}px`,
        color: i % 2 === 0 ? "#38bdf8" : "#a21caf",
        yOffset: -30 - Math.random() * 40,
        duration: 6 + Math.random() * 4,
      }))
    );
  }, []);

  // Form state
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
        setError("");
      } else {
        setSuccess(false);
        setError(data.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Error in contact form submission:', err);
      setSuccess(false);
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  }

  // Hide success/error message when user types again or after 2 seconds
  React.useEffect(() => {
    if (name || email || message) {
      setSuccess(false);
      setError("");
    }
  }, [name, email, message]);

  React.useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  React.useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError("") , 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <section id="contact" className="scroll-mt-24 relative py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-fuchsia-50 overflow-hidden">
      {/* Unique Metro/Geometric Animated Background */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 500"
        fill="none"
        preserveAspectRatio="none"
        initial={{ opacity: 0.18, rotate: 0 }}
        animate={{ opacity: [0.18, 0.28, 0.18], rotate: 360 }}
        transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
        style={{ minWidth: '100vw', minHeight: '400px' }}
      >
        {/* Metro-style animated lines */}
        <motion.line
          x1="100" y1="120" x2="1340" y2="120"
          stroke="#38bdf8" strokeWidth="2"
          initial={{ x1: 100 }}
          animate={{ x1: [100, 200, 100] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.line
          x1="200" y1="380" x2="1240" y2="380"
          stroke="#a21caf" strokeWidth="2"
          initial={{ x2: 1240 }}
          animate={{ x2: [1240, 1140, 1240] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 3 }}
        />
        {/* Moving dots */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={180 + i * 150}
            cy={i % 2 === 0 ? 120 : 380}
            r={8}
            fill={i % 2 === 0 ? "#38bdf8" : "#a21caf"}
            animate={{
              cy: [i % 2 === 0 ? 120 : 380, i % 2 === 0 ? 140 : 360, i % 2 === 0 ? 120 : 380],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 7 + i,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Geometric shapes */}
        <motion.rect
          x="400" y="200" width="60" height="60" rx="16"
          fill="#38bdf822"
          stroke="#38bdf8" strokeWidth="2"
          animate={{ y: [200, 220, 200] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.polygon
          points="900,250 930,290 870,290"
          fill="#a21caf22"
          stroke="#a21caf" strokeWidth="2"
          animate={{ points: [
            "900,250 930,290 870,290",
            "900,270 930,250 870,290",
            "900,250 930,290 870,290"
          ] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
        {/* Contact Form */}
        <motion.form
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/80 rounded-3xl shadow-2xl border border-blue-100/40 backdrop-blur-2xl p-10 flex flex-col gap-6 relative overflow-hidden group"
          onSubmit={handleSubmit}
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
          {/* Heading with gradient and animation */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-2"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Us</span>
          </motion.h2>
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-cyan-700 mb-4"
          >
            Let&apos;s build something amazing together.
          </motion.p>
          {/* Floating label inputs */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium text-gray-700 mb-1">Name</label>
            <Input
              id="name"
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-gray-700 mb-1">Email</label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="rounded-lg px-4 py-3 border border-blue-100 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 text-gray-900 w-full resize-none"
              placeholder="Type your message..."
            />
          </div>
          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.08, boxShadow: loading ? undefined : "0 4px 24px #38bdf855", borderColor: loading ? undefined : "#38bdf8" }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            animate={{
              boxShadow: [
                "0 0 0 0 #38bdf855",
                "0 0 0 8px #38bdf822",
                "0 0 0 0 #38bdf800"
              ],
              y: [0, -2, 0, 2, 0],
            }}
            transition={{
              boxShadow: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 3.8, ease: "easeInOut" }
            }}
            type="submit"
            className="mt-2 px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-400 shadow-lg hover:shadow-blue-400/30 hover:shadow-2xl transition-all duration-200 text-lg relative overflow-hidden cursor-pointer border-2 border-transparent backdrop-blur-md bg-opacity-80 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ outline: 'none', background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 60%, #a21caf 100%)', boxShadow: '0 2px 16px #38bdf822, 0 1.5px 8px #2563eb22' }}
            disabled={loading}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 w-full">
              <Send size={20} className="inline-block" />
              {loading ? "Sending..." : "Send Message"}
              <Sparkles size={16} className="inline-block text-yellow-400 ml-1 animate-pulse" />
            </span>
          </motion.button>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center font-semibold shadow-sm"
            >
              Thanks for reaching out! We will connect with you shortly.
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-center font-semibold shadow-sm"
            >
              {error}
            </motion.div>
          )}
        </motion.form>
        {/* Contact Info */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 items-start md:items-center relative z-20"
        >
          <motion.div
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex items-center gap-4 bg-white/70 rounded-xl px-5 py-4 shadow border border-blue-100/40 backdrop-blur-lg"
          >
            <Mail className="text-blue-500" />
            <span className="text-gray-700 font-medium">namaste@jaatentrepreneurs.com</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="flex items-center gap-4 bg-white/70 rounded-xl px-5 py-4 shadow border border-fuchsia-100/40 backdrop-blur-lg"
          >
            <Phone className="text-fuchsia-500" />
            <span className="text-gray-700 font-medium">+91 9068552519</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="flex items-center gap-4 bg-white/70 rounded-xl px-5 py-4 shadow border border-fuchsia-100/40 backdrop-blur-lg"
          >
            <Phone className="text-fuchsia-500" />
            <span className="text-gray-700 font-medium">+91 8433008728</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="flex items-center gap-4 bg-white/70 rounded-xl px-5 py-4 shadow border border-cyan-100/40 backdrop-blur-lg"
          >
            <MapPin className="text-cyan-500" />
            <span className="text-gray-700 font-medium">Meerut, Uttar Pradesh, India</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="flex items-center gap-4 bg-white/70 rounded-xl px-5 py-4 shadow border border-cyan-100/40 backdrop-blur-lg"
          >
            <MapPin className="text-cyan-500" />
            <span className="text-gray-700 font-medium">Muzaffarnagar, Uttar Pradesh, India</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 