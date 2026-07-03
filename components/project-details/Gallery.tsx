"use client";

import Image from "next/image";

type GalleryProps = {
  project: {
    title: string;
    gallery: string[];
  };
};

export default function Gallery({ project }: GalleryProps) {
  return (
    <section className="py-20 px-5 sm:px-6 md:px-8 lg:px-12 bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.4em] text-[#d6b98c] text-sm">
            Gallery
          </p>

          <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">
            Project Showcase
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[24px] border border-[#d6b98c]/20"
            >
              <Image
                src={image}
                alt={`${project.title} ${index + 1}`}
                width={700}
                height={500}
                className="
                  w-full
                  h-[260px]
                  md:h-[320px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}