"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";



const projects = [
  {
    title: "Full Luxury Interior",
    category: "Residential",
    type: "Residential",
    image: "/images/project1.jpg",
    href: "/projects/living-room",
    description:
      "Elegant modern villa interior crafted with warm lighting, premium textures and timeless aesthetics.",
  },
  {
    title: "Contemporary Bedroom",
    category: "Residential",
    type: "Residential",
    image: "/images/project2.jpg",
    href: "/projects/bedroom",
    description:
      "Sophisticated neutral palette bedroom designed for comfort and luxury living.",
  },
  {
    title: "Modern Luxury Kitchen",
    category: "Residential",
    type: "Residential",
    image: "/images/project3.jpg",
    href: "/projects/kitchen",
    description:
      "Minimal modern kitchen blending premium functionality with timeless elegance.",
  },

   // ================= Commercial =================

  {
    title: "Corporate Office",
    category: "Commercial",
    type: "Commercial",
    image: "/images/office.jpg",
    href: "/projects/office",
    description:
      "Modern office interiors designed to enhance productivity with premium aesthetics and functional workspaces.",
  },

  {
    title: "Luxury Restaurant",
    category: "Commercial",
    type: "Commercial",
    image: "/images/restaurant.jpg",
    href: "/projects/restaurant",
    description:
      "Elegant restaurant interiors combining sophisticated ambience with memorable dining experiences.",
  },

  {
    title: "Premium Retail Showroom",
    category: "Commercial",
    type: "Commercial",
    image: "/images/showroom.jpg",
    href: "/projects/showroom",
    description:
      "Luxury retail showroom crafted to elevate customer experience through modern design and premium finishes.",
  },
];

export default function ProjectsPage() {

  

const [activeFilter, setActiveFilter] = useState("All");

const filteredProjects =
  activeFilter === "All"
    ? projects
    : projects.filter((project) => project.type === activeFilter);



  return (
<main className="bg-[#000000] min-h-screen text-white overflow-x-hidden">      
<Navbar />


      {/* HERO SECTION */}
<section className="relative pt-30 md:pt-28 pb-8 md:pb-5 text-center bg-black text-white overflow-hidden">

 

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
        md:text-[18px]
        font-semibold
        text-[#d6b98c]
        mb-1
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
        Signature 
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


<div className="flex justify-center mb-14 px-6">
  <div className="flex flex-wrap items-center justify-center gap-4">

    {["All", "Residential", "Commercial"].map((item) => (
      <button
        key={item}
        onClick={() => setActiveFilter(item)}
        className={`
          px-6
          py-3
          rounded-full
          border
          transition-all
          duration-300
          text-sm
          tracking-wide
          ${
            activeFilter === item
              ? "bg-[#d6b98c] text-black border-[#d6b98c]"
              : "border-[#d6b98c]/30 text-white hover:border-[#d6b98c]"
          }
        `}
      >
        {item}
      </button>
    ))}

  </div>
</div>

      {/* PROJECTS GRID */}
      <section className="py-1 md:py-24 px-4 md:px-8 bg-[#000000]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {filteredProjects.map((project) => (
  <motion.a
  href={project.href}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.02 }}
>
    <div
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-[#d6b98c]/20
        bg-[#0f0f0f]
        transition-all
        duration-500
        hover:border-[#d6b98c]/60
        hover:-translate-y-3
        hover:shadow-[0_0_40px_rgba(214,185,140,0.18)]
      "
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-[300px]
            md:h-[360px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-7">

        <h2 className="mt-3 text-2xl font-semibold text-white">
          {project.title}
        </h2>

        <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs font-medium">
          {project.category}
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        <div className="mt-8">
          <span className="text-[#d6b98c] uppercase tracking-[0.3em] text-xs font-semibold">
            View Project →
          </span>
        </div>

      </div>
    </div>
  </motion.a>
))}

        </div>

      </section>

<Footer />

    </main>
  );
}