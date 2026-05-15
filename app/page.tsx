"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

export default function Home() {

   const [menuOpen, setMenuOpen] = useState(false);

   /* STOP BACKGROUND SCROLL */
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

  return (
    <main className="bg-white text-white overflow-hidden scroll-smooth">

      {/* PREMIUM NAVBAR */}
<nav
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-black/75
    backdrop-blur-2xl
    border-b
    border-white/10
  "
>

  <div
    className="
      max-w-7xl
      mx-auto
      flex
      items-center
      justify-between
      px-4
      sm:px-5
      md:px-8
      py-3
    "
  >

    {/* LEFT SIDE */}
    <div className="flex items-center gap-3 min-w-0">

      {/* LOGO */}
      <div className="relative flex-shrink-0">

        <div className="absolute inset-0 bg-[#d6b98c]/20 blur-xl rounded-full"></div>

        <img
          src="/images/logo.png"
          alt="Logo"
          className="
            relative
            h-11
            w-11
            sm:h-12
            sm:w-12
            md:h-14
            md:w-14
            rounded-full
            object-cover
            border
            border-[#d6b98c]/20
            shadow-[0_0_25px_rgba(214,185,140,0.25)]
          "
        />

      </div>

      {/* BRAND TEXT */}
      <div className="leading-none min-w-0">

        <h1
          className="
            text-[15px]
            sm:text-[17px]
            md:text-[28px]
            font-bold
            tracking-[-0.04em]
            text-white
            truncate
          "
        >
          Kulal Interiors
        </h1>

        <p
          className="
            uppercase
            tracking-[0.24em]
            text-[6px]
            md:text-[9px]
            text-[#d6b98c]
            mt-1
          "
        >
          Luxury Interior Design
        </p>

      </div>

    </div>

    {/* DESKTOP NAVIGATION */}
    <div
      className="
        hidden
        md:flex
        items-center
        gap-8
        text-sm
        uppercase
        tracking-[0.18em]
        font-semibold
        text-white
      "
    >

      <a
        href="/"
        className="
          text-[#d6b98c]
          px-4
          py-2
          rounded-full
          bg-[#d6b98c]/10
          border
          border-[#d6b98c]/25
        "
      >
        Home
      </a>

      <a
        href="/projects"
        className="hover:text-[#d6b98c] transition duration-300"
      >
        Projects
      </a>

      <a
        href="/#services"
        className="hover:text-[#d6b98c] transition duration-300"
      >
        Services
      </a>

      <a
        href="/contact"
        className="hover:text-[#d6b98c] transition duration-300"
      >
        Contact
      </a>

    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(true)}
      className="
        md:hidden
        text-white
        text-[30px]
        p-1
      "
    >
      <HiOutlineMenuAlt3 />
    </button>

  </div>

</nav>

{/* MOBILE MENU */}
{menuOpen && (

  <motion.div
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "100%" }}
    transition={{ duration: 0.35 }}
    className="
      fixed
      inset-0
      z-[100]
      bg-[#050505]
      px-5
      py-5
      flex
      flex-col
      overflow-y-auto
    "
  >

    {/* TOP */}
    <div className="flex items-start justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* LOGO */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="
            h-14
            w-14
            rounded-full
            object-cover
            border
            border-[#d6b98c]/30
            shadow-[0_0_20px_rgba(214,185,140,0.2)]
          "
        />

        {/* TEXT */}
        <div>

          <h2
            className="
              text-white
              text-[20px]
              font-bold
              leading-none
            "
          >
            Kulal Interiors
          </h2>

          <p
            className="
              text-[#d6b98c]
              uppercase
              tracking-[0.24em]
              text-[7px]
              mt-1
            "
          >
            Luxury Interior Design
          </p>

        </div>

      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setMenuOpen(false)}
        className="
          text-white
          text-[42px]
          leading-none
        "
      >
        <HiOutlineX />
      </button>

    </div>

    {/* NAV LINKS */}
    <div className="mt-10 flex flex-col">

      <a
        href="/"
        className="
          py-4
          border-b
          border-white/8
          text-[18px]
          font-light
          text-[#d6b98c]
        "
      >
        Home
      </a>

      <a
        href="/projects"
        className="
          py-4
          border-b
          border-white/8
          text-[18px]
          font-light
          text-white
        "
      >
        Projects
      </a>

      <a
        href="/#services"
        className="
          py-4
          border-b
          border-white/8
          text-[18px]
          font-light
          text-white
        "
      >
        Services
      </a>

      <a
        href="/contact"
        className="
          py-4
          border-b
          border-white/8
          text-[18px]
          font-light
          text-white
        "
      >
        Contact
      </a>

    </div>

    {/* PHONE + WHATSAPP */}
    <div
      className="
        mt-8
        border
        border-white/10
        rounded-[24px]
        px-5
        py-4
        flex
        items-center
        justify-between
        bg-[#0b0b0b]
      "
    >

      {/* LEFT */}
      <div>

        <p
          className="
            text-gray-500
            uppercase
            tracking-[0.22em]
            text-[9px]
            mb-2
          "
        >
          Call Us
        </p>

        <h3 className="text-white text-[18px] font-light">
          +91 7709943271
        </h3>

      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917709943271"
        target="_blank"
        rel="noopener noreferrer"
        className="
          h-20
          w-20
          rounded-[22px]
          border
          border-[#d6b98c]/30
          flex
          items-center
          justify-center
          text-[#d6b98c]
          text-4xl
          bg-[#d6b98c]/5
          shadow-[0_0_30px_rgba(214,185,140,0.12)]
        "
      >
        <FaWhatsapp />
      </a>

    </div>

    {/* BUTTON */}
    <a
      href="/contact"
      className="
        mt-5
        w-full
        flex
        items-center
        justify-center
        bg-[#d6b98c]
        text-black
        py-3.5
        rounded-2xl
        text-[15px]
        font-semibold
        shadow-[0_10px_30px_rgba(214,185,140,0.25)]
      "
    >
      Get Free Consultation
    </a>

    {/* FOLLOW */}
    <div className="mt-8 text-center">

      <p
        className="
          text-gray-500
          uppercase
          tracking-[0.30em]
          text-[10px]
          mb-5
        "
      >
        Follow Us
      </p>

  

        {/* SOCIAL */}
      <div className="flex items-center justify-center gap-5">

        <a
          href="https://instagram.com"
          target="_blank"
          className="
            h-16
            w-16
            rounded-full
            border
            border-[#d6b98c]/30
            flex
            items-center
            justify-center
            text-white
            text-2xl
          "
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="
            h-16
            w-16
            rounded-full
            border
            border-[#d6b98c]/30
            flex
            items-center
            justify-center
            text-white
            text-2xl
          "
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          className="
            h-16
            w-16
            rounded-full
            border
            border-[#d6b98c]/30
            flex
            items-center
            justify-center
            text-white
            text-2xl
          "
        >
          <FaYoutube />
        </a>

      </div>

    </div> {/* FOLLOW DIV END */}

  </motion.div>

)}

      {/* Hero Section */}
<section
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
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative z-10 max-w-7xl pt-24 md:pt-32"
  >

    {/* TOP LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
      }}
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
    </motion.p>

    {/* MAIN HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 1.2,
      }}
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

    </motion.h1>

    {/* DESCRIPTION */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.9,
        duration: 1,
      }}
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

    </motion.p>

    {/* BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.1,
        duration: 1,
      }}
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

    </motion.div>

  </motion.div>

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

</section>
      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-20 md:py-28 px-4 md:px-8 bg-[#f8f5f1] text-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 md:mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (

              <motion.div
                key={item}
                whileHover={{ y: -12, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group"
              >

                <div className="overflow-hidden">

                  <img
                    src={`/images/project${item}.jpg`}
                    alt="Project"
                    className="h-[320px] md:h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl md:text-3xl font-semibold">

                    {item === 1
                      ? "Modern Living Room"
                      : item === 2
                      ? "Contemporary Bedroom"
                      : "Luxury Kitchen"}

                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">

                    Elegant luxury interiors crafted with timeless aesthetics.

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.section>

{/* Luxury Showcase Slider */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 md:py-28 bg-[#0b0b0b] overflow-hidden"
>

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="mb-14 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4">
        Luxury Interiors
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">

        Explore Our
        <span className="block text-[#d6b98c]">
          Signature Spaces
        </span>

      </h2>

      <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl leading-relaxed">

        Discover premium interiors crafted with timeless elegance,
        modern sophistication, and luxurious comfort.

      </p>

    </div>

  </div>

  {/* Scrollable Slider */}
  <div className="flex gap-5 md:gap-8 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">

    {[
      {
        image: "/images/project1.jpg",
        title: "Luxury Living Room",
        city: "Pune",
      },
      {
        image: "/images/project2.jpg",
        title: "Modern Bedroom",
        city: "Mumbai",
      },
      {
        image: "/images/project3.jpg",
        title: "Premium Kitchen",
        city: "Bangalore",
      },
      {
        image: "/images/project1.jpg",
        title: "Elegant Workspace",
        city: "Delhi",
      },
      {
        image: "/images/project2.jpg",
        title: "Royal Penthouse",
        city: "Hyderabad",
      },
      {
        image: "/images/project3.jpg",
        title: "Luxury Dining Area",
        city: "Chennai",
      },
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative min-w-[85%] sm:min-w-[60%] md:min-w-[38%] lg:min-w-[30%] h-[500px] md:h-[650px] rounded-[34px] overflow-hidden snap-center group shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      >

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        {/* Glow */}
        <div className="absolute inset-0 bg-[#d6b98c]/0 group-hover:bg-[#d6b98c]/10 transition duration-500"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">

          <p className="uppercase tracking-[0.3em] text-[#d6b98c] text-[10px] md:text-xs mb-3">
            {item.city} • Luxury Interior
          </p>

          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">

            {item.title}

          </h3>

        </div>

      </motion.div>

    ))}

  </div>

</motion.section>
      
{/* VIDEO TOUR SECTION */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden"
>

  {/* GOLD GLOW */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#d6b98c]/10 blur-[140px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

    {/* HEADING */}
    <div className="text-center mb-14 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4">
        Luxury Video Tours
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">

        Explore Interior
        <span className="block text-[#d6b98c]">
          Walkthrough Experiences
        </span>

      </h2>

      <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">

        Step inside our premium residential and commercial interiors
        through cinematic walkthrough experiences crafted with elegance.

      </p>

    </div>

    {/* SCROLLABLE VIDEO SLIDER */}
    <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

      {[
  {
    video: "/videos/video1.mp4",
    title: "Luxury Living Room Tour",
    location: "Pune • Residential Interior",
    desc: "Elegant modern living space designed with warm textures, premium furniture, and timeless luxury aesthetics.",
  },
  {
    video: "/videos/video2.mp4",
    title: "Modern Bedroom Tour",
    location: "Mumbai • Luxury Apartment",
    desc: "Sophisticated bedroom crafted for comfort and minimal luxury with ambient lighting and premium finishes.",
  },
  {
    video: "/videos/video3.mp4",
    title: "Premium Kitchen Tour",
    location: "Bangalore • Modular Kitchen",
    desc: "Functional luxury kitchen blending seamless storage solutions with modern contemporary styling.",
  },
  {
    video: "/videos/video4.mp4",
    title: "Royal Penthouse Tour",
    location: "Hyderabad • Penthouse Interior",
    desc: "Exclusive penthouse walkthrough showcasing luxurious lighting, textures, and modern elegance.",
  },
  {
    video: "/videos/video5.mp4",
    title: "Elegant Workspace Tour",
    location: "Delhi • Commercial Interior",
    desc: "Premium office interior crafted for productivity, sophistication, and modern functionality.",
  },
  {
    video: "/videos/video6.mp4",
    title: "Luxury Dining Area Tour",
    location: "Chennai • Dining Interior",
    desc: "Refined dining space designed with warm ambient tones, premium décor, and elegant aesthetics.",
  },
].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          transition={{ duration: 0.4 }}
          className="
            min-w-[88%]
            sm:min-w-[70%]
            md:min-w-[48%]
            lg:min-w-[38%]
            bg-[#111111]
            border
            border-white/10
            rounded-[30px]
            overflow-hidden
            snap-center
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            group
          "
        >

          {/* VIDEO */}
          <div className="relative overflow-hidden">

            <video
              src={item.video}
              controls
              className="
                h-[260px]
                sm:h-[320px]
                md:h-[420px]
                w-full
                object-cover
                group-hover:scale-[1.02]
                transition
                duration-700
              "
            />

            {/* VIDEO OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8">

            <p className="uppercase tracking-[0.28em] text-[#d6b98c] text-[10px] md:text-xs mb-3">
              {item.location}
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">

              {item.title}

            </h3>

            <p className="mt-5 text-gray-400 leading-relaxed text-sm md:text-base">

              {item.desc}

            </p>

            {/* BUTTON */}
            <div className="mt-6">

              <button
                className="
                  relative
                  overflow-hidden
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#d6b98c]/30
                  bg-[#d6b98c]/10
                  text-[#d6b98c]
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  hover:bg-[#d6b98c]
                  hover:text-black
                  transition-all
                  duration-500
                "
              >

                Watch Tour

              </button>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</motion.section>



      {/* SERVICES SECTION */}
<motion.section
  id="services"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 md:py-28 px-4 md:px-8 bg-black text-white overflow-hidden"
>

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4 font-medium">
        Services
      </p>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
        What We Offer
      </h2>

      <p className="mt-6 text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">

        Premium luxury interior solutions designed with timeless elegance,
        modern sophistication, and functional comfort.

      </p>

    </div>

    {/* TOP SERVICE CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Residential Design",
          desc: "Elegant luxury interiors crafted for modern living spaces.",
        },
        {
          title: "Commercial Spaces",
          desc: "Premium office and commercial interiors with sophistication.",
        },
        {
          title: "Space Planning",
          desc: "Optimized layouts balancing beauty and functionality.",
        },
        {
          title: "Furniture Styling",
          desc: "Custom styling solutions for timeless interior aesthetics.",
        },
      ].map((service, index) => (

        <motion.div
          key={index}
          whileHover={{ y: -10, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-[#d6b98c]/40 transition duration-300"
        >

          <h3 className="text-2xl font-semibold tracking-tight mb-5 text-white">
            {service.title}
          </h3>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
            {service.desc}
          </p>

        </motion.div>

      ))}

    </div>

    {/* ADDITIONAL SERVICES */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-16 md:mt-24 text-center"
    >

      {/* Small Heading */}
      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-10 font-medium">
        Our Services
      </p>

      {/* INLINE SERVICES */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 md:gap-x-8">

        {[
          "Modular Kitchens",
          "Modular Wardrobes",
          "Lighting",
          "Flooring",
          "Electrical Work",
          "Civil Work",
          "False Ceiling",
          "Wall Design & Painting",
        ].map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            className="group flex items-center gap-3"
          >

            {/* GOLD DOT */}
            <div className="h-2.5 w-2.5 rounded-full bg-[#d6b98c] shadow-[0_0_15px_rgba(214,185,140,0.5)] group-hover:scale-150 transition duration-300"></div>

            {/* TEXT */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wide group-hover:text-[#d6b98c] transition duration-300">

              {item}

            </p>

          </motion.div>

        ))}

      </div>

    </motion.div>

  </div>

</motion.section>


{/* OUR PRESENCE SECTION */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="relative py-20 md:py-32 bg-[#050505] overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#d6b98c]/10 rounded-full blur-[120px]"></div>

  <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[140px]"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="text-center mb-14 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-5">
        Our Presence
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">

        We Provide Services
        <span className="block text-[#d6b98c]">
          Across Multiple Locations
        </span>

      </h2>

      <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">

        Delivering luxurious and timeless interior experiences
        across major cities and premium Pune locations.

      </p>

    </div>

    {/* Highlight Cities */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

      {[
        {
          city: "Pune",
          text: "Premium Interior Solutions",
        },
        {
          city: "Mumbai",
          text: "Luxury Residential Spaces",
        },
        {
          city: "Parbhani",
          text: "Modern Elegant Interiors",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="relative overflow-hidden rounded-[30px] border border-[#d6b98c]/20 bg-gradient-to-br from-[#151515] to-[#1f1f1f] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.45)]"
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.15),transparent_40%)]"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[0.3em] text-[#d6b98c] text-xs mb-4">
              Featured City
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {item.city}
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {item.text}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

    {/* Pune Areas */}
    <div className="relative bg-gradient-to-br from-[#111111] to-[#1c1c1c] border border-white/10 rounded-[35px] md:rounded-[45px] p-6 md:p-12 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.12),transparent_35%)]"></div>

      <div className="relative z-10 mb-10">

        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Pune Locations We Serve
        </h3>

        <p className="text-gray-400 max-w-3xl leading-relaxed text-sm md:text-base">

          Interior services available across premium Pune locations.

        </p>

      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">

        {[
          "Punawale",
          "Marunji",
          "Hinjewadi",
          "Baner",
          "Balewadi",
          "Kiwale",
          "Ravet",
          "Dhanori",
          "Moshi",
          "Dehu",
          "Lohegaon",
          "Hadapsar",
          "Mundwa",
          "Tathawade",
          "Charholi",
          "Kokane Chowk",
        ].map((location, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.03,
            }}
            whileHover={{
              x: 5,
              scale: 1.03,
            }}
            className="group flex items-center"
          >

            <div className="h-2 w-2 rounded-full bg-[#d6b98c] mr-3 group-hover:scale-150 transition duration-300"></div>

            <p className="text-sm md:text-base text-gray-300 group-hover:text-[#d6b98c] transition duration-300">

              {location}

            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</motion.section>

{/* PREMIUM FOOTER */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="relative bg-black py-10 px-4 overflow-hidden"
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

    </main>
  );
}