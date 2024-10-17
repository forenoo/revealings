import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { ratingEnglish, ratingIndonesia } from "@/lib/constants";
import { useLanguageStore } from "@/store/language";

export default function Testimoni() {
  const { language } = useLanguageStore();
  const testimoni =
    language === "id" ? ratingIndonesia.reviews : ratingEnglish.reviews;

  return (
    <section className="maxPadding sectionPadding maxContainer flex flex-col gap-[20px] md:gap-[40px]">
      <p className="text-justify text-[16px] font-medium leading-[140%] text-primary md:text-[24px] lg:text-[28px]">
        {testimoni.comment}
      </p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-[36px] w-[36px] md:h-[46px] md:w-[46px]">
            <AvatarImage
              className="object-cover"
              src="/user-review-profile.jpg "
            />
            <AvatarFallback>USER</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-primary md:text-[20px]">
              {testimoni.name}
            </span>
            <span className="text-[12px] font-medium text-[#8991A3] md:text-[14px]">
              {testimoni.from}
            </span>
          </div>
        </div>
        <Image
          src={"/tripadvisor.svg"}
          alt="tripadvisor"
          width={120}
          height={100}
          className="w-[80px] md:w-[120px]"
        />
      </div>
    </section>
  );
}
