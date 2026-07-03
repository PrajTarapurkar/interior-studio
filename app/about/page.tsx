"use client";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import CTA from "@/components/about/CTA";

export default function AboutPage() {



  return (
  <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">

    <Navbar />

    <section className="relative bg-black overflow-hidden py-26 sm:py-24 lg:py-32">

      {/* Background Glow */}
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

        <Hero />

        <Story />

        <CTA />

      </div>

    </section>

    <Footer />

  </main>
);
}


