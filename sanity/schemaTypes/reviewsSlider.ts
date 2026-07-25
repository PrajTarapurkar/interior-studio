import { defineArrayMember, defineField, defineType } from "sanity";

export const reviewsSliderType = defineType({
  name: "reviewsSlider",
  title: "Reviews - Client Reviews Slider",
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
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",

          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "project",
              title: "Project",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "location",
              title: "Location",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (Rule) => Rule.required().min(1).max(5),
            }),

            defineField({
              name: "review",
              title: "Review",
              type: "text",
              rows: 5,
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: "name",
              subtitle: "project",
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Client Reviews Slider",
      };
    },
  },
});