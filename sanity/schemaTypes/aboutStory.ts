import { defineField, defineType } from "sanity";

export const aboutStoryType = defineType({
  name: "aboutStory",
  title: "About - Story",
  type: "document",

  fields: [
    // Image
    defineField({
      name: "image",
      title: "Story Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // Floating Card
    defineField({
      name: "experienceNumber",
      title: "Experience Number",
      type: "string",
    }),

    defineField({
      name: "experienceLabel",
      title: "Experience Label",
      type: "string",
    }),

    // Badge
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
    }),

    // Heading
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

    // Story Paragraphs
    defineField({
      name: "story",
      title: "Story Paragraphs",
      type: "array",
      of: [
        {
          type: "text",
        },
      ],
    }),

    // Challenges
    defineField({
      name: "challengesTitle",
      title: "Challenges Title",
      type: "string",
    }),

    defineField({
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),

    // Vision
    defineField({
      name: "visionTitle",
      title: "Vision Title",
      type: "string",
    }),

    defineField({
      name: "vision",
      title: "Vision Points",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "About Story",
      };
    },
  },
});