"use client";

import { motion } from "framer-motion";


type ServicesSection = {
  badge: string;
  heading: string;
  description: string;
  bottomHeading: string;
  additionalServices: string[];
  featuredServices: {
    
    title: string;
    shortDescription: string;
  }[];
};

type HomeServicesProps = {
  
  section: ServicesSection;
};

export default function HomeServices({
  
  section,
}: HomeServicesProps) {
  return (
    <>
      {/* SERVICES SECTION */}
<motion.section
  id="services"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 md:py-28 px-4 md:px-8 bg-black text-white overflow-hidden"
>

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4 font-medium">
  {section.badge}
</p>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
  {section.heading}
</h2>

      <p className="mt-6 text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
  {section.description}
</p>

    </div>

    {/* TOP SERVICE CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

{(section.featuredServices ?? []).map((service, index) => (        <motion.div
          key={index}
          whileHover={{ y: -10, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-[#d6b98c]/40 transition duration-300"
        >

          <h3 className="text-2xl font-semibold tracking-tight mb-5 text-white">
            {service.title}
          </h3>

         <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
  {service.shortDescription}
</p>

        </motion.div>

      ))}

    </div>

    {/* ADDITIONAL SERVICES */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-16 md:mt-24 text-center"
    >

      {/* Small Heading */}
      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-10 font-medium">
  {section.bottomHeading}
</p>

      {/* INLINE SERVICES */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 md:gap-x-8">

        {(section?.additionalServices ?? []).map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            className="group flex items-center gap-3"
          >

            {/* GOLD DOT */}
            <div className="h-2.5 w-2.5 rounded-full bg-[#d6b98c] shadow-[0_0_15px_rgba(214,185,140,0.5)] group-hover:scale-150 transition duration-300"></div>

            {/* TEXT */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wide group-hover:text-[#d6b98c] transition duration-300">

              {item}

            </p>

          </motion.div>

        ))}

      </div>

    </motion.div>

  </div>

</motion.section>
    </>
  );
}