"use client";

import React from "react";
import { Button } from "../ui/button";
import { CiGlobe } from "react-icons/ci";
import { cn } from "@/lib/utils";

export default function SwitchLanguage({
  className,
  onClick,
}: {
  className?: string;
  language?: string;
  onClick?: () => void;
}) {
  const lang = localStorage.getItem("language");

  return (
    <Button
      variant="ghost"
      className={cn(
        "flex h-fit w-fit items-center gap-3 rounded-full bg-white/20 p-2 hover:bg-white/30 hover:text-white",
        className,
      )}
      onClick={onClick}
    >
      <CiGlobe strokeWidth={1} size={22} />
      <p className="text-[14px] font-semibold uppercase">{lang}</p>
    </Button>
  );
}
