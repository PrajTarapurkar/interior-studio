"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function ProjectsPage() {

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
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">

      {/* PREMIUM NAVBAR */}
      <nav
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-black/85
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
    px-5
    md:px-8
    py-5
    md:py-4
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
                  h-14
                  w-14
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
  text-[22px]
  md:text-[28px]
  font-bold
  text-white
  tracking-[-0.04em]
"
              >
                Kulal Interiors
              </h1>

              <p
                className="
  mt-1.5
  uppercase
  tracking-[0.30em]
  text-[8px]
  md:text-[9px]
  text-[#d6b98c]
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
              className="hover:text-[#d6b98c] transition duration-300"
            >
              Home
            </a>

            <a
              href="/projects"
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
              text-[38px]
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
                text-white
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
                text-[#d6b98c]
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

          </div>

        </motion.div>

      )}



      {/* HERO SECTION */}
      <section className="relative pt-36 sm:pt-44 md:pt-52 pb-20 md:pb-32 text-center bg-black text-white overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 h-[250px] md:h-[500px] w-[250px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/20 blur-[100px] animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >

          <p className="uppercase tracking-[0.35em] text-[9px] md:text-sm text-[#d6b98c] mb-5">
            Portfolio
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Our Interior
            <br />
            Projects
          </h1>

          <p className="mt-6 text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Explore our curated collection of luxury residential
            and commercial interiors crafted with timeless elegance.
          </p>

        </motion.div>

      </section>

      {/* PROJECTS GRID */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#f8f5f1]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {/* PROJECT 1 */}
          <motion.a
            href="/projects/living-room"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -12, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >

            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.12)] group">

              <div className="overflow-hidden">

                <img
                  src="/images/project1.jpg"
                  alt="Project"
                  className="h-[260px] sm:h-[320px] md:h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-5 md:p-8">

                <h2 className="text-2xl md:text-3xl font-bold">
                  Full Luxury Interior
                </h2>

                <p className="mt-2 uppercase tracking-widest text-xs md:text-sm text-[#b08d57]">
                  Pune • Residential
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  Elegant modern villa interior crafted with warm lighting,
                  premium textures, and timeless aesthetics.
                </p>

              </div>

            </div>

          </motion.a>

          {/* PROJECT 2 */}
          <motion.a
            href="/projects/bedroom"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -12, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >

            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.12)] group">

              <div className="overflow-hidden">

                <img
                  src="/images/project2.jpg"
                  alt="Project"
                  className="h-[260px] sm:h-[320px] md:h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-5 md:p-8">

                <h2 className="text-2xl md:text-3xl font-bold">
                  Contemporary Bedroom
                </h2>

                <p className="mt-2 uppercase tracking-widest text-xs md:text-sm text-[#b08d57]">
                  Mumbai • Luxury Home
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  Sophisticated neutral palette bedroom designed for comfort,
                  calmness, and luxury living.
                </p>

              </div>

            </div>

          </motion.a>

          {/* PROJECT 3 */}
          <motion.a
            href="/projects/kitchen"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -12, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >

            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.12)] group">

              <div className="overflow-hidden">

                <img
                  src="/images/project3.jpg"
                  alt="Project"
                  className="h-[260px] sm:h-[320px] md:h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-5 md:p-8">

                <h2 className="text-2xl md:text-3xl font-bold">
                  Modern Luxury Kitchen
                </h2>

                <p className="mt-2 uppercase tracking-widest text-xs md:text-sm text-[#b08d57]">
                  Bangalore • Interior Styling
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  Minimal modern kitchen blending premium functionality
                  with timeless elegance.
                </p>

              </div>

            </div>

          </motion.a>

        </div>

      </section>

    </main>
  );
}