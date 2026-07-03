"use client";


import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/projects/Hero";
import Filter from "@/components/projects/Filter";
import { projects } from "@/lib/projects";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {

  

const [activeFilter, setActiveFilter] = useState("All");

const filteredProjects =
  activeFilter === "All"
    ? projects
    : projects.filter((project) => project.type === activeFilter);



  return (
<main className="bg-[#000000] min-h-screen text-white overflow-x-hidden">      
<Navbar />


      <Hero />


<Filter
  activeFilter={activeFilter}
  setActiveFilter={setActiveFilter}
/>

      <ProjectsGrid filteredProjects={filteredProjects} />

<Footer />

    </main>
  );
}