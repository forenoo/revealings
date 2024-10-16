"use client";

import { navLinksEnglish, navLinksIndonesia } from "@/lib/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import NavLink from "../elements/nav-links";
import SwitchLanguage from "../elements/switch-language";
import Link from "next/link";
import { useNavbarStore } from "@/store/navbar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import { useLenis } from "@studio-freight/react-lenis";

export default function Navbar({ className }: { className?: string }) {
  const { isScrolled, setIsScrolled } = useNavbarStore();
  const lang = localStorage.getItem("language");
  if (!lang) {
    localStorage.setItem("language", "id");
  } else {
    localStorage.getItem("language");
  }

  const lenis = useLenis();

  const [language, setLanguage] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);

  const navlink = language === "id" ? navLinksIndonesia : navLinksEnglish;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  return (
    <>
      {/* Tablet To Desktop Navbar */}
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-[99] hidden items-center justify-between py-[16px] text-white transition-all duration-500 md:flex",
          className,
          {
            "top-5 !max-w-[745px] rounded-full bg-white/90 py-[8px] pl-[20px] pr-[10px] text-primary shadow-md backdrop-blur-sm":
              isScrolled,
            maxPadding: !isScrolled,
          },
        )}
      >
        <Button
          variant="ghost"
          onClick={() => lenis?.scrollTo(0, { immediate: true, force: true })}
          className={cn("text-[20px] font-bold text-white", {
            "text-primary": isScrolled,
          })}
        >
          Revealings
        </Button>
        <ul className="flex gap-4">
          {navlink.map((link) => (
            <li key={link.id}>
              <NavLink
                href={link.href}
                className={cn({
                  "hover:text-white": !isScrolled,
                  "text-primary/70 hover:text-primary": isScrolled,
                })}
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
          className={cn({
            "bg-white text-primary hover:text-primary": isScrolled,
          })}
          language={language || undefined}
        />
      </nav>
      {/* Mobile Navbar */}
      <nav
        className={cn(
          "maxPadding fixed left-0 right-0 top-0 z-[99] flex items-center justify-between py-[16px] text-white transition-all duration-500 md:hidden",
          className,
          {
            "bg-white/90 py-[8px] text-primary shadow-md": isScrolled,
          },
        )}
      >
        <Link
          href="/"
          className={cn("text-[20px] font-bold text-white", {
            "text-primary": isScrolled,
          })}
        >
          Revealings
        </Link>
        <div className="flex items-center gap-2">
          <SwitchLanguage
            className={cn({ "hover:text-primary": isScrolled })}
            onClick={() => {
              setLanguage(language === "id" ? "en" : "id");
              localStorage.setItem("language", language === "id" ? "en" : "id");
            }}
            language={language || undefined}
          />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                className="p-2 text-white hover:bg-transparent hover:text-white"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu
                  size={32}
                  className={cn({ "text-primary": isScrolled })}
                />
              </Button>
            </SheetTrigger>
            <SheetContent className="z-[999] w-[300px] bg-white">
              <ul className="flex flex-col divide-y divide-primary/10">
                {navlink.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      href={link.href}
                      className={cn("my-2 text-primary/70 hover:text-primary")}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
