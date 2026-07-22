import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeVideoSection",
  title: "Home - Video Section",
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
      name: "videos",
      title: "Videos",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "video",
              title: "Video",
              type: "file",
              options: {
                accept: "video/mp4",
              },
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),

            defineField({
              name: "location",
              title: "Location",
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
              initialValue: "Watch Tour",
            }),
          ],
        },
      ],
    }),
  ],
});