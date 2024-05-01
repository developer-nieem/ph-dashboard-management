"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import AddTaskModal from "./AddTaskModal";
import ViewTask from "./ViewTask";

const Task = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-center ">
        <Button type="primary" onClick={() => setOpen(true)}>
          Add Task
        </Button>
        <AddTaskModal open={open} setOpen={setOpen} />
      </div>

      <ViewTask />
    </div>
  );
};

export default Task;
