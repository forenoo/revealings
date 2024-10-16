import React from "react";
import CustomButton from "../ui/customButton";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return <div className="relative">
    <div className="bg-[url('/image-cta.png')] bg-cover bg-no-repeat flex flex-col lg:flex-row items-center justify-between p-[20px] lg:p-[60px] rounded-[20px] relative">

      <div className="absolute inset-0 bg-primary opacity-50 rounded-[20px]" />

      <div className="relative flex flex-col gap-[10px] text-white">
        <h1 className="font-semibold text-[28px] sm:text-[36px] lg:text-[48px]">
          Siap untuk Berpetualang?
        </h1>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium">
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
    ;
}
