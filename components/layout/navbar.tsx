"use client";

import { navLinksIndonesia } from "@/lib/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import NavLink from "../elements/nav-links";
import SwitchLanguage from "../elements/switch-language";
import Link from "next/link";
import { useNavbarStore } from "@/store/navbar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ className }: { className?: string }) {
  const { isScrolled, setIsScrolled } = useNavbarStore();
  const lang = localStorage.getItem("language");
  if (!lang) {
    localStorage.setItem("language", "id");
  } else {
    localStorage.getItem("language");
  }

  const [language, setLanguage] = useState(lang);

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
          "hidden md:flex justify-between transition-all duration-500 items-center fixed py-[16px] top-0 left-0 right-0 z-[99] text-white",
          className,
          {
            "bg-white/80 backdrop-blur-sm pr-[10px] pl-[20px] py-[8px] text-primary !max-w-[745px] rounded-full top-5":
              isScrolled,
            maxPadding: !isScrolled,
          }
        )}
      >
        <Link
          href="/"
          className={cn("font-bold text-white text-[20px]", {
            "text-primary": isScrolled,
          })}
        >
          Revealings
        </Link>
        <ul className="flex gap-4">
          {navLinksIndonesia.map((link) => (
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
          }}
          className={cn({
            "text-primary hover:text-primary bg-white": isScrolled,
          })}
          language={language || undefined}
        />
      </nav>
      {/* Mobile Navbar */}
      <nav
        className={cn(
          "flex md:hidden maxPadding justify-between transition-all duration-500 items-center fixed py-[16px] top-0 left-0 right-0 z-[99] text-white ",
          className,
          {
            "py-[8px] bg-white/90 text-primary": isScrolled,
          }
        )}
      >
        <Link
          href="/"
          className={cn("font-bold text-white text-[20px]", {
            "text-primary": isScrolled,
          })}
        >
          Revealings
        </Link>
        <div className="flex gap-2 items-center">
          <SwitchLanguage
            onClick={() => {
              setLanguage(language === "id" ? "en" : "id");
              localStorage.setItem("language", language === "id" ? "en" : "id");
            }}
            language={language || undefined}
          />
          <Button
            className="text-white p-2 hover:bg-transparent hover:text-white"
            variant="ghost"
          >
            <Menu size={32} />
          </Button>
        </div>
      </nav>
    </>
  );
}
