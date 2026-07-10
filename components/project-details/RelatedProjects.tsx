"use client";

import Image from "next/image";

type Project = {
  title: string;
  category: string;
  location: string;
  image: string;
  slug: string;
};

type RelatedProjectsProps = {
  projects:  Project[];
  
};

export default function RelatedProjects({
  projects,
  
}: RelatedProjectsProps) {
  return (
    <section className="py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-[#d6b98c] text-sm">
            Portfolio
          </p>

          <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">
            Explore More Projects
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((item) => (

              <a
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#d6b98c]/20
                  bg-[#0f0f0f]
                  hover:border-[#d6b98c]/60
                  transition-all
                  duration-500
                "
              >

                <div className="overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="
                      w-full
                      h-[260px]
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />

                </div>

                <div className="p-6">

                  <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400">
                    {item.location}
                  </p>

                </div>

              </a>

            ))}

        </div>

      </div>

    </section>
  );
}