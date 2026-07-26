
import { getServices } from "@/lib/getServices";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
// import FeaturedProjects from "@/components/home/FeaturedProjects";
import LuxurySlider from "@/components/home/LuxurySlider";
import VideoSection from "@/components/home/VideoSection";
import HomeServices from "@/components/home/HomeServices";
import Presence from "@/components/home/Presence";
import Loader from "@/components/layout/Loader";
import HowItWorks from "@/components/home/HowItWorks";
import CounterSection from "@/components/home/CounterSection";
import TrustedBy from "@/components/home/TrustedBrands";
import { getBrands } from "@/sanity/lib/fetch";
import { getHomeCounter } from "@/sanity/lib/fetch";


import {
  getHomeHero,
  getHomeServicesSection,
  getFeaturedHomeProjects,
  getHomeHowItWorks,
  getHomeVideoSection,
} from "@/sanity/lib/fetch";



export default async function Home() {
  const hero = await getHomeHero();
  const featuredProjects = await getFeaturedHomeProjects();
  const brands = await getBrands();
  const counterSection = await getHomeCounter();
  
const servicesSection = await getHomeServicesSection();
const howItWorks = await getHomeHowItWorks();
const videoSection = await getHomeVideoSection();
  


  return (

    <>
      <Loader />
      <main className="relative overflow-hidden">

        <Navbar />

        <Hero hero={hero} />

        {/* <FeaturedProjects /> */}

        

        <CounterSection counterSection={counterSection} />

        <LuxurySlider projects={featuredProjects} />

        <HowItWorks howItWorks={howItWorks} />

        <VideoSection videoSection={videoSection} />

        <HomeServices section={servicesSection}/>

        <TrustedBy brands={brands} />

        <Presence />

        <Footer />


      </main>
    </>
  );
}