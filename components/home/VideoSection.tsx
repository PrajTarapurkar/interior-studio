"use client";

import { motion } from "framer-motion";

type VideoSectionProps = {
  videoSection?: {
    badge: string;
    heading: string;
    highlightText: string;
    description: string;
    videos: {
      title: string;
      location: string;
      description: string;
      buttonText: string;
      video: {
        asset: {
          url: string;
        };
      };
    }[];
  };
};

export default function VideoSection({
  videoSection,
}: VideoSectionProps) {
  return (
    <>
      {/* VIDEO TOUR SECTION */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
   className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
>

  {/* GOLD GLOW */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#d6b98c]/10 blur-[140px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

    {/* HEADING */}
    <div className="text-center mb-14 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4">
  {videoSection?.badge || "Luxury Video Tours"}
</p>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
  {videoSection?.heading || "Explore Interior"}

  <span className="block text-[#d6b98c]">
    {videoSection?.highlightText || "Walkthrough Experiences"}
  </span>
</h2>

      <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
  {videoSection?.description ||
    "Step inside our premium residential and commercial interiors through cinematic walkthrough experiences crafted with elegance."}
</p>

    </div>

    {/* SCROLLABLE VIDEO SLIDER */}
    <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

      {(videoSection?.videos ?? []).map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          transition={{ duration: 0.4 }}
          className="
            min-w-[88%]
            sm:min-w-[70%]
            md:min-w-[48%]
            lg:min-w-[38%]
            bg-[#111111]
            border
            border-white/10
            rounded-[30px]
            overflow-hidden
            snap-center
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            group
          "
        >

          {/* VIDEO */}
          <div className="relative overflow-hidden">

            <video
  src={item.video?.asset?.url}
  controls
              className="
                h-[260px]
                sm:h-[320px]
                md:h-[420px]
                w-full
                object-cover
                group-hover:scale-[1.02]
                transition
                duration-700
              "
            />

            {/* VIDEO OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8">

            <p className="uppercase tracking-[0.28em] text-[#d6b98c] text-[10px] md:text-xs mb-3">
              {item.location}
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">

              {item.title}

            </h3>

            <p className="mt-5 text-gray-400 leading-relaxed text-sm md:text-base">

              {item.description}

            </p>

            {/* BUTTON */}
            <div className="mt-6">

              <button
                className="
                  relative
                  overflow-hidden
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#d6b98c]/30
                  bg-[#d6b98c]/10
                  text-[#d6b98c]
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  hover:bg-[#d6b98c]
                  hover:text-black
                  transition-all
                  duration-500
                "
              >

                {item.buttonText}

              </button>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</motion.section>
    </>
  );
}