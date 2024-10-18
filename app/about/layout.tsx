import { Footer } from "@/components/layout";
import React from "react";
import Navbar from "./Navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer homePage={false} />
    </>
  );
}
