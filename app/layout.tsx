import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/layout";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Revealings - Explore Raja Ampat",
  description: "Revealings is a platform to explore Raja Ampat's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope antialiased`}>
        <NextTopLoader height={3} zIndex={1000} color="#936F5F" />
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster richColors />
      </body>
    </html>
  );
}
