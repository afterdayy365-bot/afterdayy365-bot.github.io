'use client';

import { useEffect, useRef } from 'react';
import { Download, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import KundliSvg from './KundliSvg';
import PhoneMockup from './PhoneMockup';
import { PLAY_STORE_URL } from '@/site.config';

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const split = new SplitText('.hero-title', { type: 'lines', mask: 'lines' });
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(split.lines, { yPercent: 100, duration: 0.9, stagger: 0.1 })
        .from('.hero-fade', { y: 18, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
        .from('.hero-phone', { y: 40, opacity: 0, duration: 0.9 }, '-=0.7');
      return () => split.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[8%] z-0">
        <KundliSvg />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <p className="hero-fade text-xs font-medium tracking-[0.25em] uppercase mb-6" style={{ color: 'var(--accent)' }}>
            Vedic astrology · by Afterday
          </p>

          <h1 className="hero-title font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Your kundli, explained in plain words.
          </h1>

          <p className="hero-fade text-base sm:text-lg max-w-xl opacity-80 mb-10 leading-relaxed">
            Enter your birth date, time and place. Astrocaptain reads your chart the way a good astrologer
            would talk to you: the result first, in simple language, with the planetary reasons kept one tap
            away for when you want them.
          </p>

          <div className="hero-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
            >
              <Download className="w-4 h-4" />
              Get it on Google Play
            </a>
            <div className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium opacity-80">
              <ShieldCheck className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              Free, with ads · Charts stay on your phone
            </div>
          </div>
        </div>

        <div className="hero-phone lg:col-span-5 flex justify-center">
          <PhoneMockup screenshotNumber={1} altText="Astrocaptain kundli screen" priority />
        </div>
      </div>
    </section>
  );
}
