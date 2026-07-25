import { defineField, defineType } from "sanity";

export const reviewsGoogleRatingType = defineType({
  name: "reviewsGoogleRating",
  title: "Reviews - Google Rating",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "ratingLabel",
      title: "Rating Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "reviewCount",
      title: "Review Count",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "googleReviewUrl",
      title: "Google Review URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Google Rating",
      };
    },
  },
});