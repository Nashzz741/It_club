import { Code2, Cpu, Palette, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Koding",
      desc: "Pelajari bahasa pemrograman modern seperti JavaScript, Python, dan Rust untuk membangun software masa depan.",
    },
    {
      icon: <Cpu size={24} />,
      title: "Robotik",
      desc: "Rancang hardware cerdas dan integrasikan mekanika dengan kode pemrograman.",
    },
    {
      icon: <Palette size={24} />,
      title: "Desain Grafis",
      desc: "Asah kreativitas visual dalam UI/UX dan pembuatan aset digital interaktif.",
    },
    {
      icon: <Network size={24} />,
      title: "Networking",
      desc: "Pahami infrastruktur jaringan internet secara mendalam demi keamanan siber.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-gray-50 dark:bg-[#14171e] border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-8 rounded-xl bg-blue-600 text-white flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">Siap Untuk Berinovasi?</h3>
          <p className="text-blue-100 text-sm">
            Bergabunglah dengan 150+ anggota aktif dan mulailah berkolaborasi
            sekarang.
          </p>
        </div>
        <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md mt-6 self-start text-sm hover:bg-blue-50 transition-colors">
          Hubungi Kami
        </button>
      </motion.div>
    </div>
  );
}
