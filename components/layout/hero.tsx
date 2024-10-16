import { cn } from "@/lib/utils";
import CustomButton from "../ui/customButton";
import { ArrowDown } from "lucide-react";

export default function Hero({ className }: { className?: string }) {
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
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full bg-primary/50"></div>
      <div className="maxPadding absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[20px] text-white md:gap-[30px]">
        <div className="flex w-full flex-col items-center justify-center gap-[10px]">
          <h1 className="max-w-[970px] text-center text-[28px] font-medium leading-[40px] md:text-[48px] md:leading-[60px] xl:text-[64px] xl:leading-[80px]">
            Temukan Surga Tersembunyi di Raja Ampat. Petualangan dan Keindahan
            Alam yang Menyatu
          </h1>
          <p className="max-w-[800px] text-center text-[16px] font-normal md:font-medium xl:text-[20px]">
            Di sini, Anda bisa menemukan ratusan spesies ikan dan terumbu
            karang, menjadikan Raja Ampat sebagai destinasi impian bagi pecinta
            alam.
          </p>
        </div>
        <CustomButton
          href="#about"
          icon={<ArrowDown />}
          variant="light"
          className="xl:text"
        >
          Jelajahi Sekarang
        </CustomButton>
      </div>
    </section>
  );
}
