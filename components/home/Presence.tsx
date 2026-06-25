"use client";

import { motion } from "framer-motion";

export default function Presence() {
  return (
    <>
      {/* OUR PRESENCE SECTION */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
>

  {/* Background Glow */}
  <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-[#d6b98c]/10 rounded-full blur-[120px]"></div>

  <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[140px]"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="text-center mb-14 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-5">
        Our Presence
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">

        We Provide Services
        <span className="block text-[#d6b98c]">
          Across Multiple Locations
        </span>

      </h2>

      <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">

        Delivering luxurious and timeless interior experiences
        across major cities and premium Pune locations.

      </p>

    </div>

    {/* Highlight Cities */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

      {[
        {
          city: "Pune",
          text: "Premium Interior Solutions",
        },
        {
          city: "Mumbai",
          text: "Luxury Residential Spaces",
        },
        {
          city: "Parbhani",
          text: "Modern Elegant Interiors",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="relative overflow-hidden rounded-[30px] border border-[#d6b98c]/20 bg-gradient-to-br from-[#151515] to-[#1f1f1f] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.45)]"
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.15),transparent_40%)]"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[0.3em] text-[#d6b98c] text-xs mb-4">
              Featured City
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {item.city}
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {item.text}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

    {/* Pune Areas */}
    <div className="relative bg-gradient-to-br from-[#111111] to-[#1c1c1c] border border-white/10 rounded-[35px] md:rounded-[45px] p-6 md:p-12 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.12),transparent_35%)]"></div>

      <div className="relative z-10 mb-10">

        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Pune Locations We Serve
        </h3>

        <p className="text-gray-400 max-w-3xl leading-relaxed text-sm md:text-base">

          Interior services available across premium Pune locations.

        </p>

      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5">

        {[
          "Punawale",
          "Marunji",
          "Hinjewadi",
          "Baner",
          "Balewadi",
          "Kiwale",
          "Ravet",
          "Dhanori",
          "Moshi",
          "Dehu",
          "Lohegaon",
          "Hadapsar",
          "Mundwa",
          "Tathawade",
          "Charholi",
          "Kokane Chowk",
        ].map((location, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.03,
            }}
            whileHover={{
              x: 5,
              scale: 1.03,
            }}
            className="group flex items-center"
          >

            <div className="h-2 w-2 rounded-full bg-[#d6b98c] mr-3 group-hover:scale-150 transition duration-300"></div>

            <p className="text-sm md:text-base text-gray-300 group-hover:text-[#d6b98c] transition duration-300">

              {location}

            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</motion.section>

    </>
  );
}