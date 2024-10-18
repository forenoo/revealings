"use client";

import { useLanguageStore } from "@/store/language";

export default function AboutPage() {
  const { language } = useLanguageStore();
  return (
    <main className="flex-grow">
      <div className="relative h-80 bg-[url('/about.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            {language === "id"
              ? "Jelajahi Raja Ampat Bersama Kami"
              : "Discover Raja Ampat with Us"}
          </h1>
        </div>
      </div>

      <div className="maxContainer maxPadding sectionPadding mx-auto">
        <h2 className="mb-6 text-6xl font-bold text-primary">
          {language === "id" ? "Tentang Kami" : "About Us"}
        </h2>
        <div className="space-y-4 text-[20px] text-gray-600">
          <p>
            {language === "id"
              ? "Revealings hadir sebagai platform terpercaya yang didedikasikan untuk menghadirkan informasi lengkap dan mendalam tentang Raja Ampat. Kami memahami bahwa keindahan alam dan kekayaan ekosistem di destinasi ini begitu memukau, mulai dari pantai-pantai berpasir putih, hutan tropis yang asri, hingga kekayaan bawah laut yang menakjubkan. Melalui konten kami, wisatawan dapat mengenal lebih dekat setiap pulau, budaya lokal, serta beragam spot diving dan snorkeling yang menjadi incaran pecinta alam dan petualang."
              : "Revealings exists as a trusted platform dedicated to bring you complete and in-depth information about Raja Ampat. We understand that the natural beauty and rich ecosystems of Raja Ampat, from the white sandy beaches, lush tropical forest white sandy beaches, pristine tropical forests, and stunning underwater treasures. amazing underwater treasures. Through our content, travelers can get to know each island, local culture, as well as a variety of diving and snorkeling spots that are the target of dive lovers. snorkeling spots that are the target of nature lovers and adventurers."}
          </p>
          <p>
            {language === "id"
              ? "Kami berkomitmen untuk membantu wisatawan merencanakan perjalanan yang bermakna dan penuh kesan. Dengan informasi yang akurat dan panduan yang relevan, Revealings memastikan setiap traveler bisa menikmati pengalaman terbaik, dari eksplorasi pulau-pulau terpencil hingga interaksi dengan komunitas lokal. Kami juga memberikan tips praktis, rekomendasi aktivitas, serta wawasan terkait pelestarian lingkungan agar perjalanan Anda tak hanya menyenangkan, tetapi juga bertanggung jawab."
              : "We are committed to helping travelers plan a meaningful and memorable trip that is meaningful and memorable. With accurate information and relevant guides, Revealings ensures that every traveler can enjoy the best possible experience, from the exploration of remote islands to interactions with local communities. We also provide practical tips, activity recommendations, and insights into sustainability so that your trip not only fun, but also responsible."}
          </p>
          <p>
            {language === "id"
              ? "Bersama Revealings, kami ingin menjadi mitra perjalanan Anda untuk menjelajahi keindahan Raja Ampat secara mendalam. Temukan pesona alam dan kekayaan budaya yang tersembunyi, serta biarkan diri Anda terinspirasi oleh keajaiban yang ada di setiap sudutnya. Jadikan setiap perjalanan lebih dari sekadar liburan – sebuah pengalaman yang membuka mata, memperkaya jiwa, dan menciptakan kenangan yang tak terlupakan."
              : "Together with Revealings, we want to be your travel partner to explore the beauty of Raja Ampat in depth. Discover the hidden natural beauty and cultural richness, and let yourself be inspired by the wonders that exist in every corner. Make every trip more than just a vacation - an experience that opens your eyes, enriches your soul, and creates unforgettable memories."}
          </p>
        </div>
      </div>
    </main>
  );
}
