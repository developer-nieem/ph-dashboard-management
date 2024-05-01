import AuthProvider from "@/components/auth/AuthProvider";
import DashboardLayout from "@/layout/DashboardLayout";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AuthProvider>
        {" "}
        <DashboardLayout>{children}</DashboardLayout>{" "}
      </AuthProvider>
    </>
  );
};

export default layout;
