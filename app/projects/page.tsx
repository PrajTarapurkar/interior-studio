"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="bg-[#f8f5f1] min-h-screen text-black overflow-x-hidden">

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
      px-3
      sm:px-5
      md:px-8
      py-3
      md:py-4
    "
  >

    {/* LEFT SIDE */}
    <div className="flex items-center gap-2 md:gap-4 min-w-0">

      {/* LOGO */}
      <div className="relative flex-shrink-0">

        <div
          className="
            absolute
            inset-0
            bg-[#d6b98c]/20
            blur-xl
            rounded-full
          "
        ></div>

        <img
          src="/images/logo.png"
          alt="Logo"
          className="
            relative
            h-11
            w-11
            sm:h-12
            sm:w-12
            md:h-16
            md:w-16
            rounded-full
            object-cover
            border
            border-[#d6b98c]/20
            shadow-[0_0_25px_rgba(214,185,140,0.25)]
          "
        />

      </div>

      {/* BRAND TEXT */}
      <div className="leading-none">

        <h1
          className="
            text-[15px]
            sm:text-[18px]
            md:text-[34px]
            font-bold
            tracking-[-0.04em]
            text-white
          "
        >
          InteriorStudio
        </h1>

        <p
          className="
            uppercase
            tracking-[0.30em]
            text-[5px]
            sm:text-[6px]
            md:text-[10px]
            text-[#d6b98c]
            mt-1
          "
        >
          Luxury Interior Design
        </p>

      </div>

    </div>

    {/* RIGHT SIDE */}
<div
  className="
    flex
    items-center
    gap-1
    sm:gap-2
    md:gap-6
    text-[8px]
    sm:text-[9px]
    md:text-sm
    uppercase
    tracking-[0.12em]
    md:tracking-[0.2em]
    font-semibold
    whitespace-nowrap
    text-white
  "
>

  {/* HOME */}
  <a
    href="/"
    className="
      text-white
      hover:text-[#d6b98c]
      transition
      duration-300
      px-1
    "
  >
    Home
  </a>

  {/* PROJECTS ACTIVE */}
  <a
    href="/projects"
    className="
      text-[#d6b98c]
      px-2
      sm:px-3
      py-1.5
      rounded-full
      bg-[#d6b98c]/10
      border
      border-[#d6b98c]/20
      shadow-[0_0_20px_rgba(214,185,140,0.15)]
    "
  >
    Projects
  </a>

  {/* SERVICES */}
  <a
    href="/#services"
    className="
      text-white
      hover:text-[#d6b98c]
      transition
      duration-300
      px-1
    "
  >
    Services
  </a>

  {/* CONTACT */}
  <a
    href="/contact"
    className="
      text-white
      hover:text-[#d6b98c]
      transition
      duration-300
      px-1
    "
  >
    Contact
  </a>

</div>

  </div>

</nav>

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