"use client";

import { useLanguageStore } from "@/store/language";
import Image from "next/image";

export default function AboutPage() {
  const { language } = useLanguageStore();
  return (
    <main className="flex-grow">
      <div className="relative h-52 bg-[url('/about.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            {language === "id"
              ? "Jelajahi Raja Ampat Bersama Kami"
              : "Discover Raja Ampat with Us"}
          </h1>
        </div>
      </div>

      <div className="maxContainer maxPadding sectionPadding mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-primary">
          {language === "id" ? "Tentang Kami" : "About Us"}
        </h2>
        <div className="space-y-4 text-[18px] text-gray-600">
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
          <Image
            src="/about-image-1.jpg"
            alt="about"
            width={900}
            height={900}
            className="h-52 w-full object-cover"
          />
          <p>
            {language === "id"
              ? "Raja Ampat, yang dikenal juga sebagai Empat Raja, adalah sebuah kepulauan yang berada di ujung barat laut Semenanjung Kepala Burung di Pulau Nugini, provinsi Papua Barat Daya, Indonesia. Kepulauan ini terdiri dari lebih dari 1.500 pulau kecil, terumbu karang, dan gosong, dengan empat pulau utamanya yaitu Misool, Salawati, Batanta, dan Waigeo, serta pulau yang lebih kecil, Kofiau."
              : "Raja Ampat, also known as the Four Kings, is an archipelago located at the western tip of the Bird's Head Peninsula in Papua New Guinea, West Papua Province, Indonesia. This archipelago consists of over 1,500 small islands, coral reefs, and islets, with its four main islands being Misool, Salawati, Batanta, and Waigeo, along with the smaller Kofiau."}
          </p>
          <p>
            {language === "id"
              ? "Terletak di sepanjang garis khatulistiwa, Raja Ampat merupakan bagian dari Segitiga Terumbu Karang, sebuah wilayah di Asia Tenggara yang memiliki keanekaragaman hayati laut terkaya di dunia. Segitiga Terumbu Karang ini mencakup perairan di sekitar barat daya Filipina, timur dan tenggara Kalimantan, serta utara, timur, dan barat Pulau Nugini. Di sini, berbagai spesies laut hidup, mulai dari udang kecil dan kuda laut mini hingga paus dan hiu paus besar."
              : "Located along the equator, Raja Ampat is part of the Coral Triangle, an area in Southeast Asia that is home to the richest marine biodiversity in the world. The Coral Triangle includes waters surrounding the western Philippines, eastern Kalimantan, and the north, east, and west of the Papua New Guinea islands. Here, various marine species live, from small shrimp and mini sea turtles to whales and whales."}
          </p>
          <p>
            {language === "id"
              ? "Penduduk Kepulauan Raja Ampat umumnya adalah nelayan tradisional yang tinggal di desa-desa kecil yang tersebar di berbagai pulau. Mereka dikenal ramah dan senang menyambut tamu, terutama jika kita membawa hadiah seperti pinang atau permen. Hadiah-hadiah ini dianggap sebagai tanda persahabatan, mirip dengan pipa perdamaian di kalangan suku Indian. Percakapan sambil menikmati pinang, yang disebut Para-para Pinang, sering kali diisi dengan saling bertukar cerita lucu, yang dalam bahasa lokal disebut mob."
              : "The inhabitants of the Raja Ampat Islands are primarily traditional fishermen who live in small villages scattered across various islands. They are known to be friendly and welcome guests, especially if we bring gifts such as pinang or candy. These gifts are considered a symbol of friendship, similar to the peace pipe among the Indian tribes. Conversations while enjoying pinang, which are called Para-para Pinang, often include exchanging funny stories, which in local language are called mob."}
          </p>
          <p>
            {language === "id"
              ? "Pada tahun 2001 dan 2002, tim ahli dari Conservation International, The Nature Conservancy, serta Lembaga Oseanografi Nasional (LON) LIPI melakukan penilaian cepat di perairan Raja Ampat. Hasilnya menunjukkan bahwa wilayah ini memiliki lebih dari 540 jenis karang keras (mewakili 75% dari total jenis di dunia), lebih dari 1.000 jenis ikan karang, 700 jenis moluska, serta catatan tertinggi untuk krustasea gonodactyloid stomatopod. Hal ini menjadikan Raja Ampat sebagai rumah bagi 75% spesies karang dunia, yang tak dapat ditemukan di area dengan luas yang sama di tempat lain."
              : "In 2001 and 2002, a team of experts from Conservation International, The Nature Conservancy, and the National Institute of Oceanography (LON) LIPI conducted a rapid assessment of the waters of Raja Ampat. The results showed that this area has more than 540 types of hard corals (representing 75% of the total types in the world), more than 1,000 types of coral fish, 700 types of mollusks, and the highest record for the stomatopod crustacean gonodactyloid. This makes Raja Ampat home to 75% of the world's coral species, which cannot be found in areas with the same area in other places."}
          </p>
          <Image
            src="/about-image-2.jpg"
            alt="about"
            width={900}
            height={900}
            className="h-52 w-full object-cover"
          />
          <p>
            {language === "id"
              ? "Beberapa kawasan terumbu karang di wilayah ini masih sangat terjaga, dengan tutupan karang hidup hingga 90%, seperti di Selat Dampier (antara Pulau Waigeo dan Batanta), Kepulauan Kofiau, Misool Tenggara, dan Kepulauan Wayag. Jenis terumbu karang di Raja Ampat umumnya merupakan terumbu karang tepi dengan kontur yang bervariasi dari landai hingga curam, namun terdapat juga tipe atol dan gosong (taka)."
              : "Some coral reef areas in this region are still well preserved, with live coral coverage up to 90%, such as Dampier Strait (between Waigeo Island and Batanta), Kofiau Islands, Misool Southeast, and Wayag Islands. The type of coral reefs in Raja Ampat is generally coral reefs along the edge with varying contours from gentle to steep, but there are also types of atoll and islets (taka)."}
          </p>
          <p>
            {language === "id"
              ? "Saat menyelam di Raja Ampat, penyelam dapat menemukan spesies unik seperti beberapa jenis kuda laut kerdil, wobbegong, dan ikan pari Manta.Terdapat juga ikan endemik raja ampat, yaitu Eviota raja, yaitu sejenis ikan gobbe."
              : "When diving in Raja Ampat, divers can find unique species such as several types of small sea turtles, wobbegong, and manta rays. There are also endemic Raja Ampat fish, namely Eviota raja, which is a type of goby."}
          </p>
          <p>
            {language === "id"
              ? "Secara etnis, mayoritas penduduk Raja Ampat berasal dari suku Maya, Amber, Moi, Efpan, dan Biak, yang diperkirakan telah menetap di wilayah ini sebelum abad ke-15. Suku Maya sendiri terbagi menjadi tiga sub-suku, yaitu suku Kawei (dari Selpele dan Salyo di Waigeo Barat), suku Wauyai (berasal dari Waigeo Selatan), dan suku Laganyan (dari Yefnu dan Lopintol)."
              : "Ethnically, most of the inhabitants of Raja Ampat are from the Maya, Amber, Moi, Efpan, and Biak tribes, which are believed to have settled in this region before the 15th century. The Maya tribe itself is divided into three sub-tribes: the Kawei tribe (from Selpele and Salyo in West Waigeo), the Wauyai tribe (from South Waigeo), and the Laganyan tribe (from Yefnu and Lopintol)."}
          </p>
        </div>
      </div>
    </main>
  );
}
