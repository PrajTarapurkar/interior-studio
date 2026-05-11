"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="bg-[#f8f5f1] min-h-screen text-black overflow-hidden relative">

      {/* Animated Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">

        <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#d6b98c]/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-black/5 rounded-full blur-[140px] animate-pulse"></div>

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3 md:gap-4">

            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-12 md:h-20 w-auto object-contain rounded-full shadow-[0_0_25px_rgba(255,215,160,0.35)] hover:scale-105 transition duration-300"
            />

            <div>

              <h1 className="text-lg md:text-3xl font-semibold tracking-wide text-white leading-none">
                Interior Studio
              </h1>

              <p className="uppercase tracking-[0.35em] text-[8px] md:text-[10px] text-[#d6b98c] mt-1">
                Luxury Interior Design
              </p>

            </div>

          </div>

          {/* Navigation */}
          <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] font-medium text-white">

            <a href="/" className="hover:text-[#d6b98c] hover:scale-110 transition duration-300">
              Home
            </a>

            <a href="/projects" className="text-[#d6b98c]">
              Projects
            </a>

            <a href="#" className="hover:text-[#d6b98c] hover:scale-110 transition duration-300">
              Services
            </a>

            <a href="/contact" className="hover:text-[#d6b98c] hover:scale-110 transition duration-300">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Header */}
      <section className="relative pt-28 md:pt-40 pb-14 md:pb-24 text-center bg-black text-white overflow-hidden">

        {/* Premium Glow */}
        <div className="absolute top-1/2 left-1/2 h-[220px] md:h-[420px] w-[220px] md:w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/10 blur-[120px] animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-5"
        >

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-[#d6b98c] mb-4">
            Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">

            Our Interior
            <br />
            Projects

          </h1>

          <p className="mt-5 text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">

            Explore our curated collection of luxury residential and
            commercial interiors crafted with timeless elegance.

          </p>

        </motion.div>

      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            {/* Project 1 */}
            <a href="/projects/living-room">

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.03,
                  y: -12
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-[30px] overflow-hidden shadow-xl group hover:shadow-2xl transition duration-500 h-full flex flex-col"
              >

                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src="/images/project1.jpg"
                    alt="Project"
                    className="h-[240px] sm:h-[300px] md:h-[420px] w-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">

                  <h2 className="text-2xl md:text-3xl font-bold leading-tight transition duration-300 group-hover:text-[#b08d57]">
                    Full Luxury Interior
                  </h2>

                  <p className="mt-2 uppercase tracking-[0.2em] text-xs md:text-sm text-[#b08d57]">
                    Pune • Residential
                  </p>

                  <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base flex-grow">

                    Elegant modern villa interior crafted with warm
                    lighting, premium textures, and timeless aesthetics.

                  </p>

                </div>

              </motion.div>

            </a>

            {/* Project 2 */}
            <a href="/projects/bedroom">

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{
                  scale: 1.03,
                  y: -12
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-[30px] overflow-hidden shadow-xl group hover:shadow-2xl transition duration-500 h-full flex flex-col"
              >

                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src="/images/project2.jpg"
                    alt="Project"
                    className="h-[240px] sm:h-[300px] md:h-[420px] w-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">

                  <h2 className="text-2xl md:text-3xl font-bold leading-tight transition duration-300 group-hover:text-[#b08d57]">
                    Contemporary Bedroom
                  </h2>

                  <p className="mt-2 uppercase tracking-[0.2em] text-xs md:text-sm text-[#b08d57]">
                    Mumbai • Luxury Home
                  </p>

                  <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base flex-grow">

                    Sophisticated neutral palette bedroom designed for
                    comfort, calmness, and luxury living.

                  </p>

                </div>

              </motion.div>

            </a>

            {/* Project 3 */}
            <a href="/projects/kitchen">

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{
                  scale: 1.03,
                  y: -12
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-[30px] overflow-hidden shadow-xl group hover:shadow-2xl transition duration-500 h-full flex flex-col"
              >

                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src="/images/project3.jpg"
                    alt="Project"
                    className="h-[240px] sm:h-[300px] md:h-[420px] w-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">

                  <h2 className="text-2xl md:text-3xl font-bold leading-tight transition duration-300 group-hover:text-[#b08d57]">
                    Modern Luxury Kitchen
                  </h2>

                  <p className="mt-2 uppercase tracking-[0.2em] text-xs md:text-sm text-[#b08d57]">
                    Bangalore • Interior Styling
                  </p>

                  <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base flex-grow">

                    Minimal modern kitchen blending premium functionality
                    with timeless elegance.

                  </p>

                </div>

              </motion.div>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}