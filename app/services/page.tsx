

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/services/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";

import { getServicesHero } from "@/lib/getServicesHero";
import { getServicesGrid } from "@/lib/getServicesGrid";


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