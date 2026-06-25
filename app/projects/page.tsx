"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export default function ProjectsPage() {



  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">

      
<Navbar />


      {/* HERO SECTION */}
<section className="relative pt-35 md:pt-28 pb-10 md:pb-12 text-center bg-black text-white overflow-hidden">

  {/* GOLD GLOW */}
  <div
    className="
      absolute
      top-1/2
      left-1/2
      h-[150px]
      md:h-[280px]
      w-[150px]
      md:w-[280px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#d6b98c]/15
      blur-[90px]
      animate-pulse
    "
  ></div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 px-6"
  >

    {/* PORTFOLIO */}
    <p
      className="
        uppercase
        tracking-[0.45em]
        text-[10px]
        md:text-[12px]
        font-semibold
        text-[#d6b98c]
        mb-5
      "
    >
      PORTFOLIO
    </p>

    {/* TITLE */}
    <h1
      className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-3
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-[72px]
        font-extrabold
        leading-none
      "
    >
      <span className="text-white">
        Our Interior
      </span>

      <span className="text-[#d6b98c]">
        Projects
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p
      className="
        mt-5
        text-sm
        md:text-[15px]
        text-gray-300
        max-w-xl
        mx-auto
        leading-relaxed
      "
    >
      Explore our curated collection of luxury residential and
      commercial interiors crafted with timeless elegance.
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

<Footer />

    </main>
  );
}