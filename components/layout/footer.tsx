"use client";

import {
  footerIndonesia,
  footerEnglish,
  footerNotHomePageIndonesia,
  footerNotHomePageEnglish,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";
import { useLanguageStore } from "@/store/language";

export default function Footer({ homePage }: { homePage: boolean }) {
  const { language } = useLanguageStore();

  const footerNotHomePage =
    language === "id" ? footerNotHomePageIndonesia : footerNotHomePageEnglish;
  const footerHomePage = language === "id" ? footerIndonesia : footerEnglish;

  const footer = homePage ? footerHomePage : footerNotHomePage;

  const lenis = useLenis();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      lenis?.scrollTo(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="sectionPadding">
      <div className="border-t border-primary/20">
        <div className="maxContainer maxPadding flex flex-col justify-between gap-y-[40px] py-[40px] md:py-[60px] lg:flex-row">
          <div className="space-y-3 font-medium">
            <Link
              href="/"
              className={cn(
                "text-[16px] font-bold text-primary md:text-[20px] lg:text-[24px]",
              )}
            >
              {footer.title}
            </Link>
            <p className="max-w-[400px] text-[14px] text-primary/50 md:text-[18px]">
              {footer.description}
            </p>
            <p className="text-[14px] text-primary/50 md:text-[18px]">
              {footer.copyright}
            </p>
          </div>
          <div className="grid grid-cols-3 justify-between gap-[10px] lg:gap-[80px]">
            <div className="flex flex-col gap-[10px] md:gap-[20px]">
              <h6 className="text-[16px] font-bold text-primary md:text-[20px]">
                {footer.navigation.title}
              </h6>
              <ul className="flex flex-col gap-[10px]">
                {footer.navigation.links.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={""}
                      onClick={(e) => handleClick(e, item.href)}
                      className="text-[14px] font-medium text-primary/50 transition-all duration-300 hover:text-primary/100 sm:text-[16px] lg:text-[18px]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[20px]">
              <h6 className="text-[16px] font-bold text-primary md:text-[20px]">
                {footer.license.title}
              </h6>
              <ul className="flex flex-col gap-[10px]">
                {footer.license.linksLicense.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-[14px] font-medium text-primary/50 transition-all duration-300 hover:text-primary/100 sm:text-[16px] lg:text-[18px]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[20px]">
              <h6 className="text-[16px] font-bold text-primary md:text-[20px]">
                {footer.social.title}
              </h6>
              <ul className="flex flex-col gap-[10px]">
                {footer.social.links.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      target="_blank"
                      className="text-[14px] font-medium text-primary/50 transition-all duration-300 hover:text-primary/100 sm:text-[16px] lg:text-[18px]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
