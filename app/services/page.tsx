

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/services/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";

import { getServicesHero } from "@/lib/getServicesHero";
import { getServicesGrid } from "@/lib/getServicesGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services",

  description:
    "Explore Kulal Interiors' luxury interior design services for residential homes, villas, offices, retail spaces, hospitality, and commercial projects.",

  alternates: {
    canonical: "/services",
  },
};


export default async function ServicesPage() {
  const servicesHero = await getServicesHero();
  const servicesGrid = await getServicesGrid();

  return (

    <main className="relative overflow-hidden">

      <Navbar />

      <Hero section={servicesHero} />

      <ServicesGrid section={servicesGrid} />

      <Footer />
    </main>
  );
}