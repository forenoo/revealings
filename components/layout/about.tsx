import SectionTitle from "@/components/elements/section-title";
import {
  aboutHeaderEnglish,
  aboutHeaderIndonesia,
  aboutImageCardEnglish,
  aboutImageCardIndonesia,
} from "@/lib/constants";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/store/language";

export default function About() {
  const { language } = useLanguageStore();

  return (
    <section
      id="about"
      className="sectionPadding maxContainer maxPadding relative flex flex-col gap-[20px] md:gap-[40px]"
    >
      <SectionTitle
        title={
          language === "id"
            ? aboutHeaderIndonesia.title
            : aboutHeaderEnglish.title
        }
        description={
          language === "id"
            ? aboutHeaderIndonesia.description
            : aboutHeaderEnglish.description
        }
        descriptionClassName="max-w-[720px]"
      />
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3 md:gap-[20px]">
        {language === "id"
          ? aboutImageCardIndonesia.map((item, index) => (
              <DirectionAwareHover
                imageUrl={item.image}
                className={cn("h-full", index === 1 ? "row-span-2" : "")}
                key={item.id}
              >
                <h3 className="relative z-10 text-[18px] font-bold md:text-[24px]">
                  {item.title}
                </h3>
                <p className="relative z-10 text-[14px] text-[#E0E0E0]">
                  {item.description}
                </p>
              </DirectionAwareHover>
            ))
          : aboutImageCardEnglish.map((item, index) => (
              <DirectionAwareHover
                imageUrl={item.image}
                className={cn("h-full", index === 1 ? "row-span-2" : "")}
                key={item.id}
              >
                <h3 className="relative z-10 text-[18px] font-bold md:text-[24px]">
                  {item.title}
                </h3>
                <p className="relative z-10 text-[14px] text-[#E0E0E0]">
                  {item.description}
                </p>
              </DirectionAwareHover>
            ))}
      </div>
    </section>
  );
}
