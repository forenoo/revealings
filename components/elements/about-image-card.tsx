import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function AboutImageCard({
  className,
  image,
  hoverTitle,
  hoverDescription,
}: {
  className?: string;
  image: string;
  hoverTitle: string;
  hoverDescription: string;
}) {
  return (
    <div
      className={cn("group relative rounded-[20px] transition-all", className)}
    >
      <Image
        src={image}
        alt={hoverTitle}
        className="h-[250px] w-full rounded-[20px] object-cover md:h-full"
        width={400}
        height={300}
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end rounded-[20px] p-[20px] text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[20px] bg-black/50"></div>
        <h3 className="relative z-10 text-[18px] font-bold md:text-[24px]">
          {hoverTitle}
        </h3>
        <p className="relative z-10 text-[14px] text-[#E0E0E0]">
          {hoverDescription}
        </p>
      </div>
    </div>
  );
}
