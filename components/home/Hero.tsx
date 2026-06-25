"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      {/* Hero Section */}
<section
id="hero"
  className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4 md:px-6 overflow-hidden"
  style={{
    backgroundImage: "url('/images/hero.jpg')",
  }}
>

  {/* DARK CINEMATIC OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* TOP GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>

  {/* GOLD GLOW */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.4, 0.6, 0.4],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      top-1/2
      left-1/2
      h-[550px]
      w-[550px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#d6b98c]/20
      blur-[150px]
    "
  ></motion.div>

  {/* FLOATING LIGHT */}
  <motion.div
    animate={{
      x: [-20, 20, -20],
      y: [-10, 15, -10],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      top-[20%]
      right-[15%]
      h-[180px]
      w-[180px]
      rounded-full
      bg-[#d6b98c]/10
      blur-[100px]
    "
  ></motion.div>

  {/* CONTENT */}
  <div
  id="hero-content"
  className="relative z-10 max-w-7xl pt-24 md:pt-32"
>

    {/* TOP LABEL */}
    <p
  id="hero-label"
      className="
        uppercase
        tracking-[0.55em]
        text-[#d6b98c]
        text-[11px]
        md:text-[18px]
        font-semibold
        mb-8
        drop-shadow-[0_0_20px_rgba(214,185,140,0.4)]
      "
    >
      Luxury Interior Design
    </p>

    {/* MAIN HEADING */}
    <h1
  id="hero-title"
      className="
        text-5xl
        sm:text-6xl
        md:text-8xl
        lg:text-[115px]
        font-extrabold
        leading-[0.92]
        tracking-[-0.06em]
        text-white
      "
    >

      {/* FIRST LINE */}
      <span className="relative inline-block">

        <span className="relative z-10">
          Designing Timeless
        </span>

        {/* GOLD HIGHLIGHT */}
        <motion.span
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            absolute
            left-0
            bottom-3
            md:bottom-5
            w-full
            h-5
            md:h-7
            bg-[#d6b98c]/40
            blur-xl
            rounded-full
          "
        ></motion.span>

      </span>

      <br />

      {/* SECOND LINE */}
      <span className="relative inline-block mt-2">

        <span className="relative z-10">
          Modern Spaces
        </span>

        {/* WHITE GLOW */}
        <motion.span
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            left-0
            bottom-3
            md:bottom-5
            w-full
            h-5
            md:h-7
            bg-white/25
            blur-xl
            rounded-full
          "
        ></motion.span>

      </span>

    </h1>

    {/* DESCRIPTION */}
    <p
  id="hero-description"
      className="
        mt-10
        text-base
        md:text-2xl
        text-gray-200
        max-w-3xl
        mx-auto
        leading-relaxed
        px-2
        font-light
      "
    >

      Creating elegant interiors that blend modern sophistication
      with timeless comfort, premium craftsmanship, and luxury living.

    </p>

    {/* BUTTONS */}
    <div
  id="hero-buttons"
      className="
        mt-14
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-6
      "
    >

      {/* VIEW PROJECTS BUTTON */}
      <motion.a
        href="/projects"
        whileHover={{
          scale: 1.06,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="
          relative
          overflow-hidden
          group
          bg-[#d6b98c]
          text-black
          px-10
          py-4
          rounded-full
          font-semibold
          tracking-wide
          shadow-[0_15px_50px_rgba(214,185,140,0.35)]
        "
      >

        {/* SHINE EFFECT */}
        <span
          className="
            absolute
            top-0
            -left-[120%]
            h-full
            w-[60%]
            rotate-12
            bg-white/40
            blur-xl
            transition-all
            duration-1000
            group-hover:left-[140%]
          "
        ></span>

        {/* TEXT */}
        <span className="relative z-10 flex items-center gap-3">

          View Projects

          <motion.span
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            →
          </motion.span>

        </span>

      </motion.a>

      {/* CONTACT BUTTON */}
      <motion.a
        href="/contact"
        whileHover={{
          scale: 1.06,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="
          relative
          overflow-hidden
          group
          border
          border-white/25
          bg-white/5
          backdrop-blur-xl
          text-white
          px-10
          py-4
          rounded-full
          tracking-wide
        "
      >

        {/* GLOW EFFECT */}
        <span
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-r
            from-[#d6b98c]/20
            via-white/10
            to-[#d6b98c]/20
          "
        ></span>

        {/* BORDER GLOW */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            border
            border-[#d6b98c]/0
            group-hover:border-[#d6b98c]/40
            transition
            duration-500
          "
        ></span>

        {/* TEXT */}
        <span className="relative z-10 flex items-center gap-3">

          Contact Us

          <motion.span
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            ✦
          </motion.span>

        </span>

      </motion.a>

    </div>

  </div>

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

</section>

    </>
  );
}