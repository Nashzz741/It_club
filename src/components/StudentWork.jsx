// src/components/StudentWork.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StudentWork() {
  const works = [
    {
      title: "School Management App",
      type: "React / Firebase",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500",
      demoLink: "https://example.com/demo1",
    },
    {
      title: "Smart Trash Bin",
      type: "Arduino / C++",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500",
      demoLink: "https://example.com/demo2",
    },
    {
      title: "Portfolio Website",
      type: "HTML / Tailwind",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500",
      demoLink: "https://example.com/demo3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Jika modal sedang terbuka
      if (selectedWork) {
        if (e.key === "Enter" || e.key === "Escape") {
          setSelectedWork(null);
        }
        return;
      }

      // Jika modal tertutup, navigasi kartu aktif
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % works.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
      } else if (e.key === "Enter") {
        setSelectedWork(works[activeIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, selectedWork]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 space-y-6 md:space-y-8 outline-none">
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold">Karya Siswa</h2>
        {/* Petunjuk dinamis: mendeteksi petunjuk komputer, tapi di HP tetap bisa disentuh */}
        <p className="text-xs md:text-sm text-gray-500 hidden md:block">
          Gunakan tombol panah{" "}
          <span className="font-mono bg-gray-200 dark:bg-gray-800 px-1 rounded">
            ←
          </span>{" "}
          <span className="font-mono bg-gray-200 dark:bg-gray-800 px-1 rounded">
            →
          </span>{" "}
          untuk memilih, dan{" "}
          <span className="font-mono bg-gray-200 dark:bg-gray-800 px-1 rounded">
            Enter
          </span>{" "}
          untuk melihat detail.
        </p>
        <p className="text-xs md:text-sm text-gray-500 block md:hidden">
          Ketuk kartu proyek untuk memilih dan membukanya.
        </p>
      </div>

      {/* Grid: 1 Kolom di HP, 3 Kolom di Laptop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {works.map((work, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              // Di HP: Sekali ketuk nge-set aktif, kalau diketuk lagi saat sudah aktif langsung buka modal
              onClick={() => {
                if (activeIndex === index) {
                  setSelectedWork(work);
                } else {
                  setActiveIndex(index);
                }
              }}
              className={`rounded-xl overflow-hidden border cursor-pointer bg-white dark:bg-[#14171e] transition-all duration-300 ${
                isActive
                  ? "border-blue-500 shadow-xl scale-[1.02] md:scale-[1.03] ring-2 ring-blue-500/20 opacity-100"
                  : "border-gray-200 dark:border-gray-800 opacity-60 md:opacity-70"
              }`}
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-5 space-y-1 md:space-y-2">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500">
                  {work.type}
                </span>
                <h3 className="font-bold text-base md:text-lg pt-1">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL RESPONSIVE */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* max-w-md w-full agar pas di layar HP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-[#14171e] border border-gray-200 dark:border-gray-800 rounded-xl max-w-md w-full overflow-hidden shadow-2xl relative z-10 p-5 space-y-3 md:space-y-4"
            >
              <img
                src={selectedWork.img}
                alt={selectedWork.title}
                className="w-full h-44 md:h-52 object-cover rounded-lg"
              />
              <div>
                <span className="text-[10px] font-mono text-blue-500 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded">
                  {selectedWork.type}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mt-1.5">
                  {selectedWork.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-2 leading-relaxed">
                  Ini adalah deskripsi demo untuk {selectedWork.title}. Kamu
                  bisa melihat hasil kerja siswa secara interaktif melalui
                  tombol live demo.
                </p>
              </div>

              <div className="flex gap-3 pt-1 flex-col sm:flex-row">
                <a
                  href={selectedWork.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md text-sm font-medium transition-colors order-1 sm:order-2"
                >
                  Live Demo
                </a>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-xs md:text-sm transition-colors order-2 sm:order-1"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}