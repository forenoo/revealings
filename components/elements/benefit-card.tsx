import React from "react";

interface BenefitCardProps {
  number: string;
  title: string;
  description: string;
}

export default function BenefitCard({
  number,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="flex flex-col gap-[20px] border-x border-accent/10 px-[25px] text-primary">
      <header className="space-y-1">
        <span className="text-[16px] font-bold text-accent md:text-[20px]">
          {number}
        </span>
        <h3 className="text-[20px] font-bold leading-[120%] md:text-[24px]">
          {title}
        </h3>
      </header>
      <p className="text-justify text-[16px] font-medium text-[#2B1D1D]/70">
        {description}
      </p>
    </div>
  );
}
