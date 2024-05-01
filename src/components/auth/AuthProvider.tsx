"use client";
import useAuthStore from "@/zustand/auth-store";
import { useRouter } from "next/navigation";
import React from "react";

const AuthProvider = ({ children }) => {
  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;
