import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-[#11141a] py-20 transition-colors">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Tentang IT Club SMKN 1 Subang
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 leading-relaxed text-base"
        >
          IT Club SMKN 1 Subang adalah wadah bagi siswa-siswi yang memiliki minat
          besar dalam dunia teknologi informasi. Kami bukan sekadar
          ekstrakurikuler, kami adalah ekosistem belajar yang mendorong
          kreativitas tanpa batas di bidang pengembangan perangkat lunak,
          pemrograman robotika, dan seni visual digital. Di sini, kita mengubah
          imajinasi menjadi solusi nyata melalui semangat kolaborasi dan
          disiplin tinggi.
        </motion.p>
      </div>
    </div>
  );
}
