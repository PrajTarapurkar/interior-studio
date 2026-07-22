import {defineField, defineType} from 'sanity'

export const homeServicesSectionType = defineType({
  name: 'homeServicesSection',
  title: 'Home Services Section',
  type: 'document',

  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'bottomHeading',
      title: 'Bottom Heading',
      type: 'string',
    }),

    defineField({
      name: 'additionalServices',
      title: 'Additional Services',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
  name: "featuredServices",
  title: "Featured Services",
  type: "array",
  of: [
    defineField({
      name: "service",
      title: "Service",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: "shortDescription",
          title: "Short Description",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
      ],

      preview: {
        select: {
          title: "title",
          subtitle: "shortDescription",
        },
      },
    }),
  ],
  validation: (Rule) => Rule.required().min(4).max(4),
}),
  ],
})