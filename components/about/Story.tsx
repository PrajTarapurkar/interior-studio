"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <>
      {/* MAIN CONTENT */}
    <div className="
      mt-20
      lg:mt-28
      grid
      lg:grid-cols-[1.05fr_0.95fr]
      gap-14
      lg:gap-20
      items-start
    ">

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative lg:sticky lg:top-28"
      >

        {/* IMAGE */}
        <div className="
          relative
          overflow-hidden
          rounded-[28px]
          sm:rounded-[38px]
          lg:rounded-[46px]
          border
          border-white/10
        ">

          <img
            src="/images/about.jpg"
            alt="Kulal Interiors"
            className="
              w-full
              h-[420px]
              sm:h-[580px]
              lg:h-[760px]
              object-cover
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        </div>

        {/* FLOATING CARD */}
        <div className="
          absolute
          bottom-4
          left-4
          sm:bottom-8
          sm:left-8
          bg-black/70
          backdrop-blur-2xl
          border
          border-[#d6b98c]/20
          rounded-[24px]
          sm:rounded-[28px]
          px-6
          sm:px-8
          py-5
          sm:py-6
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        ">

          <h3 className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-semibold
            text-[#d6b98c]
          ">

            100+

          </h3>

          <p className="
            mt-2
            uppercase
            tracking-[0.28em]
            text-[9px]
            sm:text-[11px]
            text-gray-300
          ">

            Happy Clients

          </p>

        </div>

        {/* BADGE */}
        <div className="
          absolute
          top-4
          right-4
          sm:top-8
          sm:right-8
          bg-black/60
          backdrop-blur-xl
          border
          border-white/10
          rounded-full
          px-5
          py-3
        ">

          <p className="
            uppercase
            tracking-[0.28em]
            text-[9px]
            sm:text-[10px]
            text-[#d6b98c]
          ">

            Since 2020

          </p>

        </div>

      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >

        {/* TITLE */}
        <h2 className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-semibold
          leading-[1.1]
          text-white
        ">

          A Brand Built On
          <span className="block text-[#d6b98c] mt-2">
            Trust, Design & Innovation
          </span>

        </h2>

        {/* STORY */}
        <div className="
          mt-8
          space-y-6
          text-gray-400
          text-sm
          sm:text-base
          lg:text-lg
          leading-relaxed
        ">

          <p>

            The journey began with its founder,
            <span className="text-white font-medium">
              {" "}Mr. Sanket Kulal
            </span>,
            whose strong technical foundation in Civil Engineering
            and a Master’s degree provided him with a deep understanding
            of construction, planning, and execution.

          </p>

          <p>

            Before entering the world of interiors full-time,
            he gained valuable corporate experience working
            for a US-based multinational company,
            where he developed a professional,
            process-driven, and client-focused approach
            toward business operations.

          </p>

          <p>

            While working in the corporate sector,
            Mr. Sanket Kulal closely observed the rapidly evolving
            interior design market. Through extensive research
            and real-world interactions,
            he identified a critical gap in the industry.

          </p>

          <p>

            Many homeowners struggled with budget escalations,
            lack of transparency, poor communication,
            and interiors that failed to reflect
            their personality and lifestyle.

          </p>

        </div>

        {/* CHALLENGES */}
        <div className="mt-12">

          <div className="flex items-center gap-3 mb-6">

            <div className="h-[1px] w-10 bg-[#d6b98c]"></div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-[#d6b98c]
              text-[10px]
              sm:text-xs
            ">

              Challenges Homeowners Faced

            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {[
              "Lack of transparency in pricing",
              "Unexpected budget escalations during execution",
              "Designs that failed to match lifestyle and personality",
              "Limited access to premium interiors at practical budgets",
              "Poor communication during execution",
              "Lack of professionalism in project management",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-5
                  hover:border-[#d6b98c]/30
                  transition-all
                  duration-300
                "
              >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-500
                  bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.10),transparent_45%)]
                "></div>

                <div className="relative z-10 flex items-start gap-3">

                  <div className="
                    h-3
                    w-3
                    rounded-full
                    bg-[#d6b98c]
                    mt-2
                  "></div>

                  <p className="
                    text-white
                    text-sm
                    sm:text-base
                    leading-relaxed
                  ">

                    {item}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* VISION */}
        <div className="mt-14">

          <div className="flex items-center gap-3 mb-6">

            <div className="h-[1px] w-10 bg-[#d6b98c]"></div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-[#d6b98c]
              text-[10px]
              sm:text-xs
            ">

              The Vision Behind The Brand

            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {[
              "Modern and trend-driven designs",
              "Technical expertise",
              "Transparent budgeting",
              "Professional project management",
              "Personalized customer experience",
              "Cost-effective interior solutions",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#d6b98c]/15
                  bg-[#151515]
                  p-5
                  hover:border-[#d6b98c]/30
                  transition-all
                  duration-300
                "
              >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-500
                  bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.10),transparent_45%)]
                "></div>

                <div className="relative z-10 flex items-start gap-3">

                  <div className="
                    h-3
                    w-3
                    rounded-full
                    bg-[#d6b98c]
                    mt-2
                  "></div>

                  <p className="
                    text-white
                    text-sm
                    sm:text-base
                    leading-relaxed
                  ">

                    {item}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </div>
    </>
  );
}
