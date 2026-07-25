"use client";

import { motion } from "framer-motion";

export default function CTA({ section }: { section: any }) {
  if (!section) return null;

  
  return (
    <>
      {/* BOTTOM STORY CARD */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-20 lg:mt-28"
    >

      <div className="
        relative
        overflow-hidden
        rounded-[30px]
        sm:rounded-[42px]
        border
        border-white/10
        bg-gradient-to-br
        from-[#111111]
        via-[#0d0d0d]
        to-[#080808]
        p-6
        sm:p-10
        lg:p-16
      ">

        {/* GLOW */}
        <div className="
          absolute
          top-0
          right-0
          w-[250px]
          sm:w-[320px]
          h-[250px]
          sm:h-[320px]
          bg-[#d6b98c]/10
          blur-[140px]
          rounded-full
        "></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT */}
          <div>

            <p className="
              uppercase
              tracking-[0.35em]
              text-[#d6b98c]
              text-[10px]
              sm:text-xs
              mb-5
            ">

              {section.badge}

            </p>

            <h3 className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-[1.1]
              text-white
            ">

               {section.heading}
              <span className="block text-[#d6b98c] mt-2">
                {section.highlightText}
              </span>

            </h3>

          </div>

          {/* RIGHT */}
          <div className="
            space-y-6
            text-gray-400
            text-sm
            sm:text-base
            lg:text-lg
            leading-relaxed
          ">

            {section.content?.map((paragraph: string, index: number) => (
  <p key={index}>{paragraph}</p>
))}

          </div>

        </div>

      </div>

    </motion.div>
    </>
  );
}


