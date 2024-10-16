import React from "react";
import SectionTitle from "../elements/section-title";
import Image from "next/image";
import { menarikWisatawanIndonesia } from "@/lib/constants";

export default function Rating() {
  return (
    <div className="relative">
      <Image
        src={"/zigzag-pattern.svg"}
        alt="zigzag-pattern"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={600}
        height={300}
      />
      <section className="sectionPadding maxContainer maxPadding flex flex-col gap-[40px]">
        <SectionTitle
          className="mx-auto max-w-[700px]"
          description="Raja Ampat menawarkan pengalaman luar biasa bagi wisatawan dengan kekayaan terumbu karang dan kehidupan laut yang spektakuler"
          title="Menarik Banyak Wisatawan Dari Seluruh Dunia"
        />
        <div className="grid grid-cols-4 gap-[20px]">
          {menarikWisatawanIndonesia[0].attractions.map((item) => (
            <div key={item.id} className="relative">
              <Image
                src={item.image}
                alt={item.name}
                width={1000}
                height={1000}
                className="h-full max-h-[400px] w-full rounded-[20px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 m-[16px] flex items-center justify-between rounded-[12px] border-2 border-accent/50 bg-white p-3 font-bold text-primary">
                <h3 className="text-[16px]">{item.name}</h3>
                <p className="text-[14px] text-accent">{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
