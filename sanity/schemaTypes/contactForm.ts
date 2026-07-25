import { defineField, defineType } from "sanity";

export const contactFormType = defineType({
  name: "contactForm",
  title: "Contact Form",
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
      name: "namePlaceholder",
      title: "Name Placeholder",
      type: "string",
    }),

    defineField({
      name: "emailPlaceholder",
      title: "Email Placeholder",
      type: "string",
    }),

    defineField({
      name: "phonePlaceholder",
      title: "Phone Placeholder",
      type: "string",
    }),

    defineField({
      name: "servicePlaceholder",
      title: "Project Type Placeholder",
      type: "string",
    }),

    defineField({
      name: "messagePlaceholder",
      title: "Message Placeholder",
      type: "string",
    }),

    defineField({
      name: "submitButton",
      title: "Submit Button",
      type: "string",
    }),

    defineField({
      name: "sendingButton",
      title: "Sending Button",
      type: "string",
    }),

    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
    }),

    defineField({
  name: "projectTypes",
  title: "Project Types",
  type: "array",
  of: [{ type: "string" }],
}),

  ],
});