import { defineField, defineType } from "sanity";

export const brandType = defineType({
  name: "brand",
  title: "Trusted Brands",
  type: "document",

  fields: [
    defineField({
      name: "logos",
      title: "Brand Logos",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Trusted Brands",
      };
    },
  },
});