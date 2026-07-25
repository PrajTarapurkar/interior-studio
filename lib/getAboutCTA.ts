import { client } from "@/sanity/lib/client";
import { ABOUT_CTA_QUERY } from "@/sanity/lib/queries";

export async function getAboutCTA() {
  return client.fetch(ABOUT_CTA_QUERY);
}