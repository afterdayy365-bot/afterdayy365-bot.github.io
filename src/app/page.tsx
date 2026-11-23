'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ReadingLetterSection from '@/components/ReadingLetterSection';
import DashaTimelineSection from '@/components/DashaTimelineSection';
import LifeTopicsSection from '@/components/LifeTopicsSection';
import SpouseMarriageSection from '@/components/SpouseMarriageSection';
import EveryDaySection from '@/components/EveryDaySection';
import LanguageThemeBar from '@/components/LanguageThemeBar';
import FaqSection from '@/components/FaqSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const THEMES = ['dark', 'black', 'light', 'softwhite'];

export default function Page() {
  const [theme, setTheme] = useState('dark');

  // Restore the visitor's theme. Storage can be unavailable (private mode), so failures are ignored.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('astrocaptain-theme');
      if (saved && THEMES.includes(saved)) setTheme(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
    try { localStorage.setItem('astrocaptain-theme', theme); } catch {}
  }, [theme]);

  // Smooth scrolling, driven by GSAP's ticker so the pinned dasha section stays in sync.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // In-page links (#dashas, #faq …) scroll through Lenis instead of jumping.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href')!;
      e.preventDefault();
      lenis.scrollTo(id === '#' ? 0 : id, { offset: -72 });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ReadingLetterSection />
        <DashaTimelineSection />
        <LifeTopicsSection />
        <SpouseMarriageSection />
        <EveryDaySection />
        <LanguageThemeBar currentTheme={theme} onThemeChange={setTheme} />
        <FaqSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
