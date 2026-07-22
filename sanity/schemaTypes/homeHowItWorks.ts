import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeHowItWorks",
  title: "Home - How It Works",
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
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),

    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    }),

    defineField({
      name: "steps",
      title: "Process Steps",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "number",
              title: "Step Number",
              type: "string",
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),

            defineField({
              name: "icon",
              title: "Icon",
              type: "string",

              options: {
                list: [
                  { title: "Consultation", value: "consultation" },
                  { title: "Planning", value: "planning" },
                  { title: "Design", value: "design" },
                  { title: "Execution", value: "execution" },
                  { title: "Handover", value: "handover" },
                ],
              },
            }),
          ],
        },
      ],
    }),
  ],
});