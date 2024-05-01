"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useGetProjects } from "@/api/projects.hook";

const ProjectOverview = () => {
  const { data: projects, isLoading, error } = useGetProjects();
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    if (projects?.data) {
      setAllProjects(projects.data);
    }
  }, [projects?.data]);

  // Handler to delete a project
  const handleDelete = (id: number) => {
    const filteredProjects = allProjects.filter(
      (project: IProject) => project.id !== id
    );
    setAllProjects(filteredProjects);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {allProjects?.map((item: IProject) => (
        <ProjectCard key={item.id} project={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ProjectOverview;
