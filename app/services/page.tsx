"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/services/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";



export default function ServicesPage() {



  return (

    <main className="bg-black text-white overflow-x-hidden min-h-screen">

      <Navbar />

      <Hero />

      <ServicesGrid />

<Footer />

    </main>

  );
}