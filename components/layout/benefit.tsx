import React from "react";
import SectionTitle from "../elements/section-title";
import { kamiSediakanIndonesia } from "@/lib/constants";
import BenefitCard from "../elements/benefit-card";

export default function Benefit() {
  return (
    <section className="sectionPadding maxContainer maxPadding relative flex flex-col gap-[20px] md:gap-[40px]">
      <SectionTitle description="" title="Apa Yang Kami Sediakan?" />
      <div className="grid grid-cols-2 gap-y-5 lg:grid-cols-4 lg:gap-y-0">
        {kamiSediakanIndonesia.map((item, index) => (
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
