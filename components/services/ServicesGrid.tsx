"use client";

import { motion } from "framer-motion";

const services = [
    {
      
      title: "Designing",
      desc: "We translate your ideas into visual realities. From mood boards and 2D floor plans to high-end 3D walkthroughs, our design process ensures every inch of your space is optimized for aesthetics and utility.",
    },
    {
      
      title: "Execution",
      desc: "Our skilled craftsmen and site supervisors bring the blueprints to life with precision and professionalism.",
    },
    {
      
      title: "Technical Consultancy",
      desc: "Expert guidance on technical specifications, planning, feasibility, and budgeting for smooth execution.",
    },
    {
      
      title: "Material Supply",
      desc: "Premium-grade materials sourced carefully to ensure long-lasting quality and elegant finishes.",
    },
    {
      
      title: "Vastu Consultation",
      desc: "Create harmony and positivity through thoughtful Vastu-based layout guidance and planning.",
    },
    {
      
      title: "Civil Works",
      desc: "Complete civil execution including plumbing, masonry, tiling, and structural modifications.",
    },
    {
      
      title: "Structural Designing",
      desc: "Robust structural solutions engineered for stability, functionality, and architectural integrity.",
    },
    {
      
      title: "Turnkey Solutions",
      desc: "A stress-free complete package from design and procurement to final handover.",
    },
  ];

  const sectors = [
    {
      title: "Residential",
      desc: "Modern apartments, flats, and homes designed for comfort and elegance.",
    },
    {
      title: "Villas",
      desc: "Luxury villa interiors crafted with bespoke premium aesthetics.",
    },
    {
      title: "Office Spaces",
      desc: "Productive and ergonomic workspaces aligned with modern business needs.",
    },
    {
      title: "Commercial Spaces",
      desc: "Retail stores, showrooms, and hospitality interiors with functional sophistication.",
    },
  ];


export default function ServicesGrid() {
  return (
    <>

{/* SERVICES GRID */}
      <section className="pb-20 sm:pb-24 lg:pb-32">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  sm:rounded-[28px]
                  border
                  border-white/10
                  bg-[#111111]
                  p-5
                  sm:p-6
                  hover:border-[#d6b98c]/30
                  transition-all
                  duration-500
                "
              >

                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(214,185,140,0.12),transparent_45%)]"></div>

                <div className="relative z-10">

                 

                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}