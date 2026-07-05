import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { profile } from '../data/profile';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const active = useScrollSpy(NAV_ITEMS.map((i) => i.id));
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNav('home')}
          className="font-semibold tracking-tight text-ink text-lg cursor-pointer"
        >
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNav(item.id)}
                className={`px-3.5 py-2 text-sm rounded-full transition-colors cursor-pointer ${
                  active === item.id
                    ? 'text-ink'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {item.label}
              </button>
              {active === item.id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 bg-accent-soft rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav('contact')}
          className="hidden md:inline-flex items-center rounded-full bg-ink text-paper text-sm font-medium px-4 py-2 hover:bg-accent transition-colors cursor-pointer"
        >
          Let's talk
        </button>

        <button
          className="md:hidden text-ink cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-paper border-b border-line overflow-hidden"
        >
          <ul className="flex flex-col px-6 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left py-3 text-sm cursor-pointer ${
                    active === item.id ? 'text-accent font-medium' : 'text-ink-soft'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
