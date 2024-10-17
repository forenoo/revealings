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
      <div className="maxPadding relative flex flex-col items-center gap-[40px] pt-[40px] md:pt-[80px]">
        <div className="absolute top-0 -z-10 h-[290px] w-full bg-primary sm:h-[320px] md:h-[550px]"></div>
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
