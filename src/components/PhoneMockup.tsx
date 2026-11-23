interface PhoneMockupProps {
  screenshotNumber: number;
  altText: string;
  className?: string;
  priority?: boolean;
}

/** A plain phone frame around one of the screenshots in /public/screenshots. */
export default function PhoneMockup({ screenshotNumber, altText, className = '', priority = false }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[260px] h-[540px] md:w-[290px] md:h-[600px] rounded-[40px] p-2.5 shadow-2xl border ${className}`}
      style={{ backgroundColor: '#05060a', borderColor: 'var(--border-color)' }}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-20" />
      <div className="relative w-full h-full rounded-[31px] overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/screenshots/screenshot-${screenshotNumber}.webp`}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  );
}
