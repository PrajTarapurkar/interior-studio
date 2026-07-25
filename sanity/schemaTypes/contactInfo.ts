import { defineField, defineType } from "sanity";

export const contactInfoType = defineType({
  name: "contactInfo",
  title: "Contact Info",
  type: "document",

  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "phoneLabel",
      title: "Phone Label",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "phoneLink",
      title: "Phone Link",
      type: "string",
    }),

    defineField({
      name: "emailLabel",
      title: "Email Label",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "emailLink",
      title: "Email Link",
      type: "string",
    }),

    defineField({
      name: "locationLabel",
      title: "Location Label",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "locationLink",
      title: "Location Link",
      type: "url",
    }),

    defineField({
      name: "mapEmbedUrl",
      title: "Google Map Embed URL",
      type: "url",
    }),
  ],
});