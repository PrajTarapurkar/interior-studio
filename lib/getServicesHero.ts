import { client } from "@/sanity/lib/client";
import { SERVICES_HERO_QUERY } from "@/sanity/lib/queries";

export async function getServicesHero() {
  return await client.fetch(SERVICES_HERO_QUERY);
}