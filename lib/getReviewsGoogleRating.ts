import { client } from "@/sanity/lib/client";
import { REVIEWS_GOOGLE_RATING_QUERY } from "@/sanity/lib/queries";

export async function getReviewsGoogleRating() {
  return await client.fetch(REVIEWS_GOOGLE_RATING_QUERY);
}