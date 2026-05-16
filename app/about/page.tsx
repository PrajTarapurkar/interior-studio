"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import {
  FaWhatsapp,
} from "react-icons/fa";

export default function AboutPage() {

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

    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">

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

            {/* ACTIVE */}
            <a
              href="/about"
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
              About
            </a>

            <a
              href="/projects"
              className="hover:text-[#d6b98c] transition duration-300"
            >
              Projects
            </a>

            <a
              href="/services"
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

            <a
              href="/about"
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
              About Us
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

            <a
              href="/services"
              className="
                py-4
                border-b
                border-white/10
                text-[18px]
                font-light
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

            <a
              href="/about"
              className="
                py-4
                border-b
                border-white/10
                text-[18px]
                font-light
                text-[#d6b98c]
              "
            >
              About Us
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
          href="https://www.instagram.com/kulal_interiors?igsh=OHhwNm9yMHd6aDll"
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
      

      
      {/* ULTRA PREMIUM RESPONSIVE ABOUT SECTION */}
<section className="relative bg-black overflow-hidden py-26 sm:py-24 lg:py-32">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="
      absolute
      top-[-120px]
      left-1/2
      -translate-x-1/2
      w-[320px]
      sm:w-[550px]
      lg:w-[700px]
      h-[320px]
      sm:h-[550px]
      lg:h-[700px]
      bg-[#d6b98c]/10
      blur-[120px]
      sm:blur-[180px]
      lg:blur-[240px]
      rounded-full
    "></div>

    <div className="
      absolute
      bottom-[-120px]
      right-[-120px]
      w-[250px]
      sm:w-[400px]
      h-[250px]
      sm:h-[400px]
      bg-[#d6b98c]/5
      blur-[120px]
      rounded-full
    "></div>

  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HERO */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-5xl mx-auto"
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
          tracking-[0.3em]
          text-[#d6b98c]
          text-[10px]
          sm:text-xs
        ">

          The Origin Story

        </p>

      </div>

      {/* TITLE */}
      <h1 className="
        mt-8
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-[88px]
        leading-[0.95]
        tracking-tight
        font-semibold
        text-white
      ">

        From Vision
        <span className="block text-[#d6b98c] mt-2">
          To Reality
        </span>

      </h1>

      {/* DESC */}
      <p className="
        mt-8
        max-w-3xl
        mx-auto
        text-gray-400
        text-sm
        sm:text-base
        lg:text-xl
        leading-relaxed
      ">

        Kulal Interiors was founded with a simple yet powerful vision —
        to bridge the gap between beautiful design,
        practical execution, and affordable elegance.

      </p>

    </motion.div>

    {/* MAIN CONTENT */}
    <div className="
      mt-20
      lg:mt-28
      grid
      lg:grid-cols-[1.05fr_0.95fr]
      gap-14
      lg:gap-20
      items-start
    ">

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative lg:sticky lg:top-28"
      >

        {/* IMAGE */}
        <div className="
          relative
          overflow-hidden
          rounded-[28px]
          sm:rounded-[38px]
          lg:rounded-[46px]
          border
          border-white/10
        ">

          <img
            src="/images/about.jpg"
            alt="Kulal Interiors"
            className="
              w-full
              h-[420px]
              sm:h-[580px]
              lg:h-[760px]
              object-cover
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        </div>

        {/* FLOATING CARD */}
        <div className="
          absolute
          bottom-4
          left-4
          sm:bottom-8
          sm:left-8
          bg-black/70
          backdrop-blur-2xl
          border
          border-[#d6b98c]/20
          rounded-[24px]
          sm:rounded-[28px]
          px-6
          sm:px-8
          py-5
          sm:py-6
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        ">

          <h3 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-semibold
            text-[#d6b98c]
          ">

            100+

          </h3>

          <p className="
            mt-2
            uppercase
            tracking-[0.28em]
            text-[9px]
            sm:text-[11px]
            text-gray-300
          ">

            Happy Clients

          </p>

        </div>

        {/* BADGE */}
        <div className="
          absolute
          top-4
          right-4
          sm:top-8
          sm:right-8
          bg-black/60
          backdrop-blur-xl
          border
          border-white/10
          rounded-full
          px-5
          py-3
        ">

          <p className="
            uppercase
            tracking-[0.28em]
            text-[9px]
            sm:text-[10px]
            text-[#d6b98c]
          ">

            Since 2020

          </p>

        </div>

      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >

        {/* TITLE */}
        <h2 className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-semibold
          leading-[1.1]
          text-white
        ">

          A Brand Built On
          <span className="block text-[#d6b98c] mt-2">
            Trust, Design & Innovation
          </span>

        </h2>

        {/* STORY */}
        <div className="
          mt-8
          space-y-6
          text-gray-400
          text-sm
          sm:text-base
          lg:text-lg
          leading-relaxed
        ">

          <p>

            The journey began with its founder,
            <span className="text-white font-medium">
              {" "}Mr. Sanket Kulal
            </span>,
            whose strong technical foundation in Civil Engineering
            and a Master’s degree provided him with a deep understanding
            of construction, planning, and execution.

          </p>

          <p>

            Before entering the world of interiors full-time,
            he gained valuable corporate experience working
            for a US-based multinational company,
            where he developed a professional,
            process-driven, and client-focused approach
            toward business operations.

          </p>

          <p>

            While working in the corporate sector,
            Mr. Sanket Kulal closely observed the rapidly evolving
            interior design market. Through extensive research
            and real-world interactions,
            he identified a critical gap in the industry.

          </p>

          <p>

            Many homeowners struggled with budget escalations,
            lack of transparency, poor communication,
            and interiors that failed to reflect
            their personality and lifestyle.

          </p>

        </div>

        {/* CHALLENGES */}
        <div className="mt-12">

          <div className="flex items-center gap-3 mb-6">

            <div className="h-[1px] w-10 bg-[#d6b98c]"></div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-[#d6b98c]
              text-[10px]
              sm:text-xs
            ">

              Challenges Homeowners Faced

            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {[
              "Lack of transparency in pricing",
              "Unexpected budget escalations during execution",
              "Designs that failed to match lifestyle and personality",
              "Limited access to premium interiors at practical budgets",
              "Poor communication during execution",
              "Lack of professionalism in project management",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-5
                  hover:border-[#d6b98c]/30
                  transition-all
                  duration-300
                "
              >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-500
                  bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.10),transparent_45%)]
                "></div>

                <div className="relative z-10 flex items-start gap-3">

                  <div className="
                    h-3
                    w-3
                    rounded-full
                    bg-[#d6b98c]
                    mt-2
                  "></div>

                  <p className="
                    text-white
                    text-sm
                    sm:text-base
                    leading-relaxed
                  ">

                    {item}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* VISION */}
        <div className="mt-14">

          <div className="flex items-center gap-3 mb-6">

            <div className="h-[1px] w-10 bg-[#d6b98c]"></div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-[#d6b98c]
              text-[10px]
              sm:text-xs
            ">

              The Vision Behind The Brand

            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {[
              "Modern and trend-driven designs",
              "Technical expertise",
              "Transparent budgeting",
              "Professional project management",
              "Personalized customer experience",
              "Cost-effective interior solutions",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#d6b98c]/15
                  bg-[#151515]
                  p-5
                  hover:border-[#d6b98c]/30
                  transition-all
                  duration-300
                "
              >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-500
                  bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.10),transparent_45%)]
                "></div>

                <div className="relative z-10 flex items-start gap-3">

                  <div className="
                    h-3
                    w-3
                    rounded-full
                    bg-[#d6b98c]
                    mt-2
                  "></div>

                  <p className="
                    text-white
                    text-sm
                    sm:text-base
                    leading-relaxed
                  ">

                    {item}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </div>

    {/* BOTTOM STORY CARD */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-20 lg:mt-28"
    >

      <div className="
        relative
        overflow-hidden
        rounded-[30px]
        sm:rounded-[42px]
        border
        border-white/10
        bg-gradient-to-br
        from-[#111111]
        via-[#0d0d0d]
        to-[#080808]
        p-6
        sm:p-10
        lg:p-16
      ">

        {/* GLOW */}
        <div className="
          absolute
          top-0
          right-0
          w-[250px]
          sm:w-[320px]
          h-[250px]
          sm:h-[320px]
          bg-[#d6b98c]/10
          blur-[140px]
          rounded-full
        "></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT */}
          <div>

            <p className="
              uppercase
              tracking-[0.35em]
              text-[#d6b98c]
              text-[10px]
              sm:text-xs
              mb-5
            ">

              Growth & Evolution

            </p>

            <h3 className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-[1.1]
              text-white
            ">

              Delivering A New
              <span className="block text-[#d6b98c] mt-2">
                Dimension Of Elegance
              </span>

            </h3>

          </div>

          {/* RIGHT */}
          <div className="
            space-y-6
            text-gray-400
            text-sm
            sm:text-base
            lg:text-lg
            leading-relaxed
          ">

            <p>

              Although there were established players in the market,
              customers often felt disconnected due to high costs
              and inconsistent project experiences.

            </p>

            <p>

              Recognizing this opportunity,
              Mr. Sanket Kulal envisioned a firm
              that would combine luxury aesthetics,
              technical expertise,
              transparent execution,
              and affordability.

            </p>

            <p>

              With this vision, Kulal Interiors was established —
              not just as an interior design company,
              but as a brand committed to creating spaces
              that truly reflect the client’s lifestyle,
              aspirations, and emotions.

            </p>

            <p>

              Over the years, the firm has grown from
              a local service provider into a trusted
              interior brand with a strong presence across
              Pune, Mumbai, Nanded, and Parbhani.

            </p>

            <p>

              Today, Kulal Interiors proudly serves
              100+ happy clients and continues to build
              spaces that blend elegance,
              functionality, and innovation.

            </p>

            <p>

              A major milestone in this journey
              was the launch of the new design studio
              in Punawale, Pune —
              a thoughtfully curated experience center
              where textures, tones,
              creativity, and ideas come together beautifully.

            </p>

            <p>

              Today, Kulal Interiors stands as a symbol
              of trust, professionalism,
              and modern design thinking —
              continuously working toward delivering
              <span className="text-[#d6b98c]">
                {" "}“A New Dimension of Elegance.”
              </span>

            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>

    </main>
  );
}