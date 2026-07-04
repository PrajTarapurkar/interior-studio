"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black border-b border-white/10">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,185,140,0.08),transparent_70%)]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-28 md:pb-16 text-center">

        {/* Top Heading */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-5"
        >

          <div className="w-14 h-[1px] bg-[#d6b98c]" />

          <span className="uppercase tracking-[0.45em] text-[#d6b98c] text-[10px] md:text-xs">
            Testimonials
          </span>

          <div className="w-14 h-[1px] bg-[#d6b98c]" />

        </motion.div>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-[family:var(--font-heading)]
            text-[36px]
            sm:text-[48px]
            md:text-[60px]
            lg:text-[70px]
            leading-none
            font-semibold
          "
        >
          <span className="text-white">Client </span>

          <span className="text-[#d6b98c]">
            Reviews
          </span>
        </motion.h1>

        {/* Divider */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 h-[2px] w-40 bg-[#d6b98c]"
        />

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            mt-5
            text-gray-300
            text-base
            md:text-xl
            max-w-xl
            mx-auto
            leading-relaxed
          "
        >
          Happy Clients. Beautiful Homes.
        </motion.p>

      </div>

    </section>
  );
}