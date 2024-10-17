import React from "react";
import BlogNavbar from "./components/blog-navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogNavbar className="maxContainer" />
      <main className="maxContainer maxPadding min-h-screen w-full">
        {children}
      </main>
      <footer>Footer</footer>
    </>
  );
}
