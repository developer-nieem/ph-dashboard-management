"use client";
import React from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import type { FormProps } from "antd";
import useTaskStore from "@/zustand/task-store";
interface FieldType {
  id: string;
  title: string;
  description: string;
  status: string;
  developer: string[];
  date: string;
}

interface AddTaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Option } = Select;
const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, setOpen }) => {
  const setTaskData = useTaskStore((state) => state.addTask);
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const id = Math.round(Math.random() * 10000).toString();

    const data = {
      id: id,
      title: values.title,
      description: values.description,
      status: values.status,
      developer: values.developer,
      date: values.date,
    };
    setTaskData(data);
    form.resetFields();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        title="Please add Your Task"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Form
          variant="filled"
          form={form}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please Title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please Description!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item<FieldType>
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please Status!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name="developer"
            label="Developer"
            rules={[
              {
                required: true,
                message: "Please select your favorite Developer!",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Please select favorite Developer"
            >
              <Option value="John Doe">John Doe</Option>
              <Option value="Jane Smith">Jane Smith</Option>
              <Option value="Alice Johnson">Alice Johnson</Option>
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            label="Dateline"
            name="date"
            rules={[{ required: true, message: "Please Dateline!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
