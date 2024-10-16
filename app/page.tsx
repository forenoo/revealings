"use client";

import {
  Navbar,
  Hero,
  About,
  Purpose,
  Benefit,
  Destination,
  TrustedCarousel,
  Rating,
  Testimoni,
  CallToAction,
  Footer,
} from "@/components/layout";

export default function Home() {
  return (
    <>
      <Navbar className="maxContainer" />
      <Hero />
      <About />
      <Purpose />
      <Benefit />
      <Destination />
      <TrustedCarousel />
      <Rating />
      <Testimoni />
      <CallToAction />
      <Footer />
    </>
  );
}
