import { client } from "@/sanity/lib/client";
import { CONTACT_INFO_QUERY } from "@/sanity/lib/queries";

export async function getContactInfo() {
  return client.fetch(CONTACT_INFO_QUERY);
}