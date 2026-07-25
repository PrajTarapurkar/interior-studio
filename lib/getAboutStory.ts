import { client } from "@/sanity/lib/client";
import { ABOUT_STORY_QUERY } from "@/sanity/lib/queries";

export async function getAboutStory() {
  return await client.fetch(ABOUT_STORY_QUERY);
}