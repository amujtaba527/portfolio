import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 h-20">
        {/* Brand */}
        <a href="#home" className="text-2xl font-bold tracking-tight text-primary" onClick={e => handleNavClick(e, '#home')}>
          Ahmad Mujtaba
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg animate-fade-in">
          <div className="flex flex-col items-center py-6 gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
