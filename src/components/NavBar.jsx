import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#020c14]/90 backdrop-blur-xl border-b border-[#00f5d4]/10 shadow-lg shadow-black/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="font-black text-xl tracking-widest text-white">
          <span className="text-[#00f5d4]">A</span>JAY
          <span className="text-[#f72585]">.</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={`text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#00f5d4] ${
                  active === l.toLowerCase() ? "text-[#00f5d4]" : "text-gray-400"
                }`}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:ajaykumar895377@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00f5d4]/60 text-[#00f5d4] text-sm font-bold tracking-wider hover:bg-[#00f5d4]/10 transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020c14]/95 backdrop-blur-xl border-t border-[#00f5d4]/10 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-gray-300 font-semibold tracking-widest uppercase text-sm hover:text-[#00f5d4] transition-colors"
            >
              {l}
            </button>
          ))}
          <a
            href="mailto:ajaykumar895377@gmail.com"
            className="block mt-3 px-5 py-3 rounded-full border border-[#00f5d4]/60 text-[#00f5d4] text-sm font-bold tracking-wider text-center hover:bg-[#00f5d4]/10 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
