import Logo from './Logo';
import { CONTACT_EMAIL, DEVELOPER, PLAY_STORE_URL } from '@/site.config';

export default function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="font-serif text-lg font-bold">Astrocaptain</div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">by {DEVELOPER}</div>
          </div>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100">Google Play</a>
          <a href="/privacy/" className="opacity-75 hover:opacity-100">Privacy policy</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="opacity-75 hover:opacity-100">{CONTACT_EMAIL}</a>
        </nav>

        <div className="text-xs opacity-60 leading-relaxed md:text-right">
          <p>Astrology is traditional guidance, not a substitute for professional medical, legal or financial advice.</p>
          <p className="mt-2">Free, with ads.</p>
          <p className="mt-2">© {new Date().getFullYear()} {DEVELOPER}</p>
        </div>
      </div>
    </footer>
  );
}
