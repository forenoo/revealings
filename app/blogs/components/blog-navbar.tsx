"use client";

import { navLinksBlogIndonesia } from "@/lib/constants";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import NavLink from "@/components/elements/nav-links";
import SwitchLanguage from "@/components/elements/switch-language";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { useLenis } from "@studio-freight/react-lenis";
import { useLanguageStore } from "@/store/language";

export default function BlogNavbar({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguageStore();

  const lenis = useLenis();
  // const navlink = language === "id" ? navLinksIndonesia : navLinksEnglish;

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (!lang) {
      localStorage.setItem("language", "id");
    } else {
      setLanguage(lang);
    }
  }, [setLanguage]);

  return (
    <div className={cn("fixed left-0 right-0 top-5 z-[998]")}>
      <nav
        className={cn(
          "mx-auto flex w-fit items-center justify-between gap-[30px] rounded-full bg-slate-100/80 px-[20px] py-[8px] text-primary shadow-lg backdrop-blur-md transition-all duration-500",
          className,
        )}
      >
        <Link href="/" onClick={() => lenis?.scrollTo(0)}>
          <Button
            variant="ghost"
            className={cn(
              "text-[20px] font-bold text-primary hover:bg-transparent hover:text-primary",
            )}
          >
            Revealings
          </Button>
        </Link>
        <ul className="flex gap-4">
          {navLinksBlogIndonesia.map((link) => (
            <li key={link.id}>
              <NavLink
                href={link.href}
                className={cn("font-bold text-primary hover:text-primary")}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
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
          className={cn("bg-white text-primary hover:text-primary")}
          lang={language}
        />
      </nav>
    </div>
  );
}
