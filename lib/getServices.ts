import { client } from "@/sanity/lib/client";

export async function getServices() {
  return await client.fetch(`
    *[_type == "service"] | order(_createdAt asc){
      _id,
      title,
      shortDescription
    }
  `);
}