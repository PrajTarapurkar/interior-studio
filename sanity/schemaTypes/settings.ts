import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      initialValue: "Kulal Interiors",
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Luxury Interior Design Studio",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      initialValue: "+91 770 994 3271",
    }),

    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      initialValue: "917709943271",
      description:
        "Enter WhatsApp number with country code, without + or spaces.",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "kulalinteriors@gmail.com",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
      initialValue:
        "Shop 05, Mohite Farm, Life Republic, Punawale, Pune",
    }),

    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),

    defineField({
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    }),

    defineField({
      name: "consultationText",
      title: "Consultation Button Text",
      type: "string",
      initialValue: "Get Free Consultation",
    }),

    defineField({
      name: "consultationLink",
      title: "Consultation Button Link",
      type: "string",
      initialValue: "/contact",
    }),

    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "string",
      initialValue: "Monday – Sunday | 9:00 AM – 8:30 PM",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Site Settings",
        subtitle: "Global website information",
      };
    },
  },
});