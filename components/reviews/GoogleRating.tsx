"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export default function GoogleRating() {
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

                Google Reviews

              </p>

              <h2 className="mt-4 font-[family:var(--font-heading)] leading-tight text-3xl sm:text-4xl lg:text-5xl">

                <span className="text-white">

                  Trusted By

                </span>

                <span className="block text-[#d6b98c] mt-2">

                  Happy Homeowners

                </span>

              </h2>

              <p className="mt-5 sm:mt-6 text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">

                Every review reflects our commitment to quality,
                transparency, timely execution and delivering
                luxurious interiors that exceed expectations.

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

                4.9

              </h3>

              <p className="mt-2 text-base sm:text-lg text-gray-300">

                Average Google Rating

              </p>

              <p className="mt-1 text-sm sm:text-base text-gray-500">

                Based on 30+ Happy Clients

              </p>

              {/* Button */}

              <a
                href="https://www.google.com/search?sca_esv=ef956476037e39db&sxsrf=APpeQnvBWZd0_cLemrb-QkUnNrZH2wcNpw:1783137652242&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_y95_cpT6UbzUzwX30sHAReWFUL7EnWWaMVguHIf9oEM8RSDbq5XVhuZ_hfRJqmEV3CMsXVQy9Ez1-8oBE6lFrYRHwyJ&q=Kulal+Interiors+Reviews&sa=X&ved=2ahUKEwiareOykbiVAxVD2DgGHRJBCmgQ0bkNegQIIBAF&biw=1536&bih=776&dpr=1.25"
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

                View Google Reviews

                <ExternalLink size={18} />

              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}