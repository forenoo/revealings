import SectionTitle from "@/components/elements/section-title";
import AboutImageCard from "@/components/elements/about-image-card";
import { aboutImageCardIndonesia } from "@/lib/constants";

export default function About() {
  return (
    <section className="flex flex-col gap-[40px] pt-[80px]">
      <SectionTitle
        title="Surga di Ujung Timur Indonesia"
        description="Temukan ratusan spesies ikan dan terumbu karang, menjadikan Raja Ampat sebagai destinasi impian bagi penyelam dan pecinta alam."
        descriptionClassName="max-w-[720px]"
      />
      <div className="grid grid-cols-3 gap-[20px]">
        {aboutImageCardIndonesia.map((item) => (
          <AboutImageCard
            key={item.id}
            image={item.image}
            className={item.id === 2 ? "row-span-2" : ""}
            hoverTitle={item.title}
            hoverDescription={item.description}
          />
        ))}
      </div>
    </section>
  );
}
