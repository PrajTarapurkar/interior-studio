"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* PREMIUM FOOTER */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
   className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
>

  {/* GOLD GLOW */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#d6b98c]/10 blur-[120px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* MAIN RECTANGLE */}
    <div className="relative overflow-hidden rounded-[28px] border border-[#d6b98c]/40 bg-gradient-to-r from-[#0f0f0f] via-[#111111] to-[#0f0f0f] px-6 md:px-16 py-7 md:py-8 shadow-[0_15px_60px_rgba(0,0,0,0.5)]">

      {/* TOP & BOTTOM LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-[#d6b98c] blur-sm"></div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-[#d6b98c] blur-sm"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-[0.18em] leading-none">

            <span className="text-white">
              KULAL
            </span>

            <span className="text-[#d6b98c] ml-3">
              INTERIORS
            </span>

          </h2>

          <p className="mt-4 text-[10px] md:text-sm uppercase tracking-[0.45em] text-gray-400">

            Luxury Interior Design Studio

          </p>

        </div>

        {/* DIVIDER */}
        <div className="hidden md:block h-24 w-[1px] bg-white/10"></div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5 md:gap-7">

          {/* INSTAGRAM */}
          <motion.a
            whileHover={{ y: -5, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/kulal_interiors?igsh=OHhwNm9yMHd6aDll"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-[#d6b98c]/60 flex items-center justify-center text-white hover:text-[#d6b98c] hover:bg-[#d6b98c]/10 transition duration-300"
          >
            <FaInstagram className="text-2xl md:text-4xl" />
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            whileHover={{ y: -5, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-[#d6b98c]/60 flex items-center justify-center text-white hover:text-[#d6b98c] hover:bg-[#d6b98c]/10 transition duration-300"
          >
            <FaLinkedinIn className="text-2xl md:text-4xl" />
          </motion.a>

          {/* YOUTUBE */}
          <motion.a
            whileHover={{ y: -5, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-[#d6b98c]/60 flex items-center justify-center text-white hover:text-[#d6b98c] hover:bg-[#d6b98c]/10 transition duration-300"
          >
            <FaYoutube className="text-2xl md:text-4xl" />
          </motion.a>

        </div>

      </div>

    </div>

  </div>

</motion.section>
    </>
  );
}