"use client";

import { motion } from "framer-motion";
import { Layers, Layout, Shield, Zap } from "lucide-react";

const items = [
  {
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    title: "UI/UX Design",
    description: "Figma-first, brand-aware user experiences that remain highly memorable.",
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Custom Development",
    description: "Hand-coded solutions built with Next.js and React. Fast and highly scalable.",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-500" />,
    title: "E-Commerce Systems",
    description: "Premium modern storefronts engineered specifically to maximize conversion rates.",
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    title: "Performance & SEO",
    description: "Architected for perfect Lighthouse scores, search rankings, and accessibility.",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Our Capabilities</h2>
        <p className="text-zinc-500 mt-4">Engineered precision from concept to final deployment.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-8 bg-zinc-900/50 rounded-3xl border border-zinc-800/80 backdrop-blur-sm hover:border-zinc-700 transition-all group"
          >
            <div className="p-3 bg-zinc-800/60 rounded-2xl w-fit group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mt-6">{item.title}</h3>
            <p className="text-zinc-400 mt-2 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
