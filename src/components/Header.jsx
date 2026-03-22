import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-gold-400' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-800/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="gradient-text text-2xl font-bold tracking-wide">
          CDS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link to="/tools" className="hidden md:inline-flex btn-primary text-sm px-5 py-2">
          Join Free
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-semibold transition-colors duration-200 ${
                  isActive ? 'text-gold-400' : 'text-gray-200 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/tools"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4 text-lg px-8 py-3"
          >
            Join Free
          </Link>
        </div>
      )}
    </header>
  );
}
