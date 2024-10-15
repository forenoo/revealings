import React from "react";
import SectionTitle from "@/components/elements/section-title";
import AboutImageCard from "@/components/elements/about-image-card";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col gap-[40px] pt-[80px]">
      <SectionTitle
        title="Surga di Ujung Timur Indonesia"
        description="Temukan ratusan spesies ikan dan terumbu karang, menjadikan Raja Ampat sebagai destinasi impian bagi penyelam dan pecinta alam."
        descriptionClassName="max-w-[720px]"
      />
      <div className="grid grid-cols-3 gap-[20px]">
        <AboutImageCard />
        <AboutImageCard className="row-span-2" />
        <AboutImageCard />
        <AboutImageCard />
        <AboutImageCard />
      </div>
    </section>
  );
}
