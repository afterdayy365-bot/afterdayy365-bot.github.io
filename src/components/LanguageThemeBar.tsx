'use client';

import Reveal from './Reveal';

const THEMES = [
  { id: 'light', label: 'Light', bg: '#fcfbfa', card: '#f5f2ed', text: '#151921', accent: '#1f6f4a' },
  { id: 'softwhite', label: 'Soft white', bg: '#f5f2ed', card: '#e6dfd5', text: '#1f1a17', accent: '#1f6f4a' },
  { id: 'dark', label: 'Dark', bg: '#0d0f14', card: '#151921', text: '#fcfbfa', accent: '#c9a227' },
  { id: 'black', label: 'Black', bg: '#000000', card: '#0a0a0a', text: '#ffffff', accent: '#c9a227' },
];

interface Props {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

/** A tiny drawing of a reading screen in each theme. Clicking one recolours this page too. */
function MiniPhone({ t, active }: { t: (typeof THEMES)[number]; active: boolean }) {
  return (
    <div className="w-[120px] h-[220px] rounded-[22px] p-1.5 border transition-transform" style={{ backgroundColor: '#05060a', borderColor: active ? 'var(--accent)' : 'var(--border-color)' }}>
      <div className="w-full h-full rounded-[17px] p-3 flex flex-col gap-2 overflow-hidden" style={{ backgroundColor: t.bg }}>
        <div className="h-2 w-14 rounded-full" style={{ backgroundColor: t.accent }} />
        <div className="h-1.5 w-20 rounded-full opacity-60" style={{ backgroundColor: t.text }} />
        <div className="mt-1 rounded-lg p-2 flex flex-col gap-1.5" style={{ backgroundColor: t.card }}>
          <div className="h-1.5 w-full rounded-full opacity-70" style={{ backgroundColor: t.text }} />
          <div className="h-1.5 w-4/5 rounded-full opacity-50" style={{ backgroundColor: t.text }} />
          <div className="h-1.5 w-3/5 rounded-full opacity-50" style={{ backgroundColor: t.text }} />
        </div>
        <div className="rounded-lg p-2 flex flex-col gap-1.5" style={{ backgroundColor: t.card }}>
          <div className="h-1.5 w-full rounded-full opacity-70" style={{ backgroundColor: t.text }} />
          <div className="h-1.5 w-2/3 rounded-full opacity-50" style={{ backgroundColor: t.text }} />
        </div>
        <svg viewBox="0 0 40 40" className="mt-auto mx-auto w-12 h-12" style={{ stroke: t.accent, fill: 'none', strokeWidth: 1.4 }}>
          <rect x="3" y="3" width="34" height="34" />
          <path d="M3 3 L37 37 M37 3 L3 37 M20 3 L37 20 L20 37 L3 20 Z" />
        </svg>
      </div>
    </div>
  );
}

export default function LanguageThemeBar({ currentTheme, onThemeChange }: Props) {
  return (
    <section className="py-28 border-t" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>Made to be comfortable</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">English or Hindi. Day or night.</h2>
          <p className="opacity-75 leading-relaxed mb-4">
            Every reading in the app is available in both English and Hindi, and you can switch at any time from Settings.
          </p>
          <p className="opacity-75 leading-relaxed">
            Four themes, with a gold or green accent. Try them here: tap a phone and this page changes with it.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="flex flex-wrap justify-center lg:justify-end gap-5">
            {THEMES.map(t => {
              const active = currentTheme === t.id;
              return (
                <button key={t.id} onClick={() => onThemeChange(t.id)} className="flex flex-col items-center gap-3 group" aria-pressed={active}>
                  <div className={`transition-transform ${active ? '-translate-y-2' : 'group-hover:-translate-y-1'}`}>
                    <MiniPhone t={t} active={active} />
                  </div>
                  <span className={`text-xs font-medium ${active ? '' : 'opacity-60'}`} style={active ? { color: 'var(--accent)' } : undefined}>{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
