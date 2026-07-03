"use client";

import Image from "next/image";

type HeroProps = {
  project: {
    title: string;
    owner: string;
    location: string;
    category: string;
    image: string;
    description: string;
    requirements: string[];
  };
};

export default function Hero({ project }: HeroProps) {
  return (
    <section className="bg-black py-30 px-5 sm:px-6 md:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div>
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={700}
            className="rounded-[28px] w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-sm">
            {project.category}
          </p>

          <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">
            {project.title}
          </h2>

          {/* OWNER */}
          <div className="mt-8">
            <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">
              Owner
            </h4>

            <p className="mt-2 text-lg">
              {project.owner}
            </p>
          </div>

          {/* LOCATION */}
          <div className="mt-8">
            <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">
              Location
            </h4>

            <p className="mt-2 text-lg">
              {project.location}
            </p>
          </div>

          {/* REQUIREMENTS */}
          <div className="mt-8">
            <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">
              Requirements
            </h4>

            <ul className="mt-4 space-y-3">
              {project.requirements.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#d6b98c]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10">
            <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-sm">
              Design Approach
            </h4>

            <p className="mt-4 leading-8 text-gray-300">
              {project.description}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}