import SectionTitle from "../elements/section-title";
import DestinationVideo from "../elements/destination-video";
import { destinationIndonesia, destinationEnglish } from "@/lib/constants";
import { useLanguageStore } from "@/store/language";

export default function Destination() {
  const { language } = useLanguageStore();
  const destination =
    language === "id" ? destinationIndonesia : destinationEnglish;

  return (
    <section className="sectionPadding" id="destination">
      <div className="maxPadding flex h-[290px] flex-col items-center gap-[40px] bg-primary py-[40px] sm:h-[320px] md:h-[550px] md:py-[80px]">
        <SectionTitle
          description={destination.description}
          title={destination.title}
          titleClassName="text-white"
          descriptionClassName="text-white/70 max-w-[700px]"
        />
        <DestinationVideo />
      </div>
    </section>
  );
}
