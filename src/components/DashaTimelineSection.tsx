'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, BellRing } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// One chart's running periods, nested inside each other, as the app shows them.
const LEVELS = [
  {
    level: 'Mahadasha',
    planet: 'Jupiter',
    period: 'Mar 2014 – Mar 2030',
    text: 'A sixteen-year chapter of growth: learning, teachers, children and a wider outlook on life.',
  },
  {
    level: 'Antardasha',
    planet: 'Mars',
    period: 'Oct 2026 – Sep 2027',
    text: 'Energy rises. A good year to push a project, buy property or settle a long-pending matter.',
  },
  {
    level: 'Pratyantar',
    planet: 'Rahu',
    period: 'Nov 2026 – Jan 2027',
    text: 'Restless weeks. Plans change quickly, so read contracts twice and keep travel flexible.',
  },
  {
    level: 'Sookshma',
    planet: 'Saturn',
    period: 'Running now',
    text: 'A slow, serious few days. Finish what is pending; this is not the week to start something new.',
  },
];

export default function DashaTimelineSection() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const el = track.current!;
      const distance = () => Math.max(0, el.scrollWidth - window.innerWidth + 48);
      gsap.to(el, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="dashas" ref={section} className="relative min-h-screen overflow-hidden border-t flex flex-col justify-center py-24" style={{ borderColor: 'var(--border-color)' }}>
      <div className="px-6 md:px-16 mb-12 max-w-2xl">
        <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>Vimshottari dasha</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 leading-tight">Dashas, down to the day.</h2>
        <p className="opacity-75 leading-relaxed">
          Four levels, each inside the one before. Tap any period in the app to read what it brings,
          and tap any date to jump straight to it.
        </p>
      </div>

      <div className="motion-reduce:overflow-x-auto">
        <div ref={track} className="flex items-stretch gap-6 w-max px-6 md:px-16">
          {LEVELS.map((d, i) => (
            <article
              key={d.level}
              className="w-[300px] sm:w-[360px] min-h-[340px] rounded-2xl p-8 border flex flex-col justify-between"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div>
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] opacity-60">
                    {String(i + 1).padStart(2, '0')} · {d.level}
                  </span>
                </div>
                <h3 className="font-serif text-4xl font-bold mb-2">{d.planet}</h3>
                <p className="text-sm font-medium mb-5" style={{ color: 'var(--accent)' }}>{d.period}</p>
                <p className="text-sm opacity-80 leading-relaxed">{d.text}</p>
              </div>
              {i < LEVELS.length - 1 && (
                <div className="pt-5 mt-6 border-t flex items-center gap-2 text-xs opacity-60" style={{ borderColor: 'var(--border-color)' }}>
                  <span>Inside it: {LEVELS[i + 1].level}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </article>
          ))}

          <article className="w-[300px] sm:w-[360px] min-h-[340px] rounded-2xl p-8 border flex flex-col justify-center" style={{ borderColor: 'var(--accent)' }}>
            <BellRing className="w-6 h-6 mb-5" style={{ color: 'var(--accent)' }} />
            <h3 className="font-serif text-2xl font-bold mb-3">A note when the period turns.</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              The app sends a notification when your Sookshma dasha changes, with a one-line summary of
              the days ahead. Your daily, monthly and yearly forecasts are built on it too.
            </p>
          </article>
        </div>
      </div>

      <p className="px-6 md:px-16 mt-8 text-xs opacity-50">Dates are from a sample chart.</p>
    </section>
  );
}
