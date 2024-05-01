"use client";
import useAuthStore from "@/zustand/auth-store";
import { useRouter } from "next/navigation";
import React from "react";

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  //   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isAuthenticated = true;

  if (!isAuthenticated) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;
