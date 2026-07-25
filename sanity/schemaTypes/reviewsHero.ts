import { defineField, defineType } from "sanity";

export const reviewsHeroType = defineType({
  name: "reviewsHero",
  title: "Reviews Hero",
  type: "document",

  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "highlightText",
      title: "Highlight Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Reviews Hero",
      };
    },
  },
});