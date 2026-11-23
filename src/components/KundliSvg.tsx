'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/*
 * A North Indian chart: the outer square, its two diagonals and the diamond joining the mid-points
 * of the sides. That gives the twelve houses, numbered anticlockwise from the top diamond (house 1).
 */
const HOUSES: [number, number, number][] = [
  [1, 200, 128], [2, 125, 82], [3, 82, 125], [4, 128, 200], [5, 82, 278], [6, 125, 322],
  [7, 200, 274], [8, 275, 322], [9, 318, 278], [10, 272, 200], [11, 318, 125], [12, 275, 82],
];

export default function KundliSvg() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const lines = svg.querySelectorAll<SVGGeometryElement>('.kl');
      lines.forEach(l => {
        const len = l.getTotalLength();
        gsap.set(l, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(lines, { strokeDashoffset: 0, duration: 1.8, stagger: 0.15, ease: 'power2.inOut', delay: 0.2 });
      gsap.from(svg.querySelectorAll('.hn'), { opacity: 0, duration: 0.6, stagger: 0.05, delay: 1.6 });
      gsap.to(svg, { rotate: 0.6, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    });
    return () => mm.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      className="w-[440px] h-[440px] md:w-[600px] md:h-[600px] opacity-[0.16]"
      style={{ stroke: 'var(--accent)', fill: 'none', strokeWidth: 1.2 }}
      aria-hidden="true"
    >
      <rect className="kl" x="40" y="40" width="320" height="320" />
      <line className="kl" x1="40" y1="40" x2="360" y2="360" />
      <line className="kl" x1="360" y1="40" x2="40" y2="360" />
      <polygon className="kl" points="200,40 360,200 200,360 40,200" />
      {HOUSES.map(([n, x, y]) => (
        <text key={n} className="hn" x={x} y={y} fill="var(--accent)" stroke="none" fontSize="13" textAnchor="middle" dominantBaseline="middle"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {n}
        </text>
      ))}
    </svg>
  );
}
