"use client";

import React from "react";
import { Modal } from "antd";
const ProjectModal = ({ open, setOpen, projectId }) => {
  console.log(projectId);

  return (
    <Modal
      title="Modal 1000px width"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default ProjectModal;
