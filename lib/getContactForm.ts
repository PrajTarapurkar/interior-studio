import { client } from "@/sanity/lib/client";
import { CONTACT_FORM_QUERY } from "@/sanity/lib/queries";

export async function getContactForm() {
  return client.fetch(CONTACT_FORM_QUERY);
}