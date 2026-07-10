"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryProps = {
  project: {
    title: string;
    gallery: string[];
  };
};

export default function Gallery({ project }: GalleryProps) {

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const showPrevious = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0
        ? project.gallery.length - 1
        : selectedImage - 1
    );
  };

  const showNext = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === project.gallery.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }

      if (e.key === "ArrowLeft") {
        showPrevious();
      }

      if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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

        {project.gallery.length > 0 ? (

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {project.gallery.map((image, index) => (

      <div
        key={index}
        onClick={() => setSelectedImage(index)}
        className="
          group
          overflow-hidden
          rounded-[24px]
          border
          border-[#d6b98c]/20
          cursor-pointer
        "
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

) : (

  <div className="py-20 text-center">
    <p className="text-gray-400 text-lg">
      Gallery images will be available soon.
    </p>
  </div>

)}

      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="
    relative
    w-full
    max-w-7xl
    px-4
    sm:px-6
    md:px-8
  "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="
    fixed
    top-4
    right-4
    sm:top-5
    sm:right-5
    md:top-6
    md:right-6
    z-[1000]

    w-10
    h-10
    sm:w-11
    sm:h-11
    md:w-12
    md:h-12

    rounded-full
    bg-black/70
    backdrop-blur-md
    border
    border-white/20

    flex
    items-center
    justify-center

    text-white
    text-xl
    sm:text-2xl

    hover:bg-[#d6b98c]
    hover:text-black

    transition-all
    duration-300
  "
            >
              ✕
            </button>

            <button
              onClick={showPrevious}
              className="
fixed
left-3
sm:left-6
md:left-8
lg:left-12
top-1/2
-translate-y-1/2
z-[1001]

w-10
h-10
sm:w-12
sm:h-12
md:w-14
md:h-14

rounded-full
bg-black/70
backdrop-blur-md
border
border-white/20

flex
items-center
justify-center

text-white
text-lg
sm:text-xl
md:text-2xl

hover:bg-[#d6b98c]
hover:text-black
transition-all
duration-300
"
            >
              <ChevronLeft size={28} />
            </button>

            <Image
              src={project.gallery[selectedImage]}
              alt={project.title}
              width={1600}
              height={1200}
              className="
w-full
max-h-[75vh]
sm:max-h-[80vh]
md:max-h-[85vh]
lg:max-h-[90vh]
object-contain
rounded-xl
sm:rounded-2xl
"      />
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1001] text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              {selectedImage + 1} / {project.gallery.length}
            </div>

            <button
              onClick={showNext}
              className="
fixed
right-3
sm:right-6
md:right-8
lg:right-12
top-1/2
-translate-y-1/2
z-[1001]

w-10
h-10
sm:w-12
sm:h-12
md:w-14
md:h-14

rounded-full
bg-black/70
backdrop-blur-md
border
border-white/20

flex
items-center
justify-center

text-white
text-lg
sm:text-xl
md:text-2xl

hover:bg-[#d6b98c]
hover:text-black
transition-all
duration-300
"
            >
              <ChevronRight size={28} />
            </button>

          </div>
        </div>
      )}

    </section>
  );
}