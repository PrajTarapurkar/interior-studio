import { client } from "@/sanity/lib/client";
import { SERVICES_GRID_QUERY } from "@/sanity/lib/queries";

export async function getServicesGrid() {
  return await client.fetch(SERVICES_GRID_QUERY);
}