import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projectDetails";
import Hero from "@/components/project-details/Hero";
import Gallery from "@/components/project-details/Gallery";
import Features from "@/components/project-details/Features";
import CTA from "@/components/project-details/CTA";


export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
  notFound();
}

  return (
    
    <>
      <Navbar />

<main className="bg-black min-h-screen text-white overflow-x-hidden">
       

        <Hero project={project} />

        <Gallery project={project} />


<Features
  projects={projects}
  slug={slug}
/>

<CTA />

      </main>
      <Footer />
    </>
  );
}