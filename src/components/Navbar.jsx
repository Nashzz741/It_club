// src/components/Navbar.jsx
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
// Menggunakan Link dari react-scroll agar tetap smooth scroll
import { Link } from "react-scroll";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Divisi", id: "services" },
    { name: "Karya", id: "work" },
  ];

  return (
    // KUNCI STICKY: Menempel terus saat di-scroll di desktop maupun mobile
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0d0f14]/70 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-white">
          IT Club
        </div>

        {/* --- NAVIGASI DESKTOP (Sembunyi di HP dengan hidden md:flex) --- */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mode Malam Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
            Join Club
          </button>
        </div>

        {/* --- TOMBOL KONTROL MOBILE (Hanya muncul di HP dengan md:hidden) --- */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mode Malam Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Tombol Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MENU DROP-DOWN BURGER MOBILE (Muncul jika tombol burger di-klik) --- */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0d0f14] border-t border-gray-100 dark:border-gray-900 px-4 pt-2 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)} // Otomatis menutup menu setelah diklik
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-blue-500 transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 px-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md text-sm font-medium transition-colors shadow-md">
              Join Club
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
