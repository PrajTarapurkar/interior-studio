"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {



  return (

    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">

<Navbar />
         
      {/* ULTRA PREMIUM RESPONSIVE ABOUT SECTION */}
<section className="relative bg-black overflow-hidden py-26 sm:py-24 lg:py-32">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="
      absolute
      top-[-120px]
      left-1/2
      -translate-x-1/2
      w-[320px]
      sm:w-[550px]
      lg:w-[700px]
      h-[320px]
      sm:h-[550px]
      lg:h-[700px]
      bg-[#d6b98c]/10
      blur-[120px]
      sm:blur-[180px]
      lg:blur-[240px]
      rounded-full
    "></div>

    <div className="
      absolute
      bottom-[-120px]
      right-[-120px]
      w-[250px]
      sm:w-[400px]
      h-[250px]
      sm:h-[400px]
      bg-[#d6b98c]/5
      blur-[120px]
      rounded-full
    "></div>

  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* HERO */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-4xl mx-auto"
    >

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
          tracking-[0.2em]
          text-[#d6b98c]
          text-[10px]
          sm:text-xs
        ">

          The Origin Story

        </p>

      </div>

      {/* TITLE */}
      <h1 className="
        mt-8
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-[72px]
        xl:text-[78px]
        leading-[0.95]
        tracking-tight
        font-semibold
        text-white
      ">

        From Vision 
        <span className="block text-[#d6b98c] mt-2">
          To Reality
        </span>

      </h1>

      {/* DESC */}
      <p className="
        mt-8
        max-w-3xl
        mx-auto
        text-gray-100
        text-sm
        sm:text-base
        lg:text-xl
        leading-relaxed
      ">

        Kulal Interiors was founded with a simple yet powerful vision —
        to bridge the gap between beautiful design,
        practical execution, and affordable elegance.

      </p>

    </motion.div>

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

  </div>

</section>

<Footer />

    </main>
  );
}


