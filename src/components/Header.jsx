import { useState, useEffect } from 'react';
import { navLinks } from '../data/siteData';
import { images } from '../data/images';

export default function Header({ currentPath }) {
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

  const isActive = (href) => {
    const path = typeof window !== 'undefined' ? window.location.pathname : currentPath;
    return path === href || (href !== '/' && path.startsWith(href));
  };

  const linkClass = (href) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive(href) ? 'text-gold-400' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? 'bg-navy-900'
            : scrolled
              ? 'bg-navy-800/95 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <a href="/" className="relative z-[60] flex items-center gap-2">
            <img src={images.logo} alt="CDS" className="h-8 md:h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="/tools" className="hidden md:inline-flex btn-primary text-sm px-5 py-2">
            Join Free
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-[60] w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[55] bg-navy-900 flex flex-col items-center justify-center gap-6 transition-all duration-300 md:hidden ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-2xl font-semibold transition-colors duration-200 py-1 ${
              isActive(link.href) ? 'text-gold-400' : 'text-gray-200 hover:text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/tools"
          onClick={() => setMobileOpen(false)}
          className="btn-primary mt-4 text-lg px-8 py-3"
        >
          Join Free
        </a>
      </div>
    </>
  );
}
