import React from "react";
import CustomButton from "../ui/customButton";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="relative">
      <div className="relative flex flex-col items-center justify-between rounded-[20px] bg-[url('/image-cta.png')] bg-cover bg-no-repeat p-[20px] lg:flex-row lg:p-[60px]">
        <div className="absolute inset-0 rounded-[20px] bg-primary opacity-50" />

        <div className="relative flex flex-col gap-[10px] text-white">
          <h1 className="text-[28px] font-semibold sm:text-[36px] lg:text-[48px]">
            Siap untuk Berpetualang?
          </h1>
          <p className="text-[14px] font-medium sm:text-[16px] lg:text-[18px]">
            Jelajahi keindahan Raja Ampat dan temukan pengalaman tak terlupakan.
            <br />
            Mulai petualanganmu sekarang!
          </p>
        </div>

        <CustomButton
          variant="light"
          icon={<ArrowUpRight />}
          className="relative z-10 mt-4 lg:mt-0"
        >
          Mulai Sekarang
        </CustomButton>
      </div>
    </div>
  );
}
