"use client";

import { motion } from "framer-motion";

export default function AboutPage() {

  return (

    <main className="bg-black text-white overflow-x-hidden min-h-screen">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">

        {/* BACKGROUND GLOW */}
        <div className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          w-[320px]
          sm:w-[550px]
          lg:w-[750px]
          h-[320px]
          sm:h-[550px]
          lg:h-[750px]
          bg-[#d6b98c]/10
          blur-[120px]
          sm:blur-[180px]
          lg:blur-[240px]
          rounded-full
        "></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP CONTENT */}
          <div className="text-center max-w-5xl mx-auto">

            {/* LABEL */}
            <div className="
              inline-flex
              items-center
              gap-3
              border
              border-[#d6b98c]/20
              bg-[#111111]
              rounded-full
              px-5
              py-2
            ">

              <div className="h-2 w-2 rounded-full bg-[#d6b98c]"></div>

              <p className="
                uppercase
                tracking-[0.3em]
                text-[#d6b98c]
                text-[10px]
                sm:text-xs
              ">

                About Kulal Interiors

              </p>

            </div>

            {/* TITLE */}
            <h1 className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[88px]
              font-semibold
              leading-[0.95]
              tracking-tight
              text-white
            ">

              The Origin Story Of
              <span className="block text-[#d6b98c] mt-2">
                Kulal Interiors
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="
              mt-8
              max-w-3xl
              mx-auto
              text-gray-400
              text-sm
              sm:text-base
              lg:text-xl
              leading-relaxed
            ">

              From vision to reality —
              creating elegant spaces through innovation,
              professionalism, and timeless luxury design.

            </p>

          </div>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="relative pb-20 sm:pb-24 lg:pb-32">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">

            {/* IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

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
                px-6
                sm:px-8
                py-5
                sm:py-6
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              ">

                <h3 className="
                  text-4xl
                  sm:text-5xl
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

              {/* SMALL BADGE */}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="
                space-y-8
                text-gray-400
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
              ">

                {/* INTRO */}
                <div className="
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-6
                  sm:p-8
                ">

                  <h3 className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-white
                  ">

                    From Vision To Reality

                  </h3>

                  <p className="mt-5">

                    Kulal Interiors was founded with a simple yet powerful vision —
                    to bridge the gap between beautiful design and practical,
                    affordable execution.

                  </p>

                </div>

                {/* FOUNDER STORY */}
                <div className="
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-6
                  sm:p-8
                ">

                  <h3 className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-white
                  ">

                    The Beginning

                  </h3>

                  <div className="mt-5 space-y-5">

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

                  </div>

                </div>

                {/* MARKET GAP */}
                <div className="
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-6
                  sm:p-8
                ">

                  <h3 className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-white
                  ">

                    Identifying The Gap

                  </h3>

                  <div className="mt-5 space-y-5">

                    <p>

                      While working in the corporate sector,
                      Mr. Sanket Kulal closely observed
                      the rapidly evolving interior design market.

                    </p>

                    <p>

                      He studied customer behavior,
                      market trends,
                      and the challenges faced by homeowners
                      during their interior journey.

                    </p>

                    <p>

                      Through extensive research and real-world interactions,
                      he identified a critical gap in the industry.

                    </p>

                  </div>

                </div>

                {/* CHALLENGES */}
                <div className="
                  rounded-[24px]
                  border
                  border-[#d6b98c]/20
                  bg-[#151515]
                  p-6
                  sm:p-8
                ">

                  <h3 className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-white
                  ">

                    Challenges Homeowners Faced

                  </h3>

                  <div className="
                    mt-8
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                  ">

                    {[
                      "Lack of transparency in pricing",
                      "Unexpected budget escalations during project execution",
                      "Designs that failed to match lifestyle and personality",
                      "Limited access to premium-looking interiors at practical budgets",
                      "Poor communication during execution",
                      "Lack of professionalism",
                    ].map((item, index) => (

                      <div
                        key={index}
                        className="
                          rounded-[20px]
                          border
                          border-white/10
                          bg-[#111111]
                          p-5
                        "
                      >

                        <div className="flex items-start gap-3">

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

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </main>

  );
}