"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export default function ServicesPage() {

  

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

  return (

    <main className="bg-black text-white overflow-x-hidden min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="
        relative
        overflow-hidden

        pt-[150px]
        sm:pt-[170px]
        md:pt-[190px]
        lg:pt-[210px]

        pb-20
        sm:pb-24
        lg:pb-32
      ">

        {/* GLOW */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#d6b98c]/10 blur-[100px] sm:blur-[160px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-[10px] sm:text-xs md:text-sm mb-5">
            What We Offer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto">

            Premium Interior
            <span className="block text-[#d6b98c] mt-2">
              Design Services
            </span>

          </h1>

          <p className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base lg:text-xl leading-relaxed max-w-3xl mx-auto px-2">

            At Kulal Interiors, we blend creativity with technical precision
            to deliver spaces that are both luxurious and functional.

          </p>

        </div>

      </section>

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

<Footer />

    </main>

  );
}