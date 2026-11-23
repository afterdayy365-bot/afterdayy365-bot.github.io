/** The North Indian kundli diamond, drawn small, used as the brand mark. */
export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" style={{ stroke: 'var(--accent)', fill: 'none', strokeWidth: 1.6 }}>
      <rect x="3" y="3" width="34" height="34" rx="2" />
      <path d="M3 3 L37 37 M37 3 L3 37" />
      <path d="M20 3 L37 20 L20 37 L3 20 Z" />
      <circle cx="20" cy="11.5" r="1.8" style={{ fill: 'var(--accent)', stroke: 'none' }} />
    </svg>
  );
}
