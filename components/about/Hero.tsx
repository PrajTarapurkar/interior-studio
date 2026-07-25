"use client";
import { motion } from "framer-motion";

export default function Hero({ section }: { section: any }) {
  if (!section) {
  return null;
}
  return (
    <>
      {/* HERO */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-4xl mx-auto"
    >

      {/* LABEL */}
      <div className="
        inline-flex
        items-center
        gap-3
        border
        border-[#d6b98c]/20
        bg-[#111111]
        rounded-full
        px-5
        py-2
      ">

        <div className="h-2 w-2 rounded-full bg-[#d6b98c]"></div>

        <p className="
          uppercase
          tracking-[0.2em]
          text-[#d6b98c]
          text-[10px]
          sm:text-xs
        ">

          {section.badge}

        </p>

      </div>

      {/* TITLE */}
      <h1 className="
        mt-8
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-[72px]
        xl:text-[78px]
        leading-[0.95]
        tracking-tight
        font-semibold
        text-white
      ">

        {section.heading}
        <span className="block text-[#d6b98c] mt-2">
          {section.highlightText}
        </span>

      </h1>

      {/* DESC */}
      <p className="
        mt-8
        max-w-3xl
        mx-auto
        text-gray-100
        text-sm
        sm:text-base
        lg:text-xl
        leading-relaxed
      ">

        {section.description}

      </p>

    </motion.div>
    </>
  );
}