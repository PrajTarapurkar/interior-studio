import { defineField, defineType } from "sanity";

export const homeCounterType = defineType({
  name: "homeCounter",
  title: "Counter Section",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "counters",
      title: "Counters",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Number",
              type: "number",
            }),

            defineField({
              name: "suffix",
              title: "Suffix",
              type: "string",
            }),

            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});