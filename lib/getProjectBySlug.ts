import { client } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY } from "@/sanity/lib/queries";

export async function getProjectBySlug(slug: string) {
  return await client.fetch(PROJECT_BY_SLUG_QUERY, {
    slug,
  });
}