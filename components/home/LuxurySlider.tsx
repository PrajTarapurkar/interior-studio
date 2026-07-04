
"use client";

import { motion } from "framer-motion";

export default function LuxurySlider() {
  return (
    <>
      {/* Luxury Showcase Slider */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.2 }}
  className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
>
  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="mb-14 md:mb-20">

      <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-xs md:text-sm mb-4">
        Luxury Interiors
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">

        Explore Our
        <span className="block text-[#d6b98c]">
          Signature Spaces
        </span>

      </h2>

      <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl leading-relaxed">

        Discover premium interiors crafted with timeless elegance,
        modern sophistication, and luxurious comfort.

      </p>

    </div>

  </div>

  {/* Scrollable Slider */}
  <div className="flex gap-5 md:gap-8 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">

    {[
      {
        image: "/images/project1.jpg",
        title: "Luxury Living Room",
        city: "Pune",
      },
      {
        image: "/images/project2.jpg",
        title: "Modern Bedroom",
        city: "Mumbai",
      },
      {
        image: "/images/project3.jpg",
        title: "Premium Kitchen",
        city: "Bangalore",
      },
      {
        image: "/images/project1.jpg",
        title: "Elegant Workspace",
        city: "Delhi",
      },
      {
        image: "/images/project2.jpg",
        title: "Royal Penthouse",
        city: "Hyderabad",
      },
      {
        image: "/images/project3.jpg",
        title: "Luxury Dining Area",
        city: "Chennai",
      },
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative min-w-[90%]
sm:min-w-[70%]
md:min-w-[48%]
lg:min-w-[32%] h-[500px] md:h-[650px] rounded-[34px] overflow-hidden snap-center group shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      >

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        {/* Glow */}
        <div className="absolute inset-0 bg-[#d6b98c]/0 group-hover:bg-[#d6b98c]/10 transition duration-500"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">

          <p className="uppercase tracking-[0.3em] text-[#d6b98c] text-[10px] md:text-xs mb-3">
            {item.city} • Luxury Interior
          </p>

          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">

            {item.title}

          </h3>

        </div>

      </motion.div>

    ))}

  </div>

</motion.section>
    </>
  );
}