// src/components/Hero.jsx
import { motion } from "framer-motion";
import logo from "../assets/logo_itc.jpeg"; // Pastikan kamu sudah memotong logo dan menyimpannya di folder assets

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-0 grid md:grid-cols-2 gap-10 items-center md:min-h-[calc(100vh-73px)]">
      {/* Kolom Kiri: Teks & Tombol */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full w-fit block">
          Eksklusif TIM RISTEK
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Membangun Masa Depan Digital
        </h1>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          Gabung bersama kami di IT Club SMKN 1 Subang dan asah kemampuan coding,
          desain, dan inovasimu melalui proyek nyata dan kolaborasi penuh.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer shadow-lg shadow-blue-600/20">
            Daftar Sekarang
          </button>
          <button className="border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 px-6 py-3 rounded-md font-medium transition-colors cursor-pointer">
            Lihat Proyek
          </button>
        </div>
      </motion.div>

      {/* Kolom Kanan: Wadah Gambar Logo SMKN 1 Subang */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center md:justify-end items-center w-full"
      >
        {/* BOX UTAMA (Wadah Luar): Memberikan efek frame, shadow, dan border putih/gelap */}
        <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] p-4 bg-white dark:bg-[#14171e] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl flex items-center justify-center overflow-hidden">
          {/* WADAH DALAM (Kunci Pemotong): Box transparan dengan overflow-hidden & padding negatif */}
          <div className="w-full h-full overflow-hidden rounded-xl relative flex items-center justify-center">
            <img
              src={logo}
              alt="Logo SMKN 1 Subang IT Club"
              // scale-105 akan memperbesar logo sebanyak 5% agar garis-garis aneh di pinggiran terdorong keluar frame dan hilang otomatis!
              className="w-full h-full object-contain scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
