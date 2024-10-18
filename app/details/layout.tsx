import { Footer } from "@/components/layout";
import React from "react";

export default function DetailPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="scroll-m-0">{children}</div>
      <Footer homePage={false} />
    </>
  );
}
