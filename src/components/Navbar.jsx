// src/components/Navbar.jsx
import { Sun, Moon } from "lucide-react";
// Import Link dari react-scroll
import { Link } from "react-scroll";

export default function Navbar({ darkMode, setDarkMode }) {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Divisi", id: "services" },
    { name: "Karya", id: "work" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0d0f14]/70 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600 dark:text-white">
          TechNexus IT
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                {/* Ganti tag <a> menjadi <Link> dari react-scroll */}
                <Link
                  to={item.id} // ID target (harus sama dengan id di <section>)
                  spy={true} // Mendeteksi posisi scroll aktif
                  smooth={true} // Mengaktifkan efek smooth
                  offset={-80} // Mengurangi tinggi navbar agar tidak menutupi judul section
                  duration={500} // Durasi animasi scroll dalam milidetik (0.5 detik)
                  className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

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
      </div>
    </nav>
  );
}
