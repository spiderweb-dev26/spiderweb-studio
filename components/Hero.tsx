"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
          Based in Addis Ababa
        </span>
        <h1 className="mt-4 text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          We Build Webs That <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Catch Eyes
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          SpiderWeb is an elite web design and development studio. We engineer high-performance, visually stunning digital solutions for modern brands.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all">
            Start a Project <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all">
            View Our Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}
