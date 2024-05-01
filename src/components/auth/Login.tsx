"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/auth-store";

type FieldType = {
  username?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => {
  const router = useRouter();
  const setAuthenticated = useAuthStore((state) => state.login);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (
      values.username?.toLowerCase() === "admin" &&
      values.password?.toLowerCase() === "admin"
    ) {
      Swal.fire("Successfully Logged in!");
      setAuthenticated();
      router.push("/dashboard");
    } else {
      Swal.fire("Please put correct username & Password");
    }
  };

  return (
    <div className=" bg-slate-900 text-white mx-auto h-[100vh]  flex items-center justify-center">
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          style={{ width: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <label className="text-white text-sm pb-2">Username</label>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <label className="text-white text-sm pb-2">Password</label>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
