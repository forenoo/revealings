import React from "react";
import MarqueeLogo from "../elements/marquee-logo";

export default function TrustedCarousel() {
  return (
    <section className="maxPadding mt-[330px] flex w-full flex-col gap-[20px] bg-[#f5f5f5] py-[20px]">
      <h1 className="text-center text-[28px] font-bold text-primary">
        Dipercaya Berbagai Penyedia Layanan Pariwisata
      </h1>
      <MarqueeLogo />
    </section>
  );
}
