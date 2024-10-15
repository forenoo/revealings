import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CustomButtonProps {
  className?: string;
  children: React.ReactNode;
  variant: "dark" | "light";
  icon: React.ReactNode;
  href?: string;
}

export default function CustomButton({
  className,
  variant,
  children,
  icon,
  href,
}: CustomButtonProps) {
  return (
    <Link href={href || "/"}>
      <Button
        className={cn(
          "rounded-full group h-auto w-auto transition-all xl:text-[16px] text-[14px] pl-[26px] flex gap-[20px] pr-[6px] py-[6px]",
          className,
          {
            "text-primary bg-white": variant === "light",
            "text-white bg-primary": variant === "dark",
          }
        )}
      >
        <span className="font-medium">{children}</span>
        <div
          className={cn(
            "bg-accent group-hover:scale-105 transition-all lg:w-[42px] lg:h-[42px] w-[32px] h-[32px] rounded-full p-[8px] flex items-center justify-center",
            {
              "text-white": variant === "light",
              "text-primary": variant === "dark",
            }
          )}
        >
          {icon}
        </div>
      </Button>
    </Link>
  );
}
