import { cn } from "@/lib/utils";
import CustomButton from "../ui/customButton";
import { ArrowDown } from "lucide-react";
import { useLanguageStore } from "@/store/language";
import { heroEnglish, heroIndonesia } from "@/lib/constants";

export default function Hero({ className }: { className?: string }) {
  const { language } = useLanguageStore();

  return (
    <section
      className={cn("relative max-h-[960px] min-h-screen w-full", className)}
      id="home"
    >
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      />
      <div className="inset absolute h-full w-full bg-primary/50"></div>
      <div className="maxPadding absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[20px] text-white md:gap-[30px]">
        <div className="flex w-full flex-col items-center justify-center gap-[10px]">
          <h1 className="max-w-[900px] text-center text-[28px] font-medium leading-[40px] md:text-[48px] md:leading-[60px]">
            {language === "id" ? heroIndonesia.title : heroEnglish.title}
          </h1>
          <p className="max-w-[700px] text-center text-[16px] font-normal xl:text-[20px]">
            {language === "id"
              ? heroIndonesia.description
              : heroEnglish.description}
          </p>
        </div>
        <CustomButton
          href="#about"
          icon={<ArrowDown />}
          variant="light"
          className="xl:text"
        >
          {language === "id" ? "Jelajahi Sekarang" : "Explore Now"}
        </CustomButton>
      </div>
    </section>
  );
}
