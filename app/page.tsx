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
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar className="maxContainer" />
      <Hero />
      <Image
        src="/grid-pattern.svg"
        alt="pattern"
        className="absolute left-0 top-[1400px] -z-[20] h-full w-full opacity-50"
        width={1000}
        height={1000}
      />
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
