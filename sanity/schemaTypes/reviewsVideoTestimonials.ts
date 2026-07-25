import { defineArrayMember, defineField, defineType } from "sanity";

export const reviewsVideoTestimonialsType = defineType({
  name: "reviewsVideoTestimonials",
  title: "Reviews - Video Testimonials",
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",

          fields: [
            defineField({
              name: "title",
              title: "Title",
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
              name: "thumbnail",
              title: "Thumbnail",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "youtubeUrl",
              title: "YouTube URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: "title",
              subtitle: "location",
              media: "thumbnail",
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Video Testimonials",
      };
    },
  },
});