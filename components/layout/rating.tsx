import SectionTitle from "../elements/section-title";
import Image from "next/image";
import { ratingIndonesia, ratingEnglish } from "@/lib/constants";
import { FaStar } from "react-icons/fa";
import { useLanguageStore } from "@/store/language";
import Link from "next/link";

export default function Rating() {
  const { language } = useLanguageStore();
  const rating = language === "id" ? ratingIndonesia : ratingEnglish;

  return (
    <div className="relative" id="rating">
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
          description={rating.description}
          title={rating.title}
        />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4">
          {rating.attractions.map((item) => (
            <Link href={`/details/${item.id}`} key={item.id}>
              <div className="group relative h-full max-h-[300px] min-h-[300px] w-full overflow-hidden rounded-[20px] hover:cursor-pointer md:max-h-[400px]">
                <div className="absolute inset-0 z-10 hidden h-full w-full items-center justify-center bg-black/50 group-hover:flex">
                  <p className="mb-5 font-medium text-white hover:underline">
                    {language === "id" ? "Lihat Detailnya" : "View Detail"}
                  </p>
                </div>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="h-full max-h-[400px] w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 z-[10] m-[16px] flex items-center justify-between rounded-[12px] border-2 border-accent/50 bg-white p-3 font-bold text-primary">
                  <h3 className="text-[14px] md:text-[16px]">{item.name}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-accent" />
                    <p className="text-[12px] text-accent md:text-[14px]">
                      {item.rating}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
