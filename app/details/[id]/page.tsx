"use client";

import { ratingEnglish, ratingIndonesia } from "@/lib/constants";
import { useLanguageStore } from "@/store/language";
import React from "react";

export default function DetailsPage({ params }: { params: { id: number } }) {
  const { language } = useLanguageStore();
  const rating = language === "id" ? ratingIndonesia : ratingEnglish;

  return (
    <div>
      <p>{rating.attractions[params.id - 1].details.title}</p>
    </div>
  );
}
