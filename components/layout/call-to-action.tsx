import React from "react";
import CustomButton from "../ui/customButton";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../elements/section-title";
import { useLanguageStore } from "@/store/language";
import { CTAIndonesia, CTAEnglish } from "@/lib/constants";

export default function CallToAction() {
  const { language } = useLanguageStore();
  const cta = language === "id" ? CTAIndonesia : CTAEnglish;

  return (
    <div className="sectionPadding maxContainer maxPadding relative">
      <div className="relative flex flex-col items-center justify-between rounded-[20px] bg-[url('/image-cta.png')] bg-cover bg-no-repeat p-[20px] lg:flex-row lg:p-[60px]">
        <div className="absolute inset-0 rounded-[20px] bg-primary opacity-50" />
        <SectionTitle
          title={cta.title}
          className="z-10 text-center lg:items-start lg:text-left"
          description={cta.description}
          titleClassName="text-white font-semibold mx-0 text-center lg:text-left"
          descriptionClassName="text-white font-medium max-w-[670px] text-center lg:text-left"
        />

        <CustomButton
          target="_blank"
          variant="light"
          href="https://maps.app.goo.gl/PXYrXQWDJFpMWe1M8"
          icon={<ArrowUpRight />}
          className="relative z-10 mt-4 lg:mt-0"
        >
          {language === "id" ? "Mulai Sekarang" : "Start Now"}
        </CustomButton>
      </div>
    </div>
  );
}
