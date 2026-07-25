

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { getReviewsHero } from "@/lib/getReviewsHero";
import { getReviewsVideoTestimonials } from "@/lib/getReviewsVideoTestimonials";
import { getReviewsGoogleRating } from "@/lib/getReviewsGoogleRating";
import { getReviewsSlider } from "@/lib/getReviewsSlider";

import Hero from "@/components/reviews/Hero";
import VideoTestimonials from "@/components/reviews/VideoTestimonials";
import GoogleRating from "@/components/reviews/GoogleRating";
import ReviewsSlider from "@/components/reviews/ReviewsSlider";
// import CTA from "@/components/reviews/CTA";

export default async function ReviewsPage() {
  const reviewsHero = await getReviewsHero();
  const reviewsVideoTestimonials = await getReviewsVideoTestimonials();
  const reviewsGoogleRating = await getReviewsGoogleRating();
  const reviewsSlider = await getReviewsSlider();
  return (
    <main className="relative overflow-hidden">

      <Navbar />

      <Hero hero={reviewsHero} />

      <VideoTestimonials
        section={reviewsVideoTestimonials}
      />

      <GoogleRating section={reviewsGoogleRating} />

      <ReviewsSlider section={reviewsSlider} />

      {/*  <CTA />  */}

      <Footer />

    </main>
  );
}