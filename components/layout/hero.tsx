import { cn } from "@/lib/utils";
import CustomButton from "../ui/customButton";
import { ArrowDown } from "lucide-react";

export default function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn("min-h-screen max-h-[960px] w-full relative", className)}
      id="home"
    >
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full absolute object-cover"
      />
      <div className="absolute h-full top-0 left-0 right-0 bottom-0 bg-primary/50"></div>
      <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col maxPadding justify-center items-center w-full gap-[30px]">
        <div className="flex w-full flex-col justify-center items-center gap-[10px]">
          <h1 className="text-[48px] xl:text-[64px] text-center leading-[60px] xl:leading-[80px] max-w-[970px] font-medium">
            Temukan Surga Tersembunyi di Raja Ampat. Petualangan dan Keindahan
            Alam yang Menyatu
          </h1>
          <p className="text-center text-[16px] xl:text-[20px] max-w-[800px] font-medium">
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
