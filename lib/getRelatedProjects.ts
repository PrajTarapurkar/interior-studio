import { client } from "@/sanity/lib/client";
import { RELATED_PROJECTS_QUERY } from "@/sanity/lib/queries";

export async function getRelatedProjects(slug: string) {
  return client.fetch(RELATED_PROJECTS_QUERY, {
    slug,
  });
}