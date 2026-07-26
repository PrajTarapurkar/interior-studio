"use client";

import Image from "next/image";
import { motion } from "framer-motion";



type TrustedBrandsProps = {
  brands: {
    logos: {
      logo: string;
    }[];
  };
};

export default function TrustedBrands({ brands }: TrustedBrandsProps) {
  const marqueeBrands = [...brands.logos, ...brands.logos];
    
    return (
        <section className="relative bg-black py-24 overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] bg-[#d6b98c]/5 blur-[180px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm">
                        TRUSTED BRANDS
                    </p>

<h2 className="
mt-5
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
font-[family:var(--font-heading)]
font-semibold
leading-[1.05]
">                        We Work With
                        <span className="block text-[#d6b98c]">
                            Industry Leaders
                        </span>
                    </h2>

<p className="
mt-8
max-w-3xl
mx-auto
text-gray-400
text-sm
sm:text-base
md:text-lg
lg:text-xl
leading-relaxed
px-4
">                        Partnering with the world's most trusted brands to create
                        exceptional interiors with uncompromising quality.
                    </p>
                </div>

                {/* Brand Marquee */}

<div className="relative overflow-hidden py-10">

  <motion.div
  className="flex items-center gap-16 md:gap-20 lg:gap-24 w-max"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear",
    duration: 18,
  }}
>
  {marqueeBrands.map((item, index) => (
    <div
  key={index}
  className="
  flex-shrink-0
  flex
  items-center
  justify-center

  w-36 h-20
  sm:w-44 sm:h-24
  md:w-52 md:h-28
  lg:w-60 lg:h-32
  xl:w-64 xl:h-36
"
>
  <Image
  src={item.logo}
  alt="Brand Logo"
  width={300}
  height={150}
  className="
    max-w-[95%]
    max-h-[90%]
    object-contain
    transition-all
    duration-300
  "
/>
</div>
  ))}
</motion.div>

</div>

            </div>
        </section>
    );
}