// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import StudentWork from "./components/StudentWork";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // src/App.jsx
  return (
    // JANGAN ADA class 'overflow-hidden' atau 'overflow-y-hidden' di div ini!
    <div className="bg-white text-gray-900 dark:bg-[#0d0f14] dark:text-gray-100 min-h-screen transition-colors duration-300 font-sans">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <StudentWork />
      </section>

      <Footer />
    </div>
  );
}

export default App;