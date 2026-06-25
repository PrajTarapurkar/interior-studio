"use client";

import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <>
      {/* FEATURED PROJECTS */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
>
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-sm mb-4">
        Portfolio
      </p>

      <h2 className="leading-[0.95]">
        <span className="block text-white font-semibold text-5xl md:text-7xl">
          Featured
        </span>

        <span className="block text-[#d6b98c] font-medium text-5xl md:text-7xl">
          Projects
        </span>
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
        Explore our finest residential and commercial interiors
        crafted with elegance, luxury, and timeless design.
      </p>

    </div>

    {/* PROJECTS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[1, 2, 3].map((item) => (

        <motion.div
          key={item}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="
            bg-[#111111]
            rounded-[28px]
            overflow-hidden
            border border-white/10
            group
          "
        >

          <div className="overflow-hidden">

            <img
              src={`/images/project${item}.jpg`}
              alt="Project"
              className="
                h-[320px]
                md:h-[420px]
                w-full
                object-cover
                group-hover:scale-105
                transition
                duration-700
              "
            />

          </div>

          <div className="p-8">

            <p className="uppercase tracking-[0.25em] text-[#d6b98c] text-xs mb-3">
              Luxury Interior
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-white">

              {item === 1
                ? "Modern Living Room"
                : item === 2
                ? "Contemporary Bedroom"
                : "Luxury Kitchen"}

            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">

              Elegant luxury interiors crafted with timeless aesthetics,
              premium materials and modern sophistication.

            </p>

          </div>

        </motion.div>

      ))}

    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-16">

      <a
        href="projects"
        className="
          inline-flex
          items-center
          justify-center
          gap-3
          bg-[#d6b98c]
          text-black
          px-8
          py-4
          rounded-full
          font-semibold
          text-lg
          hover:scale-105
          hover:bg-[#e4c89b]
          transition-all
          duration-300
          shadow-[0_8px_25px_rgba(214,185,140,0.35)]
        "
      >
        Explore Full Portfolio
        <span>→</span>
      </a>

    </div>

  </div>
</motion.section>
    </>
  );
}