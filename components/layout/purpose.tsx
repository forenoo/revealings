import React from "react";
import SectionTitle from "../elements/section-title";
import Image from "next/image";
import CustomButton from "../ui/customButton";
import { ArrowUpRight } from "lucide-react";
import { aboutUsIndonesia, aboutUsEnglish } from "@/lib/constants";
import { useLanguageStore } from "@/store/language";
import PurposeImage from "../elements/purpose-image";

export default function Purpose() {
  const { language } = useLanguageStore();

  return (
    <div className="relative">
      <Image
        src={"/grid-pattern.svg"}
        alt="grid-pattern"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        width={600}
        height={300}
      />
      <section className="sectionPadding maxContainer maxPadding relative grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[40px]">
        <div className="my-auto flex flex-col gap-[20px] md:gap-[30px]">
          <SectionTitle
            className="items-start text-left"
            title={
              language === "id" ? aboutUsIndonesia.title : aboutUsEnglish.title
            }
            additionalImage="/purpose-image.jpg"
            titleClassName="text-left mx-auto md:mx-0 max-w-[500px] text-center md:text-left"
            description={
              language === "id"
                ? aboutUsIndonesia.description
                : aboutUsEnglish.description
            }
            descriptionClassName="text-justify"
          />
          <CustomButton href="/about" variant="dark" icon={<ArrowUpRight />}>
            {language === "id" ? "Selengkapnya" : "Learn More"}
          </CustomButton>
        </div>
        <PurposeImage />
      </section>
    </div>
  );
}
