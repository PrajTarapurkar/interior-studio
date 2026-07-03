"use client";

import { motion } from "framer-motion";

export default function CTA() {
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

              Growth & Evolution

            </p>

            <h3 className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-[1.1]
              text-white
            ">

              Delivering A New
              <span className="block text-[#d6b98c] mt-2">
                Dimension Of Elegance
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

            <p>

              Although there were established players in the market,
              customers often felt disconnected due to high costs
              and inconsistent project experiences.

            </p>

            <p>

              Recognizing this opportunity,
              Mr. Sanket Kulal envisioned a firm
              that would combine luxury aesthetics,
              technical expertise,
              transparent execution,
              and affordability.

            </p>

            <p>

              With this vision, Kulal Interiors was established —
              not just as an interior design company,
              but as a brand committed to creating spaces
              that truly reflect the client’s lifestyle,
              aspirations, and emotions.

            </p>

            <p>

              Over the years, the firm has grown from
              a local service provider into a trusted
              interior brand with a strong presence across
              Pune, Mumbai, Nanded, and Parbhani.

            </p>

            <p>

              Today, Kulal Interiors proudly serves
              100+ happy clients and continues to build
              spaces that blend elegance,
              functionality, and innovation.

            </p>

            <p>

              A major milestone in this journey
              was the launch of the new design studio
              in Punawale, Pune —
              a thoughtfully curated experience center
              where textures, tones,
              creativity, and ideas come together beautifully.

            </p>

            <p>

              Today, Kulal Interiors stands as a symbol
              of trust, professionalism,
              and modern design thinking —
              continuously working toward delivering
              <span className="text-[#d6b98c]">
                {" "}“A New Dimension of Elegance.”
              </span>

            </p>

          </div>

        </div>

      </div>

    </motion.div>
    </>
  );
}


