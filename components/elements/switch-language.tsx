"use client";

import React from "react";
import { Button } from "../ui/button";
import { CiGlobe } from "react-icons/ci";
import { cn } from "@/lib/utils";

export default function SwitchLanguage({
  className,
  language,
  onClick,
}: {
  className?: string;
  language?: string;
  onClick?: () => void;
}) {
  const lang = language || localStorage.getItem("language");
  return (
    <Button
      variant="ghost"
      className={cn(
        "flex items-center gap-3 bg-white/20 hover:bg-white/30 rounded-full w-fit hover:text-white h-fit p-2",
        className
      )}
      onClick={onClick}
    >
      <CiGlobe strokeWidth={1} size={22} />
      <p className="font-semibold text-[14px] uppercase">{lang}</p>
    </Button>
  );
}
