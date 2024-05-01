"use client";
import React, { useState } from "react";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

const { Meta } = Card;

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState<number | undefined>(undefined);

  const viewProject = (id: number) => {
    setOpen(true);
    setProjectId(id);
  };
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Image alt="project" src={project.image} width={400} height={400} />
      }
      actions={[
        <EyeOutlined key="view" onClick={() => viewProject(project.id)} />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <ProjectModal open={open} setOpen={setOpen} projectId={projectId} />
      <Meta title={project.title} description={project.description} />
    </Card>
  );
};

export default ProjectCard;
