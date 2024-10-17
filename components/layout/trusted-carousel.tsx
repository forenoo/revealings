import React from "react";
import MarqueeLogo from "../elements/marquee-logo";
import { useLanguageStore } from "@/store/language";
import { trustedEnglish, trustedIndonesia } from "@/lib/constants";

export default function TrustedCarousel() {
  const { language } = useLanguageStore();
  const title = language === "id" ? trustedIndonesia : trustedEnglish;

  return (
    <section className="sectionPadding">
      <div className="maxPadding flex w-full flex-col gap-[20px] bg-[#f5f5f5] py-[20px]">
        <h1 className="text-center text-[20px] font-bold text-primary md:text-[28px]">
          {title.title}
        </h1>
        <MarqueeLogo />
      </div>
    </section>
  );
}
