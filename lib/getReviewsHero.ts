import { client } from "@/sanity/lib/client";
import { REVIEWS_HERO_QUERY } from "@/sanity/lib/queries";

export async function getReviewsHero() {
  return await client.fetch(REVIEWS_HERO_QUERY);
}