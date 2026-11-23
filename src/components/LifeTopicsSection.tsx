'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Reveal from './Reveal';

// One line in the style of the app's own readings for each topic.
const TOPICS = [
  { title: 'Marriage', sample: 'Marriage is likely after 27. The spouse is calm and devoted, and life settles well after the wedding.' },
  { title: 'Career', sample: 'Work that involves advising, teaching or managing money suits you best. A rise comes through people senior to you.' },
  { title: 'Wealth', sample: 'Income builds steadily from more than one source. Savings grow faster in the second half of life.' },
  { title: 'Health', sample: 'Generally strong. Look after your eyes and digestion, and keep a regular sleep routine.' },
  { title: 'Property', sample: 'Owning a house comes naturally. Gains from land are likely in the late thirties.' },
  { title: 'Education', sample: 'A sharp memory and a liking for deep subjects. Higher studies go well, with a pause or two along the way.' },
  { title: 'Children', sample: 'Children bring happiness and support. The first child may come a little later than you expect.' },
  { title: 'Family', sample: 'Close to your relatives, though money matters in the family need clear words.' },
  { title: 'Travel', sample: 'Long journeys bring opportunity. Work or study abroad is possible during the Rahu periods.' },
  { title: 'Self', sample: 'Clever, quick-minded and fond of words. Patience is the one habit that changes everything for you.' },
  { title: 'Fortune', sample: 'Luck opens up around 24, and again after marriage. Help from elders and teachers is a recurring theme.' },
];

export default function LifeTopicsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="topics" className="py-28 relative border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>Life by topic</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">Eleven parts of life, one place each.</h2>
          <p className="opacity-75 leading-relaxed">
            Everything the app reads about one subject is gathered in one place, drawn from the house rules, yogas,
            dashas and the classical texts. You read marriage in one place and career in another, instead of hunting
            through twelve houses.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={0.1}>
          <div className="border-t" style={{ borderColor: 'var(--border-color)' }}>
            {TOPICS.map((t, i) => {
              const open = openIndex === i;
              return (
                <div key={t.title} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                  <button onClick={() => setOpenIndex(open ? null : i)} className="w-full py-5 flex items-center justify-between text-left group" aria-expanded={open}>
                    <span className="flex items-baseline gap-5">
                      <span className="text-xs tabular-nums opacity-40">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-serif text-2xl font-medium transition-transform group-hover:translate-x-1">{t.title}</span>
                    </span>
                    {open ? <Minus className="w-4 h-4" style={{ color: 'var(--accent)' }} /> : <Plus className="w-4 h-4 opacity-60" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-10 pr-4 opacity-80 leading-relaxed max-w-2xl">{t.sample}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs opacity-50">Sample lines. Your own chart gives your own reading.</p>
        </Reveal>
      </div>
    </section>
  );
}
