import React from "react";
import CustomButton from "../ui/customButton";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return <div className="bg-[url('/image-cta.png')] flex bg-cover bg-no-repeat items-center p-[80px] justify-between rounded-[20px]">
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-semibold text-[#ffffff] text-[48px]">Siap untuk Berpetualang?</h1>
      <p className="text-[#ffffff] font-medium">Jelajahi keindahan Raja Ampat dan temukan pengalaman tak terlupakan. <br />
        Mulai petualanganmu sekarang!
      </p>
    </div>
    <CustomButton variant="light" icon={<ArrowUpRight />}>Mulai Sekarang</CustomButton>
  </div>;
}
