"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useGetProjects } from "@/api/projects.hook";

const ProjectOverview = () => {
  const { data: projects, isLoading, error } = useGetProjects();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(projects?.data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects?.data.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
};

export default ProjectOverview;
