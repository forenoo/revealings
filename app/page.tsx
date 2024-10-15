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
} from "@/components/section";

export default function Home() {
  return (
    <>
      <Navbar />
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
