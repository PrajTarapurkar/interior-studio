import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export async function getProjects() {
  return await client.fetch(PROJECTS_QUERY);
}