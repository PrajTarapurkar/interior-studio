"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { videoTestimonials } from "@/lib/reviews";

export default function VideoTestimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] sm:h-[450px] sm:w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/10 blur-[130px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >

          <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-[10px] sm:text-xs md:text-sm">

            Video Testimonials

          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family:var(--font-heading)] leading-tight">

            <span className="text-white">
              Hear From Our
            </span>

            <span className="block text-[#d6b98c] mt-2">
              Happy Clients
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">

            Every completed project tells a story.
            Watch our clients share their journey,
            experience and satisfaction with Kulal Interiors.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {videoTestimonials.map((video, index) => (

            <motion.a
              key={index}
              href={video.youtube}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                overflow-hidden
                rounded-[26px]
                border
                border-white/10
                bg-[#111111]
                hover:border-[#d6b98c]/40
                transition-all
                duration-300
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >

              {/* Thumbnail */}

              <div className="relative overflow-hidden">

                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={700}
                  height={500}
                  className="
                    w-full
                    h-[240px]
                    sm:h-[260px]
                    lg:h-[300px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition" />

                {/* Play Button */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div
                    className="
                      w-16
                      h-16
                      sm:w-20
                      sm:h-20
                      rounded-full
                      bg-[#d6b98c]
                      flex
                      items-center
                      justify-center
                      shadow-[0_10px_30px_rgba(214,185,140,0.4)]
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >

                    <span className="text-black text-2xl sm:text-3xl ml-1">

                      ▶

                    </span>

                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="p-6 sm:p-7">

                <h3 className="text-xl sm:text-2xl font-semibold text-white">

                  {video.title}

                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-400">

                  {video.location}

                </p>

                

                 

                </div>

              

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}