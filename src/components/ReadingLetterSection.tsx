'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Reveal from './Reveal';

export default function ReadingLetterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="reading" className="py-28 relative border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>Plain-language readings</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">Read it like a letter, not a puzzle.</h2>
          <p className="opacity-75 leading-relaxed mb-4">
            Most astrology apps hand you tables of houses, degrees and lords and leave you to work out what they mean.
            Astrocaptain tells you the result first, in words you would use yourself.
          </p>
          <p className="opacity-75 leading-relaxed">
            The planetary reasons are never hidden, just folded away under{' '}
            <span className="font-medium" style={{ color: 'var(--accent)' }}>Why: the planetary condition</span>. Open it when you are curious.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <article className="rounded-2xl p-8 sm:p-10 border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
            <div className="flex items-center justify-between mb-8 text-[11px] uppercase tracking-[0.2em] opacity-50">
              <span>Sample reading</span>
              <span>Home and property</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-5 leading-snug">
              Your home life is settled, and owning a house or land comes naturally to you.
            </h3>
            <ul className="space-y-3 opacity-90 leading-relaxed mb-8">
              <li>Peace of mind comes from family and a steady routine; the mother is a source of support.</li>
              <li>Gains from property are likely, especially in the second half of your thirties.</li>
              <li>Decisions about the house work best when they are made slowly, not in a rush.</li>
            </ul>

            <div className="border-t pt-5" style={{ borderColor: 'var(--border-color)' }}>
              <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left py-1" aria-expanded={open}>
                <span className="font-serif text-lg font-medium">Why: the planetary condition</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} style={{ color: 'var(--accent)' }} />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="pt-4 text-sm opacity-75 leading-relaxed space-y-2">
                      <li>Moon in the 4th house, in Taurus, where it is exalted.</li>
                      <li>Jupiter in the 10th house aspects the 4th.</li>
                      <li>The 4th house holds 34 points in Ashtakavarga, well above the average of 28.</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
