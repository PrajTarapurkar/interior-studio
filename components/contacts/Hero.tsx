"use client";

import { motion } from "framer-motion";

export default function Hero({ section }: { section: any }) {
  if (!section) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-20 bg-black text-center overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.18),transparent_55%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
        
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
className="relative z-10 max-w-5xl mx-auto px-5 transform-gpu will-change-transform"        >

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-[#d6b98c] mb-5">
            {section.badge}
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold leading-[1.05]">

            {section.heading}

            <span className="block text-[#d6b98c]">
              {section.highlightText}
            </span>

          </h1>

          <p className="mt-6 md:mt-10 text-sm sm:text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">

            {section.description}

          </p>

        </motion.div>

      </section>
    </>
  );
}