import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { imagePurpose } from "@/lib/constants";

export default function PurposeImage({ className }: { className?: string }) {
  return (
    <Carousel
      className="overflow-hidden rounded-[20px]"
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {imagePurpose.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt="purpose-image"
              className={cn("h-full w-full rounded-[20px]", className)}
              width={600}
              height={300}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
