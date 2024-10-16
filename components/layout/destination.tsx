import SectionTitle from "../elements/section-title";
import DestinationVideo from "../elements/destination-video";

export default function Destination() {
  return (
    <section className="sectionPadding">
      <div className="maxPadding flex h-[550px] flex-col items-center gap-[40px] bg-primary py-[80px]">
        <SectionTitle
          description="Temukan keindahan alam di bawah laut Raja Ampat dan kekayaan ekosistem laut yang sangat menakjubkan"
          title="Destinasi Terpopuler"
          titleClassName="text-white"
          descriptionClassName="text-white/70 max-w-[700px]"
        />
        <DestinationVideo />
      </div>
    </section>
  );
}
