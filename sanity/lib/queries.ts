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