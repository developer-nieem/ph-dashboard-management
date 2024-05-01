"use client";
import React from "react";
import TaskCard from "./TaskCard";
import useTaskStore from "@/zustand/task-store";

const ViewTask = () => {
  const { taskData } = useTaskStore();
  console.log(taskData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-6">
      <div>
        <h2 className="text-xl font-semibold text-center">All Task</h2>
        {taskData?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-center">To do</h2>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-center">In Progress</h2>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-center">Complete</h2>
      </div>
    </div>
  );
};

export default ViewTask;
