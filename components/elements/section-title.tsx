import { cn } from "@/lib/utils";
import React from "react";

export default function SectionTitle({
  className,
  titleClassName,
  descriptionClassName,
  title,
  description,
}: {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-[10px] text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "text-[32px] font-bold leading-[40px] text-primary md:text-[42px] md:leading-[50px] lg:text-[64px] lg:leading-[80px]",

          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-[14px] font-medium text-[#2B1D1D]/70 md:text-[16px] lg:text-[20px]",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}
