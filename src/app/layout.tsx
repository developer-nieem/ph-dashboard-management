import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReactQueryProvider from "@/components/react-query/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DashBoard for Project Management",
  description: "PH Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          {" "}
          <ReactQueryProvider>{children}</ReactQueryProvider>{" "}
        </AntdRegistry>{" "}
      </body>
    </html>
  );
}
