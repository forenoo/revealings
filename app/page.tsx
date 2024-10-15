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
      <div className="relative">
        <main className="maxContainer maxPadding">
          <About />
          <Purpose />
          <Benefit />
          <Destination />
          <TrustedCarousel />
          <Rating />
          <Testimoni />
          <CallToAction />
          <Footer />
        </main>
        <div className="absolute -top-28 left-0 -z-[20] h-full w-full">
          <Image
            src="/grid-pattern.svg"
            alt="pattern"
            className="-mt-16 w-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
