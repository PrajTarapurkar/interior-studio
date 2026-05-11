"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="bg-[#f8f5f1] min-h-screen text-black overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">

          {/* Left Side */}
          <div className="flex items-center gap-3">

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-12 w-12 md:h-20 md:w-20 rounded-full object-cover shadow-[0_0_25px_rgba(255,215,160,0.35)]"
            />

            {/* Text */}
            <div className="leading-tight">

              <h1 className="text-lg md:text-3xl font-bold text-white leading-none">
                Interior
                <br className="md:hidden" />
                Studio
              </h1>

              <p className="hidden md:block uppercase tracking-[0.35em] text-[10px] text-[#d6b98c] mt-1">
                Luxury Interior Design
              </p>

            </div>

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 md:gap-10 text-[10px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium text-white">

            <a
              href="/"
              className="hover:text-[#d6b98c] transition duration-300"
            >
              Home
            </a>

            <a
              href="/projects"
              className="text-[#d6b98c]"
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

        </div>

      </nav>

      {/* Hero Header */}
      <section className="relative pt-36 md:pt-52 pb-20 md:pb-32 text-center bg-black text-white overflow-hidden">

        {/* Premium Glow */}
        <div className="absolute top-1/2 left-1/2 h-[250px] md:h-[500px] w-[250px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/20 blur-[100px] animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >

          <p className="uppercase tracking-[0.35em] text-[11px] md:text-sm text-[#d6b98c] mb-5">
            Portfolio
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">

            Our Interior
            <br />
            Projects

          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">

            Explore our curated collection of luxury residential
            and commercial interiors crafted with timeless elegance.

          </p>

        </motion.div>

      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {/* Project 1 */}
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

          {/* Project 2 */}
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

          {/* Project 3 */}
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