"use client";

import Image from "next/image";

type HeroProps = {
    project: {
        title: string;
        category: string;
        location: string;
        image: string;
    };
};

export default function HeroNew({ project }: HeroProps) {
    return (
        <section
            className="
    relative
    overflow-hidden
    bg-black
    px-5
    sm:px-6
    md:px-8
    lg:px-12
    min-h-[calc(100svh-80px)]
    lg:min-h-[calc(100svh-100px)]
  "
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="max-w-5xl text-center">

                    <p className="mb-4 uppercase tracking-[0.35em] text-[#d6b98c]">
                        {project.category}
                    </p>

                    <h1 className="text-5xl font-bold text-white md:text-7xl">
                        {project.title}
                    </h1>

                    <p className="mt-6 text-lg text-gray-300">
                        {project.location}
                    </p>

                </div>
            </div>

        </section>
    );
}