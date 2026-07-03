"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
<section className="relative pt-30 md:pt-28 pb-8 md:pb-5 text-center bg-black text-white overflow-hidden">

 

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 px-6"
  >

    {/* PORTFOLIO */}
    <p
      className="
        uppercase
        tracking-[0.45em]
        text-[10px]
        md:text-[18px]
        font-semibold
        text-[#d6b98c]
        mb-1
      "
    >
      PORTFOLIO
    </p>

    {/* TITLE */}
    <h1
      className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-3
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-[72px]
        font-extrabold
        leading-none
      "
    >
      <span className="text-white">
        Signature 
      </span>

      <span className="text-[#d6b98c]">
        Projects
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p
      className="
        mt-5
        text-sm
        md:text-[15px]
        text-gray-300
        max-w-xl
        mx-auto
        leading-relaxed
      "
    >
      Explore our curated collection of luxury residential and
      commercial interiors crafted with timeless elegance.
    </p>

  </motion.div>

</section>
    </>
  );
}