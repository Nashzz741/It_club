// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0d0f14] border-t border-gray-100 dark:border-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Sisi Kiri: Nama Club & Hak Cipta */}
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white tracking-wide">
            IT Club 
          </h4>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} IT Club SMKN 1 Subang. All rights
            reserved.
          </p>
        </div>

        {/* Sisi Kanan: Tautan Kebijakan */}
        <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-400">
          <a href="#privacy" className="hover:text-blue-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-blue-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
