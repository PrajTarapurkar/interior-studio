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

export default function ServicesPage() {

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

  const services = [
    {
      number: "1",
      title: "Designing",
      desc: "We translate your ideas into visual realities. From mood boards and 2D floor plans to high-end 3D walkthroughs, our design process ensures every inch of your space is optimized for aesthetics and utility.",
    },
    {
      number: "2",
      title: "Execution",
      desc: "Our skilled craftsmen and site supervisors bring the blueprints to life with precision and professionalism.",
    },
    {
      number: "3",
      title: "Technical Consultancy",
      desc: "Expert guidance on technical specifications, planning, feasibility, and budgeting for smooth execution.",
    },
    {
      number: "4",
      title: "Material Supply",
      desc: "Premium-grade materials sourced carefully to ensure long-lasting quality and elegant finishes.",
    },
    {
      number: "5",
      title: "Vastu Consultation",
      desc: "Create harmony and positivity through thoughtful Vastu-based layout guidance and planning.",
    },
    {
      number: "6",
      title: "Civil Works",
      desc: "Complete civil execution including plumbing, masonry, tiling, and structural modifications.",
    },
    {
      number: "7",
      title: "Structural Designing",
      desc: "Robust structural solutions engineered for stability, functionality, and architectural integrity.",
    },
    {
      number: "8",
      title: "Turnkey Solutions",
      desc: "A stress-free complete package from design and procurement to final handover.",
    },
  ];

  const sectors = [
    {
      title: "Residential",
      desc: "Modern apartments, flats, and homes designed for comfort and elegance.",
    },
    {
      title: "Villas",
      desc: "Luxury villa interiors crafted with bespoke premium aesthetics.",
    },
    {
      title: "Office Spaces",
      desc: "Productive and ergonomic workspaces aligned with modern business needs.",
    },
    {
      title: "Commercial Spaces",
      desc: "Retail stores, showrooms, and hospitality interiors with functional sophistication.",
    },
  ];

  return (

    <main className="bg-black text-white overflow-x-hidden min-h-screen">

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

            px-4
            sm:px-5
            md:px-8

            py-4
            sm:py-5
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-3 min-w-0">

            {/* LOGO */}
            <div className="relative flex-shrink-0">

              <div className="absolute inset-0 bg-[#d6b98c]/20 blur-xl rounded-full"></div>

              <img
                src="/images/logo.png"
                alt="Kulal Interiors"
                className="
                  relative

                  h-12
                  w-12

                  sm:h-14
                  sm:w-14

                  lg:h-16
                  lg:w-16

                  rounded-full
                  object-cover
                  border
                  border-[#d6b98c]/20

                  shadow-[0_0_25px_rgba(214,185,140,0.25)]
                "
              />

            </div>

            {/* BRAND */}
            <div className="leading-none min-w-0">

              <h1
                className="
                  text-[18px]
                  sm:text-[22px]
                  md:text-[26px]
                  lg:text-[30px]

                  font-bold
                  tracking-[-0.04em]
                  text-white
                "
              >

                Kulal Interiors

              </h1>

              <p
                className="
                  mt-1.5
                  uppercase
                  tracking-[0.30em]

                  text-[7px]
                  sm:text-[8px]
                  md:text-[9px]

                  text-[#d6b98c]
                "
              >

                Luxury Interior Design

              </p>

            </div>

          </div>

          {/* DESKTOP MENU */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-6
              lg:gap-8

              text-xs
              lg:text-sm

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
              href="/about"
              className="hover:text-[#d6b98c] transition duration-300"
            >
              About
            </a>

            <a
              href="/projects"
              className="hover:text-[#d6b98c] transition duration-300"
            >
              Projects
            </a>

            {/* ACTIVE */}
            <a
              href="/services"
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
              Services
            </a>

            <a
              href="/contact"
              className="hover:text-[#d6b98c] transition duration-300"
            >
              Contact
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              md:hidden
              text-white
              text-[34px]
              sm:text-[38px]
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
            overscroll-contain
          "
        >

          {/* TOP */}
          <div className="flex items-start justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-3">

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
                "
              />

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

            {/* CLOSE */}
            <button
              onClick={() => setMenuOpen(false)}
              className="
                text-white
                text-[40px]
              "
            >

              <HiOutlineX />

            </button>

          </div>

          {/* LINKS */}
          <div className="mt-10 flex flex-col">

            <a
              href="/"
              className="
                py-4
                border-b
                border-white/10
                text-[18px]
                font-light
              "
            >
              Home
            </a>

            <a
              href="/about"
              className="
                py-4
                border-b
                border-white/10
                text-[18px]
                font-light
              "
            >
              About
            </a>

            <a
              href="/projects"
              className="
                py-4
                border-b
                border-white/10
                text-[18px]
                font-light
              "
            >
              Projects
            </a>

            {/* ACTIVE */}
            <a
              href="/services"
              className="
                py-4
                border-b
                border-white/10
                text-[18px]
                font-light
                text-[#d6b98c]
              "
            >
              Services
            </a>

            <a
              href="/contact"
              className="
                py-4
                border-b
                border-white/10
                text-[18px]
                font-light
              "
            >
              Contact
            </a>

          </div>

          {/* CONTACT CARD */}
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

            <a
              href="https://wa.me/917709943271"
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-16
                w-16

                sm:h-20
                sm:w-20

                rounded-[22px]

                border
                border-[#d6b98c]/30

                flex
                items-center
                justify-center

                text-[#d6b98c]
                text-3xl
                sm:text-4xl

                bg-[#d6b98c]/5
              "
            >

              <FaWhatsapp />

            </a>

          </div>

          {/* FOLLOW */}
          <div className="mt-10">

            <p
              className="
                text-center
                uppercase
                tracking-[0.30em]
                text-[10px]
                text-gray-500
                mb-6
              "
            >
              Follow Us
            </p>

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
                  bg-[#111111]
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
                  bg-[#111111]
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
                  bg-[#111111]
                "
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </motion.div>

      )}

      {/* HERO */}
      <section className="
        relative
        overflow-hidden

        pt-[150px]
        sm:pt-[170px]
        md:pt-[190px]
        lg:pt-[210px]

        pb-20
        sm:pb-24
        lg:pb-32
      ">

        {/* GLOW */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#d6b98c]/10 blur-[100px] sm:blur-[160px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-[10px] sm:text-xs md:text-sm mb-5">
            What We Offer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto">

            Premium Interior
            <span className="block text-[#d6b98c] mt-2">
              Design Services
            </span>

          </h1>

          <p className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base lg:text-xl leading-relaxed max-w-3xl mx-auto px-2">

            At Kulal Interiors, we blend creativity with technical precision
            to deliver spaces that are both luxurious and functional.

          </p>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section className="pb-20 sm:pb-24 lg:pb-32">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  sm:rounded-[28px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-5
                  sm:p-6
                  hover:border-[#d6b98c]/30
                  transition-all
                  duration-500
                "
              >

                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.12),transparent_45%)]"></div>

                <div className="relative z-10">

                  <p className="text-[#d6b98c] text-[11px] sm:text-xs tracking-[0.3em] uppercase">
                    {service.number}
                  </p>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </main>

  );
}