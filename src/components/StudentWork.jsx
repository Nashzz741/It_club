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
    <div className="max-w-6xl mx-auto px-4 py-20 space-y-8 outline-none">
      <div>
        <h2 className="text-3xl font-bold">Karya Siswa</h2>
        <p className="text-sm text-gray-500">
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
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {works.map((work, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-xl overflow-hidden border cursor-pointer bg-white dark:bg-[#14171e] transition-all duration-300 ${
                isActive
                  ? "border-blue-500 shadow-xl scale-[1.03] ring-2 ring-blue-500/20"
                  : "border-gray-200 dark:border-gray-800 opacity-70"
              }`}
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-2">
                <span className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500">
                  {work.type}
                </span>
                <h3 className="font-bold text-lg pt-1">{work.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL COMPONENT DENGAN ANIMASI */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop hitam transparan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Kotak Konten Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-[#14171e] border border-gray-200 dark:border-gray-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative z-10 p-6 space-y-4"
            >
              <img
                src={selectedWork.img}
                alt={selectedWork.title}
                className="w-full h-56 object-cover rounded-xl"
              />
              <div>
                <span className="text-xs font-mono text-blue-500 bg-blue-50 dark:bg-blue-950/40 px-2 py-1 rounded">
                  {selectedWork.type}
                </span>
                <h3 className="text-2xl font-bold mt-2">
                  {selectedWork.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Ini adalah deskripsi demo untuk {selectedWork.title}. Kamu
                  bisa menyematkan tautan live demo langsung di bawah ini untuk
                  melihat hasil kerja siswa secara interaktif.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={selectedWork.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-medium transition-colors"
                >
                  Live Demo
                </a>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm transition-colors"
                >
                  Tutup (Enter)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
