import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/getProjectBySlug";
import { urlFor } from "@/sanity/lib/image";
import Hero from "@/components/project-details/Hero";
import Gallery from "@/components/project-details/Gallery";
import Features from "@/components/project-details/RelatedProjects";
import CTA from "@/components/project-details/CTA";
import { getRelatedProjects } from "@/lib/getRelatedProjects";
import { Metadata } from "next";
import { getSiteSettings } from "@/sanity/lib/fetch";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  

  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Kulal Interiors",
    };
  }

  return {
    title:
      project.seoTitle ??
      `${project.title} | Kulal Interiors`,

    description:
      project.seoDescription ??
      project.shortDescription ??
      "Luxury Interior Design by Kulal Interiors.",

    alternates: {
      canonical: `/projects/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "article",

      url: `/projects/${slug}`,

      siteName: "Kulal Interiors",

      title:
        project.seoTitle ??
        `${project.title} | Kulal Interiors`,

      description:
        project.seoDescription ??
        project.shortDescription ??
        "Luxury Interior Design by Kulal Interiors.",

      images: project.coverImage
        ? [
          {
            url: urlFor(project.coverImage)
              .width(1200)
              .height(630)
              .url(),
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ]
        : [],
    },

    twitter: {
      card: "summary_large_image",

      title:
        project.seoTitle ??
        `${project.title} | Kulal Interiors`,

      description:
        project.seoDescription ??
        project.shortDescription ??
        "Luxury Interior Design by Kulal Interiors.",

      images: project.coverImage
        ? [
          urlFor(project.coverImage)
            .width(1200)
            .height(630)
            .url(),
        ]
        : [],
    },

  };
}


export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sanityProject = await getProjectBySlug(slug);
  const relatedProjects = await getRelatedProjects(slug);
const siteSettings = await getSiteSettings();

  if (!sanityProject) {
    notFound();
  }

  const project = {
    title: sanityProject.title,

    owner: sanityProject.clientName,

    location: sanityProject.location,

    category: sanityProject.category?.title ?? "General",

    area: sanityProject.area,

    status: sanityProject.status,

    completionDate: sanityProject.completionDate
      ? new Date(sanityProject.completionDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      : "",

    image: sanityProject.coverImage
      ? urlFor(sanityProject.coverImage).width(1600).url()
      : "",

    description: sanityProject.description,

    requirements: [],

    gallery:
      sanityProject.gallery?.map((img: any) =>
        urlFor(img).width(1200).url()
      ) ?? [],
  };

  const related = relatedProjects.map((item: any) => ({
    title: item.title,

    category: item.category?.title ?? "General",

    location: item.location,

    image: item.coverImage
      ? urlFor(item.coverImage).width(800).url()
      : "",

    slug: item.slug.current,
  }));

  return (

    <>



      <main className="relative overflow-hidden">
        <Navbar settings={siteSettings} />

        <Hero project={project} />

        <Gallery project={project} />


        <Features
          projects={related}

        />

        <CTA />

        <Footer settings={siteSettings} />
      </main>

    </>
  );
}


