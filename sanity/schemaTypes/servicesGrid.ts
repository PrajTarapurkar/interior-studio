import { defineField, defineType } from "sanity";

export const servicesGridType = defineType({
  name: "servicesGrid",
  title: "Services - Grid",
  type: "document",

  fields: [
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    }),

    
  ],

  preview: {
    prepare() {
      return {
        title: "Services Grid",
      };
    },
  },
});