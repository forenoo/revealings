import React from "react";
import SectionTitle from "../elements/section-title";
import Image from "next/image";
import CustomButton from "../ui/customButton";
import { ArrowUpRight } from "lucide-react";

export default function Purpose() {
  return (
    <div className="relative">
      <Image
        src={"/grid-pattern.svg"}
        alt="grid-pattern"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        width={600}
        height={300}
      />
      <section className="sectionPadding maxContainer maxPadding relative grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[40px]">
        <div className="my-auto flex flex-col gap-[20px] md:gap-[30px]">
          <SectionTitle
            className="items-start text-left"
            title="Mengenal Kami dan Raja Ampat"
            additionalImage="/purpose-image.jpg"
            titleClassName="text-left mx-auto md:mx-0 max-w-[500px]"
            description="Revealings hadir untuk memberikan informasi lengkap dan terpercaya tentang keindahan Raja Ampat, destinasi wisata yang kaya akan alam dan keanekaragaman hayati. Kami membantu wisatawan mengenal keunikan pulau, pantai, dan spot diving."
            descriptionClassName="text-justify"
          />
          <CustomButton variant="dark" icon={<ArrowUpRight />}>
            Selengkapnya
          </CustomButton>
        </div>
        <Image
          src={"/purpose-image.jpg"}
          alt="purpose-image"
          className="hidden w-auto rounded-[20px] md:flex"
          width={600}
          height={300}
        />
      </section>
    </div>
  );
}
