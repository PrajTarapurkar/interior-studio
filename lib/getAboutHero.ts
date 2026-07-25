import { client } from "@/sanity/lib/client";
import { ABOUT_HERO_QUERY } from "@/sanity/lib/queries";

export async function getAboutHero() {
  return await client.fetch(ABOUT_HERO_QUERY);
}