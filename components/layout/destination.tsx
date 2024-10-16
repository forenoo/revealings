import React from "react";
import SectionTitle from "../elements/section-title";
import Image from "next/image";

export default function Destination() {
  return (
    <section className="sectionPadding">
      <div className="maxPadding flex h-[550px] flex-col items-center gap-[40px] bg-primary py-[80px]">
        <SectionTitle
          description="Temukan keindahan alam di bawah laut Raja Ampat dan kekayaan ekosistem laut yang sangat menakjubkan"
          title="Destinasi Terpopuler"
          titleClassName="text-white"
          descriptionClassName="text-white/70 max-w-[700px]"
        />
        <div className="group relative cursor-pointer">
          <Image
            src="/image-2.jpg"
            alt="destination"
            width={1000}
            height={600}
            className="aspect-video rounded-[20px]"
          />
          <Image
            src={"/playvideo.svg"}
            alt="playvideo"
            width={100}
            height={100}
            className="absolute inset-0 m-auto transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
