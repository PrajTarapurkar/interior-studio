"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

interface GoogleRatingProps {
  section: {
    badge: string;
    heading: string;
    highlightText: string;
    description: string;
    rating: string;
    ratingLabel: string;
    reviewCount: string;
    buttonText: string;
    googleReviewUrl: string;
  };
}
export default function GoogleRating({
  section,
}: GoogleRatingProps) {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/10 blur-[130px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-[24px]
            sm:rounded-[30px]
            border
            border-[#d6b98c]/20
            bg-[#111111]
            p-6
            sm:p-8
            md:p-10
            lg:p-12
          "
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT */}

            <div className="text-center lg:text-left">

              <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-[10px] sm:text-xs">

                {section.badge}

              </p>

              <h2 className="mt-4 font-[family:var(--font-heading)] leading-tight text-3xl sm:text-4xl lg:text-5xl">

                <span className="text-white">

                  {section.heading}

                </span>

                <span className="block text-[#d6b98c] mt-2">

                  {section.highlightText}

                </span>

              </h2>

              <p className="mt-5 sm:mt-6 text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">

                {section.description}

              </p>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col items-center lg:items-end">

              {/* Stars */}

              <div className="flex gap-1 sm:gap-2">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    className="fill-[#d6b98c] text-[#d6b98c]"
                    size={22}
                  />
                ))}

              </div>

              {/* Rating */}

              <h3 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold text-white">

                {section.rating}

              </h3>

              <p className="mt-2 text-base sm:text-lg text-gray-300">

                {section.ratingLabel}

              </p>

              <p className="mt-1 text-sm sm:text-base text-gray-500">

                {section.reviewCount}

              </p>

              {/* Button */}

              <a
                href={section.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#d6b98c]
                  px-6
                  py-3
                  sm:px-8
                  sm:py-4
                  text-sm
                  sm:text-base
                  text-[#d6b98c]
                  hover:bg-[#d6b98c]
                  hover:text-black
                  transition-all
                  duration-300
                "
              >

                {section.buttonText}

                <ExternalLink size={18} />

              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}