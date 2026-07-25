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

export const REVIEWS_HERO_QUERY = `
*[_type == "reviewsHero"][0]{
  badge,
  heading,
  highlightText,
  subtitle
}
`;

export const REVIEWS_VIDEO_TESTIMONIALS_QUERY = groq`
*[_type == "reviewsVideoTestimonials"][0]{
  badge,
  heading,
  highlightText,
  description,
  videos[]{
    title,
    location,
    youtubeUrl,
    thumbnail{
      asset->{
        url
      }
    }
  }
}
`;

export const REVIEWS_GOOGLE_RATING_QUERY = groq`
*[_type == "reviewsGoogleRating"][0]{
  badge,
  heading,
  highlightText,
  description,
  rating,
  ratingLabel,
  reviewCount,
  buttonText,
  googleReviewUrl
}
`;

export const REVIEWS_SLIDER_QUERY = groq`
*[_type == "reviewsSlider"][0]{
  badge,
  heading,
  highlightText,
  reviews[]{
    name,
    project,
    location,
    rating,
    review
  }
}
`;

export const SERVICES_HERO_QUERY = `
*[_type == "servicesHero"][0]{
  badge,
  heading,
  highlightText,
  description
}
`;

export const SERVICES_GRID_QUERY = `
*[_type == "servicesGrid"][0]{
  services[]{
    title,
    description
  }
}
`;

export const ABOUT_HERO_QUERY = `
*[_type == "aboutHero"][0]{
  badge,
  heading,
  highlightText,
  description
}
`;

export const ABOUT_STORY_QUERY = `
*[_type == "aboutStory"][0]{
  image,
  experienceNumber,
  experienceLabel,
  badge,
  heading,
  highlightText,
  story,
  challengesTitle,
  challenges,
  visionTitle,
  vision
}
`;

export const ABOUT_CTA_QUERY = `
*[_type == "aboutCTA"][0]{
  badge,
  heading,
  highlightText,
  content
}
`;

export const CONTACT_HERO_QUERY = `
*[_type == "contactHero"][0]{
  badge,
  heading,
  highlightText,
  description
}
`;

export const CONTACT_INFO_QUERY = `
*[_type == "contactInfo"][0]{
  badge,
  heading,
  description,

  phoneLabel,
  phone,
  phoneLink,

  emailLabel,
  email,
  emailLink,

  locationLabel,
  location,
  locationLink,

  mapEmbedUrl
}
`;

export const CONTACT_FORM_QUERY = `
*[_type=="contactForm"][0]{
  badge,
  heading,
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  servicePlaceholder,
  messagePlaceholder,
  submitButton,
  sendingButton,
  successMessage,
  projectTypes
}
`;