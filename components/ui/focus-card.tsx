"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

interface CardComponentProps extends CardProps {
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

const Card: React.FC<CardComponentProps> = React.memo(
  ({ title, description, image, index, hovered, setHovered }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative h-60 w-full overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out dark:bg-neutral-900 md:h-96",
        hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="absolute inset-0 object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-black/50 p-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <h3 className="text-[18px] font-bold text-white md:text-[24px]">
          {title}
        </h3>
        <p className="mt-2 text-[14px] text-[#E0E0E0]">{description}</p>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

interface FocusCardsProps {
  cards: CardProps[];
  className?: string;
}

export const FocusCards: React.FC<FocusCardsProps> = ({ cards, className }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={cn("grid gap-4 md:grid-cols-3", className)}>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          {...card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};
