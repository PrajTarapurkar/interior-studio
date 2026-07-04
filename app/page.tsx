"use client";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import LuxurySlider from "@/components/home/LuxurySlider";
import VideoSection from "@/components/home/VideoSection";
import HomeServices from "@/components/home/HomeServices";
import Presence from "@/components/home/Presence";
import Loader from "@/components/layout/Loader";
import HowItWorks from "@/components/home/HowItWorks";




export default function Home() {

   
  return (
    
     <>
      <Loader />
    <main className="relative overflow-hidden">

        <Navbar />

<Hero />

     <FeaturedProjects />

<LuxurySlider />

<HowItWorks />
      
<VideoSection />

<HomeServices />

<Presence />

<Footer />


    </main>
    </>
  );
}