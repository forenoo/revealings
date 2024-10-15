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
        className="h-full w-full rounded-[20px]"
        width={400}
        height={300}
      />
      <div className="absolute inset-0 hidden flex-col items-center justify-center rounded-[20px] bg-black/50 p-[20px] text-white transition-all group-hover:flex">
        <h3 className="text-[24px] font-bold">{hoverTitle}</h3>
        <p className="text-[14px]">{hoverDescription}</p>
      </div>
    </div>
  );
}
