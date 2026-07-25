import { defineField, defineType } from "sanity";

export const aboutCTAType = defineType({
  name: "aboutCTA",
  title: "About CTA",
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
      name: "highlightText",
      title: "Highlight Text",
      type: "string",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
});