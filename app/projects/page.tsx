import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import Hero from "@/components/projects/Hero";
import ProjectsClient from "@/components/projects/ProjectsClient";

import { getProjects } from "@/lib/getProjects";

import { urlFor } from "@/sanity/lib/image";

export default async function ProjectsPage() {
  const sanityProjects = await getProjects();

  const projects = sanityProjects.map((project: any) => ({
    title: project.title,
    category: project.category?.title ?? "General",
    type: project.category?.title ?? "General",

    image: project.coverImage
  ? urlFor(project.coverImage).width(800).height(600).url()
  : "/images/project-placeholder.jpg",

    href: `/projects/${project.slug.current}`,

    description: project.shortDescription ?? "",
  }));

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <Hero />

      <ProjectsClient projects={projects} />

      <Footer />
    </main>
  );
}