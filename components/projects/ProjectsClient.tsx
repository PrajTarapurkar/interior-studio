"use client";

import { useState } from "react";

import Filter from "@/components/projects/Filter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsClient({
  projects,
}: {
  projects: any[];
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.type === activeFilter
        );

  return (
    <>
      <Filter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProjectsGrid filteredProjects={filteredProjects} />
    </>
  );
}