import React from "react";
import SectionTitle from "../elements/section-title";
import { benefitIndonesia, benefitEnglish } from "@/lib/constants";
import BenefitCard from "../elements/benefit-card";
import { useLanguageStore } from "@/store/language";

export default function Benefit() {
  const { language } = useLanguageStore();
  const benefit = language === "id" ? benefitIndonesia : benefitEnglish;

  return (
    <section className="sectionPadding maxContainer maxPadding relative flex flex-col gap-[20px] md:gap-[40px]">
      <SectionTitle description="" title={benefit.title} />
      <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {benefit.benefit.map((item, index) => (
          <BenefitCard
            key={index}
            number={`0${index + 1}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
