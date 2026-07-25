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

    area: string;
    status: string;
    completionDate: string;

    requirements: string[];
  };
};

export default function Hero({ project }: HeroProps) {
  return (
    <section className="bg-black py-30 px-5 sm:px-6 md:px-8 lg:px-12 overflow-hidden">

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

          {/* PROJECT DETAILS */}

          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">

            {/* Owner */}
            <div>
              <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-xs">
                Client
              </h4>

              <p className="mt-2 text-lg">
                {project.owner}
              </p>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-xs">
                Location
              </h4>

              <p className="mt-2 text-lg">
                {project.location}
              </p>
            </div>

            {/* Area */}
            <div>
              <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-xs">
                Area
              </h4>

              <p className="mt-2 text-lg">
                {project.area}
              </p>
            </div>

            {/* Status */}
            <div>
              <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-xs">
                Status
              </h4>

              <p className="mt-2 text-lg capitalize">
                {project.status}
              </p>
            </div>

            {/* Completed */}
            <div>
              <h4 className="text-[#d6b98c] uppercase tracking-[0.25em] text-xs">
                Completed
              </h4>

              <p className="mt-2 text-lg">
                {project.completionDate}
              </p>
            </div>

          </div>

          {/* DESIGN APPROACH */}

          <div className="mt-10 border-t border-[#d6b98c]/20 pt-8">

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