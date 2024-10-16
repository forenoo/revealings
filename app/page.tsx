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
      <main className="maxContainer maxPadding">
        <About />
        <Purpose />
        <Benefit />
        <Destination />
        <TrustedCarousel />
        <Rating />
        <Testimoni />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
