// src/components/Services.jsx
import { Code2, Cpu, Palette, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={22} />,
      title: "Koding",
      desc: "Pelajari bahasa pemrograman modern seperti JavaScript, Python, dan Rust.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Robotik",
      desc: "Rancang hardware cerdas dan integrasikan mekanika dengan kode pemrograman.",
    },
    {
      icon: <Palette size={22} />,
      title: "Desain Grafis",
      desc: "Asah kreativitas visual dalam UI/UX dan pembuatan aset digital interaktif.",
    },
    {
      icon: <Network size={22} />,
      title: "Networking",
      desc: "Pahami infrastruktur jaringan internet secara mendalam demi keamanan siber.",
    },
  ];

  return (
    // grid-cols-1 di HP, md:grid-cols-3 di desktop
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Box Grid Divisi (1 Kolom di HP, 2 Kolom dari ukuran tablet ke atas) */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="p-5 md:p-6 rounded-xl bg-gray-50 dark:bg-[#14171e] border border-gray-100 dark:border-gray-800"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-3 md:mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-base md:text-lg mb-1.5">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Box Biru Ajakan (Auto nyesuaiin paling bawah kalau di HP) */}
      <motion.div className="p-6 md:p-8 rounded-xl bg-blue-600 text-white flex flex-col justify-between min-h-[200px] md:min-h-auto">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Siap Untuk Berinovasi?
          </h3>
          <p className="text-blue-100 text-xs md:text-sm">
            Bergabunglah dengan 150+ anggota aktif dan mulailah berkolaborasi
            sekarang.
          </p>
        </div>
        <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md mt-6 self-start text-xs md:text-sm hover:bg-blue-50 transition-colors cursor-pointer">
          Hubungi Kami
        </button>
      </motion.div>
    </div>
  );
}
