"use client";

import { motion } from "framer-motion";
import {
  MessageCircleMore,
  ClipboardList,
  PencilRuler,
  Hammer,
  KeyRound,
} from "lucide-react";
import { processSteps } from "@/lib/process";

const icons = {
  consultation: MessageCircleMore,
  planning: ClipboardList,
  design: PencilRuler,
  execution: Hammer,
  handover: KeyRound,
};

export default function HowItWorks() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[340px_1fr] gap-14 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs">
              Our Process
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-[family:var(--font-heading)] leading-tight">
              <span className="text-white">How We</span>
              <br />
              <span className="text-[#d6b98c]">Work</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              A seamless and transparent process to bring your dream interior
              space to life with premium craftsmanship.
            </p>

            <button
              className="
                mt-8
                px-8
                py-4
                rounded-full
                bg-[#d6b98c]
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              Let's Get Started
            </button>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Desktop Divider */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            <div className="relative lg:pl-10">

              {/* Desktop Horizontal Line */}
              <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-white/10" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">

                {processSteps.map((step, index) => {
                  const Icon =
                    icons[step.icon as keyof typeof icons];

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.1,
                      }}
                      className="relative text-center group"
                    >
                      {/* Mobile Vertical Line */}
                      {index !== processSteps.length - 1 && (
                        <div className="lg:hidden absolute left-1/2 top-20 -translate-x-1/2 h-20 w-px bg-white/10" />
                      )}

                      {/* Circle */}
                      <div
                        className="
                          relative
                          z-10
                          mx-auto
                          w-20
                          h-20
                          rounded-full
                          bg-[#111111]
                          border
                          border-[#d6b98c]/30
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300
                          group-hover:bg-[#d6b98c]
                        "
                      >
                        <Icon
                          size={30}
                          className="text-[#d6b98c] group-hover:text-black transition"
                        />
                      </div>

                      {/* Number */}
                      <p className="mt-6 text-[#d6b98c] font-bold text-3xl">
                        {step.number}
                      </p>

                      {/* Title */}
                      <h3 className="mt-2 text-white text-xl font-semibold uppercase tracking-wide">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-gray-400 text-sm leading-7 px-4 max-w-[260px] mx-auto">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}