import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

export default function NavLink({
  className,
  children,
  href,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      lenis?.scrollTo(href);
    } else {
      window.location.href = href;
    }
    onClick?.();
  };

  return (
    <Link href={href} onClick={handleClick}>
      <Button
        variant="ghost"
        className={cn(
          "font-semibold text-white hover:bg-white/20 hover:text-white",
          className,
        )}
      >
        {children}
      </Button>
    </Link>
  );
}
