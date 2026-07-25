import { client } from "@/sanity/lib/client";
import { REVIEWS_VIDEO_TESTIMONIALS_QUERY } from "@/sanity/lib/queries";

export async function getReviewsVideoTestimonials() {
  return await client.fetch(REVIEWS_VIDEO_TESTIMONIALS_QUERY);
}