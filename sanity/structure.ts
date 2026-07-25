import type { StructureResolver } from "sanity/structure";
import {
  HomeIcon,
  DocumentsIcon,
  ControlsIcon,
  StarIcon,
  UserIcon,
  ComposeIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Home")
            .items([
              S.documentTypeListItem("homeHero").title("Hero"),
              S.documentTypeListItem("homeServicesSection").title("Services"),
              S.documentTypeListItem("homeHowItWorks").title("How It Works"),
              S.documentTypeListItem("homeVideoSection").title("Video"),
            ])
        ),

      S.listItem()
        .title("Projects")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("Projects")
            .items([
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("project").title("Projects"),
            ])
        ),

      S.listItem()
        .title("Services")
        .icon(ControlsIcon)
        .child(
          S.list()
            .title("Services")
            .items([
              S.documentTypeListItem("service").title("Service Cards"),
              S.documentTypeListItem("servicesHero").title("Hero"),
              S.documentTypeListItem("servicesGrid").title("Grid"),
            ])
        ),

      S.listItem()
        .title("Reviews")
        .icon(StarIcon)
        .child(
          S.list()
            .title("Reviews")
            .items([
              S.documentTypeListItem("reviewsHero").title("Hero"),
              S.documentTypeListItem("reviewsVideoTestimonials").title("Video Testimonials"),
              S.documentTypeListItem("reviewsGoogleRating").title("Google Rating"),
              S.documentTypeListItem("reviewsSlider").title("Client Reviews"),
            ])
        ),

      S.listItem()
        .title("About")
        .icon(UserIcon)
        .child(
          S.list()
            .title("About")
            .items([
              S.documentTypeListItem("aboutHero").title("Hero"),
              S.documentTypeListItem("aboutStory").title("Story"),
              S.documentTypeListItem("aboutCTA").title("Call To Action"),
            ])
        ),

      S.listItem()
        .title("Contact")
        .icon(ComposeIcon)
        .child(
          S.list()
            .title("Contact")
            .items([
              S.documentTypeListItem("contactHero").title("Hero"),
              S.documentTypeListItem("contactInfo").title("Contact Info"),
              S.documentTypeListItem("contactForm").title("Contact Form"),
            ])
        ),
    ]);