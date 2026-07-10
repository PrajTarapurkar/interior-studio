"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/reviews/Hero";
import VideoTestimonials from "@/components/reviews/VideoTestimonials";
 import GoogleRating from "@/components/reviews/GoogleRating";
 import ReviewsSlider from "@/components/reviews/ReviewsSlider";
// import CTA from "@/components/reviews/CTA";

export default function ReviewsPage() {
  return (
    <main className="relative overflow-hidden">

      <Navbar />

      <Hero />

     <VideoTestimonials />

       <GoogleRating />

     <ReviewsSlider />

     {/*  <CTA />  */}

      <Footer />

    </main>
  );
}