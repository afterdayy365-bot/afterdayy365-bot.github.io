'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Reveal from './Reveal';

const FAQS = [
  {
    q: 'Is Astrocaptain free?',
    a: 'Yes. Every feature in the app is free. It is supported by ads, which you will see between screens and at the bottom of some pages.',
  },
  {
    q: 'How accurate is it?',
    a: 'The planetary positions are calculated with the same astronomical methods professional software uses, with the Lahiri ayanamsa. The readings follow the classical rules of Jyotish. Astrology describes tendencies, not certainties, so treat it as guidance.',
  },
  {
    q: 'What if I do not know my exact birth time?',
    a: 'Enter the closest time you know. The Moon sign, nakshatra, birth-day personality and most dasha readings stay reliable within a few minutes either way. The Ascendant and house readings are the parts most sensitive to the time, especially near the edge of a sign.',
  },
  {
    q: 'Where are my charts stored?',
    a: 'On your phone only. Birth details and saved charts never leave your device; all calculations happen on the phone, and the place search works offline. The app uses the internet only to show ads.',
  },
  {
    q: 'Which languages does it support?',
    a: 'English and Hindi. Every reading, report and notification is available in both, and you can switch any time from Settings.',
  },
  {
    q: 'What is a Sookshma dasha?',
    a: 'The fourth level of the Vimshottari dasha system, lasting from a few days to a few weeks. It shows what the coming days hold, which is why the daily forecast and notifications are built on it.',
  },
  {
    q: 'Can I match two kundlis?',
    a: 'Yes. The Match screen gives Ashtakoota guna milan out of 36, compares Manglik dosha with its cancellations, checks the 7th house and navamsa of both charts, and the balance of malefics between them.',
  },
  {
    q: 'Can I share a report?',
    a: 'Yes. Any chart can be saved or shared as a PDF report in English or Hindi.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 relative border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>FAQ</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">Questions people ask.</h2>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={0.1}>
          <div className="border-t" style={{ borderColor: 'var(--border-color)' }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full py-5 flex items-center justify-between gap-6 text-left" aria-expanded={isOpen}>
                    <span className="font-serif text-xl font-medium">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--accent)' }} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 opacity-80 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
