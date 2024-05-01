"use client";
import React from "react";
import { Modal } from "antd";
import { useGetProjects } from "@/api/projects.hook";

interface ProjectModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectId: number | undefined;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  setOpen,
  projectId,
}) => {
  const { data: projects, isLoading, error } = useGetProjects();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const project = projectId
    ? projects?.data.find((p: IProject) => p.id === projectId)
    : null;

  console.log(project);

  return (
    <Modal
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
    >
      {project ? (
        <>
          <h2 className="text-xl font-medium">Title: {project.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div>
              <h3 className="text-xl font-bold my-4">Tasks:</h3>

              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Task Title
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {project.tasks.map((task: ITask) => (
                    <tr key={task.id}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-white bg-blue-500">
                          {task.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-white">
                        {task.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-xl font-bold my-4">Team Members:</h3>

              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Member role
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Member Name
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {project.members.map((member: ITeam) => (
                    <tr key={member.id}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-white bg-blue-500">
                          {member.role}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-800 dark:text-white">
                        {member.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p>No project found with the specified ID</p>
      )}
    </Modal>
  );
};

export default ProjectModal;
