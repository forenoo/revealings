import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../elements/section-title";
import { useLanguageStore } from "@/store/language";
import { CTAIndonesia, CTAEnglish } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";

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

        <Link href="https://maps.app.goo.gl/PXYrXQWDJFpMWe1M8" target="_blank">
          <Button
            className={
              "group relative z-10 mt-4 flex h-auto w-auto gap-[20px] rounded-full bg-white py-[6px] pl-[26px] pr-[6px] text-[14px] text-primary transition-all lg:mt-0 xl:text-[16px]"
            }
          >
            <span className="font-medium">
              {language === "id" ? "Mulai Sekarang" : "Start Now"}
            </span>
            <div
              className={
                "flex h-[32px] w-[32px] items-center justify-center rounded-full bg-accent p-[8px] text-white transition-all group-hover:scale-105 lg:h-[36px] lg:w-[36px]"
              }
            >
              <ArrowUpRight />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
