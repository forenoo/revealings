import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function SectionTitle({
  className,
  titleClassName,
  descriptionClassName,
  additionalImage,
  title,
  description,
}: {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  additionalImage?: string;
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
          "text-[28px] font-bold leading-[40px] text-primary md:text-[42px] md:leading-[50px] xl:text-[48px] xl:leading-[60px]",

          titleClassName,
        )}
      >
        {title}
      </h2>
      {additionalImage && (
        <Image
          src={additionalImage}
          alt="purpose-image"
          className="mx-auto flex rounded-[20px] md:hidden"
          width={600}
          height={300}
        />
      )}

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
