import PhoneMockup from './PhoneMockup';
import Reveal from './Reveal';

const POINTS = [
  { title: 'Who the spouse is', text: 'Their nature, looks and background, read from the 7th house, its lord, Venus or Jupiter, and the navamsa.' },
  { title: 'Love or arranged', text: 'Whether the chart leans towards a love marriage, and what helps it succeed.' },
  { title: 'When', text: 'The dasha periods and years when marriage is most likely, with what can delay it.' },
  { title: 'Manglik, properly checked', text: 'Mars dosha from the Ascendant, Moon and Venus, with every classical cancellation applied.' },
  { title: 'Kundli matching', text: 'Ashtakoota guna milan, Manglik comparison and the balance of malefics between the two charts.' },
  { title: 'Married life', text: 'Harmony at home, what each partner brings, and the habits that keep a marriage steady.' },
];

export default function SpouseMarriageSection() {
  return (
    <section id="spouse" className="py-28 relative border-t overflow-hidden" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--accent)' }}>Spouse and marriage</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">The question everyone asks first.</h2>
            <p className="opacity-75 leading-relaxed mb-12 max-w-xl">
              Everything the chart says about your partner and your marriage has its own tab, so it never gets lost among
              career and health readings.
            </p>
          </Reveal>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <dt className="font-serif text-xl font-semibold mb-2 pb-2 border-b" style={{ borderColor: 'var(--border-color)' }}>{p.title}</dt>
                <dd className="text-sm opacity-75 leading-relaxed">{p.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal className="lg:col-span-5 flex justify-center" delay={0.1}>
          <PhoneMockup screenshotNumber={2} altText="Astrocaptain spouse and marriage screen" />
        </Reveal>
      </div>
    </section>
  );
}
