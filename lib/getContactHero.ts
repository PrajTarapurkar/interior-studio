import { client } from "@/sanity/lib/client";
import { CONTACT_HERO_QUERY } from "@/sanity/lib/queries";

export async function getContactHero() {
  return client.fetch(CONTACT_HERO_QUERY);
}