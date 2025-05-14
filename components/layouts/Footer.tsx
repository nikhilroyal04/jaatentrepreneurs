"use client";

import { Github, Linkedin, MessageCircle } from "lucide-react";
import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-blue-50 to-cyan-50 border-t-2 border-blue-100 py-14 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="text-3xl font-extrabold text-gray-900 tracking-tight text-center">
          <Image src="/jaat.png" alt="Jaat Entrepreneurs" width={150} height={150} />
        </div>
        <div className="flex items-center gap-6 mt-2 justify-center">
          <a href="https://github.com/nikhilroyal04" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full bg-white shadow hover:bg-blue-50 hover:text-blue-600 text-gray-500 transition-all duration-200 p-3 hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nikhilroyal04/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-white shadow hover:bg-blue-200 hover:text-blue-700 text-gray-500 transition-all duration-200 p-3 hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://wa.me/919068552519" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-white shadow hover:bg-blue-200 hover:text-blue-700 text-gray-500 transition-all duration-200 p-3 hover:scale-110">
            <MessageCircle size={24} />
          </a>
        </div>
        <div className="text-gray-500 text-base text-center font-semibold mt-6">
          © {new Date().getFullYear()} Jaat Entrepreneurs. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 