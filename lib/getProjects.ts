import { client } from "@/sanity/lib/client";
import {
  PROJECTS_QUERY,
  FEATURED_HOME_PROJECTS_QUERY,
} from "@/sanity/lib/queries";

export async function getProjects() {
  return await client.fetch(PROJECTS_QUERY);
}

export async function getFeaturedHomeProjects() {
  return await client.fetch(FEATURED_HOME_PROJECTS_QUERY);
}