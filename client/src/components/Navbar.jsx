import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-text tracking-tight">
          SP<span className="text-white">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-sm font-medium transition-colors"
            >
              <Download size={16} />
              CV
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mx-4 mt-2 rounded-xl p-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-2 text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cvPath}
                download
                onClick={close}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-sm font-medium"
              >
                <Download size={16} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
