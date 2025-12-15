import React from 'react';

export const Icon: React.FC<{ name: string; className?: string; size?: number }> = ({ name, className, size = 16 }) => {
  const key = (name || '').toLowerCase();

  const common = {
    className: className || 'inline-block',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    width: size,
    height: size,
  } as const;

  if (key.includes('occupation') || key.includes('job')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm4-3h8v3H8V4z" />
      </svg>
    );
  }
  if (key.includes('ability')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (key.includes('activity')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
      </svg>
    );
  }
  if (key.includes('industry') || key.includes('sector')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8l6-3v16M17 21V10l4-2v13" />
      </svg>
    );
  }
  if (key.includes('interest')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.993 20.243l-1.356-1.229C6.02 14.77 3 12.07 3 8.79 3 6.38 4.86 4.5 7.25 4.5c1.43 0 2.81.67 3.743 1.73A5.163 5.163 0 0 1 14.737 4.5c2.39 0 4.263 1.88 4.263 4.29 0 3.28-3.02 5.98-7.637 10.224l-1.37 1.229z" />
      </svg>
    );
  }
  if (key.includes('knowledge')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v12l-4-2-4 2-4-2-4 2V5z" />
      </svg>
    );
  }
  if (key.includes('outlook')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 15l4-4 3 3 5-6" />
      </svg>
    );
  }
  if (key.includes('pathway')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h6a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h2M4 18h8" />
      </svg>
    );
  }
  if (key.includes('preference')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12M4 6h16M8 14h8M10 18h4" />
      </svg>
    );
  }
  if (key.includes('skills')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2 4 4 .5-3 3 .7 4.5-3.7-2.2-3.7 2.2.7-4.5-3-3 4-.5 2-4z" />
      </svg>
    );
  }
  if (key.includes('technology') || key.includes('tech')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8" />
      </svg>
    );
  }
  if (key.includes('traits')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
      </svg>
    );
  }
  if (key.includes('stem')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12M9 6v12m6-12v12M7 21h10" />
      </svg>
    );
  }
  if (key.includes('zone')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
      </svg>
    );
  }
  if (key.includes('activities')) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    );
  }
  // Fallback dot
  return (
    <svg {...common} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};
