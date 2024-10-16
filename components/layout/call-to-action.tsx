import React from "react";
import CustomButton from "../ui/customButton";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="maxContainer maxPadding">
      <div className="relative rounded-[20px] bg-[url('/image-cta.png')] bg-cover bg-no-repeat p-[80px]">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[20px] bg-primary/50"></div>
        <div className="z-[99] flex items-center justify-between">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[48px] font-semibold text-white">
              Siap untuk Berpetualang?
            </h1>
            <p className="font-medium text-white/70">
              Jelajahi keindahan Raja Ampat dan temukan pengalaman tak
              terlupakan. <br />
              Mulai petualanganmu sekarang!
            </p>
          </div>
          <CustomButton variant="light" icon={<ArrowUpRight />}>
            Mulai Sekarang
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
