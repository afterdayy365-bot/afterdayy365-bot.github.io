'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhoneMockup from './PhoneMockup';
import Reveal from './Reveal';

gsap.registerPlugin(ScrollTrigger);

const SCREENS = [
  {
    n: 3,
    title: 'What today suits',
    text: 'Whether today is good for travel, business, property, a vehicle, gold, marriage talks, treatment or studies, with Pushya days, Panchak and disha shool marked.',
  },
  {
    n: 4,
    title: 'Panchang',
    text: 'Tithi, nakshatra, yoga and karana for your place, with sunrise, Rahu kaal, choghadiya and hora through the day.',
  },
  {
    n: 5,
    title: 'Dreams and signs',
    text: 'What a dream means, when it is said to come true, and what to do after a bad one. Body twitching meanings too, all searchable.',
  },
];

export default function EveryDaySection() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
      gsap.from(grid.current!.children, {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: grid.current, start: 'top 80%', once: true },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="everyday" className="py-28 relative border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>Every day</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">For the days in between.</h2>
          <p className="opacity-75 leading-relaxed">
            A daily forecast built on your running Sookshma dasha, and the small questions people ask every day.
          </p>
        </Reveal>

        <div ref={grid} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SCREENS.map(s => (
            <div key={s.n} className="flex flex-col items-center text-center">
              <PhoneMockup screenshotNumber={s.n} altText={s.title} className="!w-[230px] !h-[480px] mb-8" />
              <h3 className="font-serif text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm opacity-75 leading-relaxed max-w-xs">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
