import { defineField, defineType } from "sanity";

export const homeHeroType = defineType({
  name: "homeHero",
  title: "Home Hero",
  type: "document",

  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Main Heading",
      type: "string",
    }),

    defineField({
      name: "highlightText",
      title: "Highlighted Text",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    }),

    defineField({
      name: "primaryButtonLink",
      title: "Primary Button Link",
      type: "string",
    }),

    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    }),

    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button Link",
      type: "string",
    }),
  ],
});