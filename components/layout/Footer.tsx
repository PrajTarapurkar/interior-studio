"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* PREMIUM FOOTER */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="
bg-black
text-white
py-[clamp(4rem,8vw,7rem)]
px-5
sm:px-6
md:px-8
lg:px-10
xl:px-12
2xl:px-16
">

        {/* GOLD GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(240px,40vw,420px)]
h-[clamp(120px,20vw,220px)] blur-[clamp(80px,10vw,120px)] bg-[#d6b98c]/10  rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto">

          {/* MAIN RECTANGLE */}
          <div className="relative overflow-hidden rounded-[clamp(22px,2vw,28px)] border border-[#d6b98c]/40 bg-gradient-to-r from-[#0f0f0f] via-[#111111] to-[#0f0f0f] px-[clamp(1.5rem,4vw,4rem)] py-[clamp(1.5rem,2vw,2rem)] shadow-[0_15px_60px_rgba(0,0,0,0.5)] transform-gpu
will-change-transform">

            {/* TOP & BOTTOM LIGHT */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-[#d6b98c] blur-sm"></div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-[#d6b98c] blur-sm"></div>

            <div className="flex flex-col
lg:flex-row items-center justify-between gap-8">

              {/* LEFT SIDE */}
              <div className="text-center md:text-left">

                <h2
                  className="
    text-[clamp(1.5rem,7vw,4rem)]
    font-extrabold
    leading-[1.1]
    tracking-[0.08em]
    sm:tracking-[0.12em]
    md:tracking-[0.18em]
    break-words
    text-center
    md:text-left
  "
                >
                  <span className="text-white">KULAL</span>

                  <span className="text-[#d6b98c] ml-[clamp(.3rem,.8vw,.75rem)]">
                    INTERIORS
                  </span>
                </h2>

                <p className="
mt-4
text-[clamp(9px,2.4vw,14px)]
uppercase
tracking-[0.25em]
sm:tracking-[0.35em]
md:tracking-[0.45em]
text-gray-400
">

                  Luxury Interior Design Studio

                </p>

              </div>

              {/* DIVIDER */}
              <div className="hidden lg:block h-[clamp(80px,8vw,96px)] w-[1px] bg-white/10"></div>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-[clamp(1rem,2vw,1.75rem)]">

                {/* INSTAGRAM */}
                <motion.a
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/kulal_interiors?igsh=OHhwNm9yMHd6aDll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[clamp(60px,7vw,80px)]
w-[clamp(60px,7vw,80px)] rounded-full border border-[#d6b98c]/60 flex items-center justify-center text-white hover:text-[#d6b98c] hover:bg-[#d6b98c]/10 transition duration-300"
                >
                  <FaInstagram className="text-[clamp(26px,3vw,36px)]" />
                </motion.a>

                {/* LINKEDIN */}
                <motion.a
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[clamp(60px,7vw,80px)]
w-[clamp(60px,7vw,80px)] rounded-full border border-[#d6b98c]/60 flex items-center justify-center text-white hover:text-[#d6b98c] hover:bg-[#d6b98c]/10 transition duration-300"
                >
                  <FaLinkedinIn className="text-[clamp(26px,3vw,36px)]" />
                </motion.a>

                {/* YOUTUBE */}
                <motion.a
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[clamp(60px,7vw,80px)]
w-[clamp(60px,7vw,80px)] rounded-full border border-[#d6b98c]/60 flex items-center justify-center text-white hover:text-[#d6b98c] hover:bg-[#d6b98c]/10 transition duration-300"
                >
                  <FaYoutube className="text-[clamp(26px,3vw,36px)]" />
                </motion.a>

              </div>

            </div>

          </div>

        </div>

      </motion.section>
    </>
  );
}