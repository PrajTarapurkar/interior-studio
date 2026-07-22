import { client } from "@/sanity/lib/client";
import { HOME_HERO_QUERY } from "@/sanity/lib/queries";

export async function getHomeHero() {
  return await client.fetch(HOME_HERO_QUERY);
}