import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Renovations', target: 'renovations' },
    { label: 'Areas', target: 'areas' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, 'hero')}>
            <img src="/rick_logo.png" alt="E&E Total Contracting" className="logo-img" />
          </a>

          <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.target}>
                <a href={`#${link.target}`} onClick={(e) => handleNavClick(e, link.target)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-cta-mobile">
              <a href="tel:2896007660" className="btn btn-primary">Call Us Today</a>
            </li>
          </ul>

          <a href="tel:2896007660" className="btn btn-primary nav-cta-desktop">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (289) 600-7660
          </a>

          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
