'use client';

import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { PLAY_STORE_URL } from '@/site.config';

const LINKS = [
  { href: '#reading', label: 'Readings' },
  { href: '#dashas', label: 'Dashas' },
  { href: '#topics', label: 'Life topics' },
  { href: '#spouse', label: 'Marriage' },
  { href: '#everyday', label: 'Every day' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 border-b' : 'py-5'}`}
      style={{ backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Astrocaptain home">
          <Logo />
          <div>
            <span className="font-serif text-xl font-bold tracking-wide">Astrocaptain</span>
            <span className="text-[10px] block tracking-[0.2em] uppercase opacity-60">by Afterday</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Sections">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="opacity-75 hover:opacity-100 transition-opacity">{l.label}</a>
          ))}
        </nav>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex px-4 py-2 rounded-full text-xs font-semibold items-center gap-2 transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
        >
          <Download className="w-3.5 h-3.5" />
          Get the app
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded border"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 border-b shadow-2xl p-6 flex flex-col gap-4 md:hidden"
            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
          >
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium py-1">{l.label}</a>
            ))}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-3 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
            >
              <Download className="w-4 h-4" />
              Download on Google Play
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
