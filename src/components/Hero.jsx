// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../assets/logo_itc.jpeg";

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-8 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-70px)]">
      {/* Kolom Teks: Muncul PERTAMA di HP (order-1), rata tengah di mobile, rata kiri di desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center md:text-left order-1"
      >
        <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
          Eksklusif TIM RISTEK
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 dark:text-white">
          Membangun Masa <br className="hidden sm:inline" /> Depan Digital
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
          Gabung bersama kami di IT Club SMKN 1 Subang dan asah kemampuan coding,
          desain, dan inovasimu melalui proyek nyata.
        </p>
        <div className="flex justify-center md:justify-start gap-3 pt-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer">
            Daftar Sekarang
          </button>
          <Link
            to="work"
            smooth={true}
            offset={-80}
            duration={500}
            className="border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 px-5 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            Lihat Proyek
          </Link>
        </div>
      </motion.div>

     {/* Kolom Logo (Kanan di Desktop, Atas di HP) */}
<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="flex justify-center md:justify-end items-center w-full order-1 md:order-2"
>
  {/* BINGKAI KOTAK UTAMA (Melengkung Modern)
      - overflow-hidden wajib ada biar sudut putih gambar dipotong paksa mengikuti bentuk kotak melengkung ini.
  */}
  <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] p-2 bg-[#14171e] dark:bg-[#14171e] rounded-2xl border border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden group">
    
    {/* GAMBAR LOGO 
        - rounded-xl (sedikit lebih kecil dari bingkai luar) memastikan sudut putih bawaan gambar ikut melengkung sempurna di dalam bingkai.
        - object-cover dan scale-105 dipakai agar gambar padat & pas.
    */}
    <img 
      src={logo} // Sesuaikan dengan path/import logomu
      alt="Logo SMKN 1 Subang IT Club" 
      className="w-full h-full object-cover rounded-xl scale-105 transition-transform duration-300 group-hover:scale-110"
    />

  </div>
</motion.div>
    </div>
  );
}