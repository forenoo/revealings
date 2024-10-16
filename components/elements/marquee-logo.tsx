import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeLogo() {
  return (
    <Marquee direction="right" gradient gradientColor="#f5f5f5">
      {Array.from({ length: 9 }).map((_, index) => (
        <Image
          key={index}
          src={`/logo${index + 1}.png`}
          alt={`logo${index + 1}`}
          width={150}
          className="mr-[40px] opacity-50 grayscale"
          height={100}
        />
      ))}
    </Marquee>
  );
}
