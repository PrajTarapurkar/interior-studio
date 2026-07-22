import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",

  fields: [
    // ===========================
    // BASIC DETAILS
    // ===========================

    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Project URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
    }),

    // ===========================
    // PROJECT IMAGES
    // ===========================

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // ===========================
    // PROJECT DETAILS
    // ===========================

    defineField({
      name: "area",
      title: "Area (Sq.ft)",
      type: "string",
    }),

    defineField({
  name: "category",
  title: "Category",
  type: "reference",
  to: [{ type: "category" }],
}),

    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    }),

    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "Ongoing", value: "ongoing" },
        ],
      },
    }),

    defineField({
  name: "featuredOnHome",
  title: "Show on Home Page",
  type: "boolean",
  initialValue: false,
}),

    // ===========================
    // CONTENT
    // ===========================

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 8,
    }),

    // ===========================
    // SEO
    // ===========================

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
});