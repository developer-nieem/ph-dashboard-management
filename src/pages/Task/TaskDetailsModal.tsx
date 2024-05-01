import useTaskStore from "@/zustand/task-store";
import { Modal } from "antd";
import React from "react";

interface TaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectId: string | undefined;
}

const TaskDetailsModal: React.FC<TaskModalProps> = ({
  open,
  setOpen,
  projectId,
}) => {
  const { taskData } = useTaskStore();

  const task = projectId ? taskData.find((p) => p.id === projectId) : null;

  const dateString = new Date(task?.date).toLocaleDateString();
  console.log("task", dateString);
  return (
    <div>
      <Modal
        title="Task Details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div className="space-y-2">
          <h1 className="text-xl">
            <span className="font-bold">Title:</span> {task?.title}
          </h1>
          <p>
            <span className="font-bold">description:</span> {task?.description}
          </p>

          <div>
            <div className="flex gap-2">
              <span className="font-bold">Assigned Developer:</span>{" "}
              {task?.developer.map((dv, index) => (
                <p key={index}> {dv}, </p>
              ))}
            </div>
            <div>
              {" "}
              <span className="font-bold">Task Status:</span> {task?.status}
            </div>
            <div>
              {" "}
              <span className="font-bold">Task Dateline:</span> {dateString}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskDetailsModal;
