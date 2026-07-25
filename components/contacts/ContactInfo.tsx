"use client";

import { motion } from "framer-motion";

export default function ContactInfo({ section }: { section: any }) {

  if (!section) return null;

  return (
    <>
      {/* LEFT SIDE */}
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
className="
bg-gradient-to-br
from-[#111111]
to-[#1c1c1c]
rounded-[28px]
md:rounded-[42px]
border
border-white/10
px-5
py-6
md:px-10
md:py-10
shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transform-gpu
will-change-transform
"          >

            <p className="uppercase tracking-[0.3em] text-[10px] md:text-sm text-[#d6b98c] mb-4 md:mb-6">
              {section.badge}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              {section.heading}
            </h2>

            <p className="mt-5 md:mt-8 text-sm md:text-lg text-gray-400 leading-[1.8]">

              {section.description}

            </p>

            {/* INFO CARDS */}
            <div className="mt-8 md:mt-12 space-y-4">

              {/* PHONE */}
<motion.a
  href={section.phoneLink}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-[22px] px-5 py-4 md:px-7 md:py-4 hover:bg-white/[0.07] hover:border-[#d6b98c]/30 transition-all duration-300 cursor-pointer"
>
  <div className="text-[#d6b98c] text-xl md:text-2xl flex-shrink-0">
    ☎
  </div>

  <div>
    <p className="uppercase tracking-[0.25em] text-[8px] md:text-[10px] text-[#d6b98c] mb-1">
      {section.phoneLabel}
    </p>

    <p className="font-[family:var(--font-body)] text-lg md:text-[20px] font-semibold text-white">
      {section.phone}
    </p>
  </div>
</motion.a>

              {/* EMAIL */}
              <motion.a
                href={section.emailLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
               className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-[22px] px-5 py-4 md:px-7 md:py-4 hover:bg-white/[0.07] hover:border-[#d6b98c]/30 transition-all duration-300 cursor-pointer"
              >

                <div className="text-[#d6b98c] text-xl md:text-2xl flex-shrink-0">
                  ✉
                </div>

                <div className="min-w-0">

                  <p className="uppercase tracking-[0.25em] text-[8px] md:text-[10px] text-[#d6b98c] mb-1">
                    {section.emailLabel}
                  </p>

                  <h3 className="text-xs sm:text-sm md:text-[18px] font-semibold text-white break-words">
                    {section.email}
                  </h3>

                </div>

              </motion.a>

              {/* LOCATION */}
              <motion.a
                href={section.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-[22px] px-5 py-4 md:px-7 md:py-4 hover:bg-white/[0.07] hover:border-[#d6b98c]/30 transition-all duration-300 cursor-pointer"
              >

                <div className="text-[#d6b98c] text-2xl md:text-2xl flex-shrink-0">
                  ⌂
                </div>

                <div>

                  <p className="uppercase tracking-[0.25em] text-[8px] md:text-[10px] text-[#d6b98c] mb-1">
                    {section.locationLabel}
                  </p>

                  <h3 className="text-sm md:text-[20px] font-semibold text-white">
                    {section.location}
                  </h3>

                </div>

              </motion.a>

            </div>

            {/* GOOGLE MAP */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-8 overflow-hidden rounded-[22px] md:rounded-[28px] border border-white/10"
            >

              <iframe
                src={section.mapEmbedUrl}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition duration-500"
              ></iframe>

            </motion.div>

          </motion.div>

          
    </>
  );
}