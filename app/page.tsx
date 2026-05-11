"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-white overflow-hidden scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-12 md:h-20 w-auto drop-shadow-2xl hover:scale-105 transition duration-300"
            />

            <h1 className="text-base md:text-2xl font-bold tracking-wide">
              Interior Studio
            </h1>

          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-4 md:gap-10 text-[10px] md:text-sm uppercase tracking-[0.18em] font-medium overflow-x-auto whitespace-nowrap">

            <a href="/" className="hover:text-[#d6b98c] hover:scale-110 transition duration-300">
              Home
            </a>

            <a
              href="/projects"
              className="hover:text-[#d6b98c] hover:scale-110 transition duration-300"
            >
              Projects
            </a>

            <a
              href="/#services"
              className="hover:text-[#d6b98c] hover:scale-110 transition duration-300"
            >
              Services
            </a>

            <a
              href="/contact"
              className="hover:text-[#d6b98c] hover:scale-110 transition duration-300"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4 md:px-6"
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
          className="relative z-10 max-w-6xl pt-24 md:pt-32"
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
        viewport={{ once: true }}
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

      {/* Services Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 md:mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What We Offer
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Residential Design",
              "Commercial Spaces",
              "Space Planning",
              "Furniture Styling",
            ].map((service) => (

              <motion.div
                key={service}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-[#d6b98c]/50 transition duration-300"
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Premium luxury interiors designed with modern elegance.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.section>

    </main>
  );
}