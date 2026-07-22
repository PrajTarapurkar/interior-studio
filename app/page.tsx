
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

        <LuxurySlider projects={featuredProjects} />

        <HowItWorks howItWorks={howItWorks} />

        <VideoSection videoSection={videoSection} />

        <HomeServices section={servicesSection}/>

        <Presence />

        <Footer />


      </main>
    </>
  );
}