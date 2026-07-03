"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  category: string;
  type: string;
  image: string;
  href: string;
  description: string;
};



export default function ProjectsGrid({
  filteredProjects,
}: {
  filteredProjects: Project[];
}) {
  return (
    <section className="py-1 md:py-24 px-4 md:px-8 bg-[#000000]">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

        {filteredProjects.map((project) => (
          <motion.a
            key={project.href}
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
  );
}