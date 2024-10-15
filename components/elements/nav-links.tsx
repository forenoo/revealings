import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  return (
    <Button
      variant="ghost"
      className={cn(
        "text-white font-semibold hover:bg-white/20 hover:text-white",
        className
      )}
      onClick={onClick}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
