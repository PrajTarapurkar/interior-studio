import { groq } from "next-sanity";

export const PROJECTS_QUERY = groq`
*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  slug,
  location,
  clientName,
  area,
  completionDate,
  status,
  description,
  shortDescription,
  coverImage,
  gallery,
  seoTitle,
  seoDescription,

  category->{
    title
  }
}
`;
export const FEATURED_HOME_PROJECTS_QUERY = groq`
*[
  _type == "project" &&
  featuredOnHome == true
] | order(_createdAt desc){

  _id,
  title,
  slug,
  location,
  coverImage
}
`;

export const PROJECT_BY_SLUG_QUERY = groq`
*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  location,
  clientName,
  area,
  completionDate,
  status,
  description,
  shortDescription,
  coverImage,
  gallery,
  seoTitle,
  seoDescription,

  category->{
    title
  }
}
`;
export const RELATED_PROJECTS_QUERY = groq`
*[
  _type == "project" &&
  slug.current != $slug
]
| order(_createdAt desc)[0...3]{

  _id,
  title,
  slug,
  location,
  coverImage,

  category->{
    title
  }

}
`;
export const SERVICES_QUERY = `
  *[_type == "service"] | order(_createdAt asc){
    _id,
    title,
    shortDescription
  }
`;

export const HOME_SERVICES_SECTION_QUERY = `
*[_type == "homeServicesSection"][0]{
  badge,
  heading,
  description,
  bottomHeading,
  additionalServices,
  featuredServices
}
`;

export const HOME_HERO_QUERY = groq`
*[_type == "homeHero"][0]{
  badge,
  heading,
  highlightText,
  description,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}
`;

export const HOME_HOW_IT_WORKS_QUERY = groq`
*[_type == "homeHowItWorks"][0]{
  badge,
  heading,
  highlightText,
  description,
  buttonText,
  buttonLink,
  steps[]{
    number,
    title,
    description,
    icon
  }
}
`;

export const HOME_VIDEO_SECTION_QUERY = groq`
*[_type == "homeVideoSection"][0]{
  badge,
  heading,
  highlightText,
  description,
  videos[]{
    title,
    location,
    description,
    buttonText,
    video{
      asset->
    }
  }
}
`;