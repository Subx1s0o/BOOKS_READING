import Header from "@/components/Header";
import HeaderAuth from "@/components/HeaderAuth";
import type { Metadata } from "next";
import React from "react";

import "./globals.css";
export const metadata: Metadata = {
  title: "Books Reading",
  description:
    "Books Reading will help you reach your reading goals faster and organize the reading process in a way that is simple and efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = false;
  return (
    <html lang="en">
      <body>
        {!user ? <Header /> : <HeaderAuth />}
        {children}
      </body>
    </html>
  );
}
