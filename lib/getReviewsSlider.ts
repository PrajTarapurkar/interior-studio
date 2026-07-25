import { client } from "@/sanity/lib/client";
import { REVIEWS_SLIDER_QUERY } from "@/sanity/lib/queries";

export async function getReviewsSlider() {
  return client.fetch(REVIEWS_SLIDER_QUERY);
}