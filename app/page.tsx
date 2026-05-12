"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-white overflow-hidden scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-5 md:px-8 py-3 md:py-4">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-2 md:gap-4 min-w-0">

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-20 md:w-20 rounded-full object-cover shadow-[0_0_30px_rgba(214,185,140,0.35)] flex-shrink-0"
            />

            {/* Brand Text */}
            <div className="leading-none">

              <h1 className="text-[15px] sm:text-[18px] md:text-[42px] font-bold text-white tracking-[-0.04em]">
                InteriorStudio
              </h1>

              <p className="uppercase tracking-[0.28em] text-[5px] sm:text-[6px] md:text-[10px] text-[#d6b98c] mt-1 md:mt-2">
                Luxury Interior Design
              </p>

            </div>

          </div>

          {/* RIGHT SIDE NAVIGATION */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-10 text-[8px] sm:text-[9px] md:text-sm uppercase tracking-[0.12em] md:tracking-[0.2em] font-medium text-white">

            <a
              href="/"
              className="text-[#d6b98c] whitespace-nowrap"
            >
              Home
            </a>

            <a
              href="/projects"
              className="hover:text-[#d6b98c] transition duration-300 whitespace-nowrap"
            >
              Projects
            </a>

            <a
              href="/#services"
              className="hover:text-[#d6b98c] transition duration-300 whitespace-nowrap"
            >
              Services
            </a>

            <a
              href="/contact"
              className="hover:text-[#d6b98c] transition duration-300 whitespace-nowrap"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen pt-28 md:pt-0 bg-cover bg-center flex items-center justify-center text-center px-4 md:px-6"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/20 blur-[120px] animate-pulse"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl pt-10 md:pt-32"
        >

          <p className="uppercase tracking-[0.4em] text-[11px] md:text-[18px] font-semibold text-[#d6b98c] mb-6">
            Luxury Interior Design
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">

            Designing Timeless
            <br />
            Modern Spaces

          </h1>

          <p className="mt-8 text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">

            Creating elegant interiors that blend modern sophistication
            with timeless comfort and functionality.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

            <a
              href="/projects"
              className="bg-[#d6b98c] text-black px-8 py-4 rounded-full font-semibold hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(214,185,140,0.35)]"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contact Us
            </a>

          </div>

        </motion.div>

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
            href="https://instagram.com"
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