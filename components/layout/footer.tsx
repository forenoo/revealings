import React from "react";

export default function Footer() {
  return <footer className="border-t-[1px] mt-20 border-[#2B1D1D] border-opacity-20 flex justify-between px-10">
    <div>
    <h1>Revealings</h1>
    <p>Petualangan Dimulai dari Sini. <br />
    Mengungkap Keindahan Tersembunyi Indonesia</p>
    <p>© Revealings 2024. All rights reserved.</p>
    </div>
    <div>
      <div className="flex">
          <div>
            <h1>Navigasi</h1>
            <p></p>
            <p>Tentang</p>
            <p>Destinasi</p>
            <p>Ulasan</p>
          </div>
          <div>
            <h1>Lisensi</h1>
            <p>Kebijakan Privasi</p>
            <p>Copyright</p>
            <p>Alamat Email</p>
          </div>
          <div>
            <h1>Sosial</h1>
            <p>X (@revealings)</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p></p>
          </div>
      </div>
    </div>
    </footer>;
}
