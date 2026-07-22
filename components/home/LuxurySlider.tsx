
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

type Project = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  location: string;
  coverImage: any;
};

type LuxurySliderProps = {
  projects: Project[];
};

export default function LuxurySlider({
  projects,
}: LuxurySliderProps) {
  console.log("LuxurySlider Projects:", projects);
  return (
    <>
      {/* Luxury Showcase Slider */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Heading */}
          <div className="mb-14 md:mb-20">

            <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4">
              Luxury Interiors
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">

              Explore Our
              <span className="block text-[#d6b98c]">
                Signature Spaces
              </span>

            </h2>

            <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl leading-relaxed">

              Discover premium interiors crafted with timeless elegance,
              modern sophistication, and luxurious comfort.

            </p>

          </div>

        </div>

        {/* Scrollable Slider */}
<div className="flex gap-8 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project) => (
 <Link
  key={project._id}
  href={`/projects/${project.slug.current}`}
  className="min-w-[90%] sm:min-w-[70%] md:min-w-[48%] lg:min-w-[32%] flex-shrink-0 snap-center"
>
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ duration: 0.4 }}
    className="relative h-[500px] md:h-[650px] rounded-[34px] overflow-hidden group shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
  >


      {/* Image */}
      <Image
  src={urlFor(project.coverImage).url()}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 48vw, 32vw"
  className="object-cover group-hover:scale-110 transition duration-700"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[#d6b98c]/0 group-hover:bg-[#d6b98c]/10 transition duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
        <p className="uppercase tracking-[0.3em] text-[#d6b98c] text-[10px] md:text-xs mb-3">
          {project.location} • Luxury Interior
        </p>

        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {project.title}
        </h3>
      </div>
    </motion.div>
  </Link>
))}

        </div>

      </motion.section>
    </>
  );
}