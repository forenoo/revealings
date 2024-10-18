"use client";

import SwitchLanguage from "@/components/elements/switch-language";
import { useLanguageStore } from "@/store/language";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export default function Navbar() {
  const { language, setLanguage } = useLanguageStore();
  return (
    <nav className="maxPadding sticky left-0 top-0 z-[990] flex w-full justify-between border-b border-b-muted-foreground/20 bg-[#ffffff] py-4">
      <Link
        href="/"
        className="group flex items-center gap-2 text-[14px] font-medium text-primary/50 transition-all duration-300 hover:text-primary/100"
      >
        <ChevronLeft className="size-6" />
        <p className="text-[14px] font-medium text-primary/50 transition-all duration-300 group-hover:text-primary/100">
          {language === "id" ? "Kembali Ke Halaman Utama" : "Back To Home"}
        </p>
      </Link>
      <SwitchLanguage
        onClick={() => {
          setLanguage(language === "id" ? "en" : "id");
          localStorage.setItem("language", language === "id" ? "en" : "id");
          toast.success(
            language === "id"
              ? "Success changed to English"
              : "Berhasil berganti ke Bahasa Indonesia",
          );
        }}
        className="hover:text-primary/100"
        lang={language}
      />
    </nav>
  );
}
