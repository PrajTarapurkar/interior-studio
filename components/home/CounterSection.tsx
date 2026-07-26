"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/* const stats = [
    {
        number: 250,
        suffix: "+",
        label: "Luxury Projects",
    },
    {
        number: 12,
        suffix: "+",
        label: "Years of Excellence",
    },
    {
        number: 180,
        suffix: "+",
        label: "Happy Clients",
    },
    {
        number: 98,
        suffix: "%",
        label: "Client Satisfaction",
    },
]; */

type CounterSectionProps = {
  counterSection: {
    badge: string;
    heading: string;
    highlightText: string;
    description: string;
    counters: {
      number: number;
      suffix: string;
      label: string;
    }[];
  };
};

export default function CounterSection({
  counterSection,
}: CounterSectionProps) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.35,
    });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-black py-20 md:py-28"
        >
            {/* Gold Glow */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#d6b98c]/10 blur-[150px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4">
                        {counterSection.badge}
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] text-white">
                        {counterSection.heading}
                        <span className="block text-[#d6b98c]">
                           {counterSection.highlightText}
                        </span>
                    </h2>

                    <p className="mt-8 max-w-3xl text-gray-400 text-base md:text-xl leading-relaxed">
                            {counterSection.description}
                    </p>
                </motion.div>

                {/* Counter Row */}
                <div className="mt-20 grid grid-cols-2 lg:grid-cols-4">

                    {counterSection.counters.map((item, index) => (

                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            className={`
                py-10
                px-4 `}
                        >
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">

                                <CountUp
                                    key={inView ? `visible-${item.label}` : `hidden-${item.label}`}
                                    start={0}
                                    end={inView ? item.number : 0}
                                    duration={1}
                                    suffix={item.suffix}
                                />

                            </h3>

                            <div className="w-10 h-[1px] bg-[#d6b98c]/60 my-5"></div>

                            <p className="uppercase tracking-[0.30em] text-[#d6b98c] text-[11px] md:text-xs leading-6">
                                {item.label}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}