import { navLinksIndonesia } from "@/lib/constants";
import React from "react";
import { Button } from "../ui/button";
import { CiGlobe } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center sticky py-[16px] top-0 left-0 right-0 z-[99]">
      <h1 className="font-bold text-[20px]">Revealings</h1>
      <ul className="flex gap-4">
        {navLinksIndonesia.map((link) => (
          <li key={link.id}>
            <Button variant="ghost">{link.name}</Button>
          </li>
        ))}
      </ul>
      <Button variant="ghost">
        <CiGlobe />
      </Button>
    </nav>
  );
}
