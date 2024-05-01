"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AuthProvider = ({ children }) => {
  const router = useRouter();

  const isAuthenticated = false;

  if (!isAuthenticated) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;
