import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PurposeImage({ className }: { className?: string }) {
  return (
    <Image
      src={"/purpose-image.jpg"}
      alt="purpose-image"
      className={cn("hidden w-auto rounded-[20px] md:flex", className)}
      width={600}
      height={300}
    />
  );
}
