import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
     
     useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
    return (
  <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-5">

      <a
        href="#home"
        className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition"
      >
        Muhammed Aadhil
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
           <a
  href={`#${link.id}`}
  className={`relative transition-all duration-300 ${
    active === link.id
      ? "text-blue-500 font-semibold"
      : "text-zinc-300 hover:text-blue-400"
  }`}
>
  {link.label}

  {active === link.id && (
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-0.5 bg-blue-500 rounded-full"></span>
  )}
</a>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="md:hidden bg-slate-950 border-t border-slate-800"
  >
    <div className="flex flex-col items-center py-6 space-y-6">
      {navLinks.map((link) => (
        <a
  key={link.id}
  href={`#${link.id}`}
  onClick={() => setMenuOpen(false)}
  className={`flex flex-col items-center text-xl transition-all duration-300 ${
    active === link.id
      ? "text-blue-500 font-semibold"
      : "text-zinc-300 hover:text-blue-400"
  }`}
>
  {link.label}

  {active === link.id && (
    <span className="mt-2 h-0.5 w-8 rounded-full bg-blue-500"></span>
  )}
</a>
      ))}
    </div>
  </motion.div>
)}
  </nav>
);
}

export default Navbar;