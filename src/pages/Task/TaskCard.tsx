"use client";
import React, { useState } from "react";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import TaskDetailsModal from "./TaskDetailsModal";
const { Meta } = Card;

interface Task {
  id: string;
  title: string;
  description: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState<string | undefined>(undefined);

  const viewTask = (id: string) => {
    setOpen(true);
    setProjectId(id);
  };

  return (
    <div>
      <Card
        style={{ width: 300 }}
        actions={[
          <EyeOutlined key="view" onClick={() => viewTask(task.id)} />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <TaskDetailsModal open={open} setOpen={setOpen} projectId={projectId} />
        <Meta title={task.title} description={task.description} />
      </Card>
    </div>
  );
};

export default TaskCard;
