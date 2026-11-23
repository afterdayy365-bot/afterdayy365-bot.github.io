import { Download } from 'lucide-react';
import Logo from './Logo';
import Reveal from './Reveal';
import { PLAY_STORE_URL } from '@/site.config';

export default function DownloadSection() {
  return (
    <section className="py-32 border-t text-center relative overflow-hidden" style={{ borderColor: 'var(--border-color)' }}>
      <Reveal className="max-w-2xl mx-auto px-6 flex flex-col items-center">
        <Logo size={56} />
        <h2 className="font-serif text-4xl sm:text-6xl font-bold mt-8 mb-6 leading-tight">Open your kundli tonight.</h2>
        <p className="opacity-75 leading-relaxed mb-10 max-w-lg">
          Free on Google Play. Enter your birth details once, and your chart, dashas and daily guidance are ready in seconds.
        </p>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-3 transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}
        >
          <Download className="w-4 h-4" />
          Get it on Google Play
        </a>
        <p className="mt-6 text-xs opacity-50">Android 8.0 and above</p>
      </Reveal>
    </section>
  );
}
