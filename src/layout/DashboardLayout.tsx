"use client";
import React from "react";
import { ProjectOutlined, ContainerTwoTone } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Content, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <ProjectOutlined />,
    label: <Link href="/dashboard">Project Overview</Link>,
  },
  {
    key: "2",
    icon: <ContainerTwoTone />,
    label: <Link href="/dashboard/task-management">Task Management</Link>,
  },
];

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" style={{ height: "100vh" }}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
