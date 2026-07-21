/* Stylized brand-colored SVG icons for each tool */

export function SqlIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="8" rx="10" ry="4" fill="#4EA8D1" opacity="0.9"/>
      <path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="#4EA8D1" strokeWidth="2" fill="none"/>
      <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#4EA8D1" strokeWidth="1" fill="none" opacity="0.4"/>
      <ellipse cx="16" cy="24" rx="10" ry="4" stroke="#4EA8D1" strokeWidth="1" fill="none" opacity="0.3"/>
    </svg>
  );
}

export function PythonIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4C10 4 10.5 6.5 10.5 6.5V9.5H16.5V10.5H8S4 10 4 16s3.5 5.5 3.5 5.5H10V19s-.3-2.5 2.5-2.5h5c2 0 3-1.5 3-3V8C20.5 5.5 18 4 16 4zm-3 2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
      <path d="M16 28c6 0 5.5-2.5 5.5-2.5V22.5H15.5V21.5H24s4 .5 4-5.5-3.5-5.5-3.5-5.5H22V13s.3 2.5-2.5 2.5h-5c-2 0-3 1.5-3 3V24c0 2.5 2.5 4 4.5 4zm3-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
    </svg>
  );
}

export function PowerBiIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="6" y="16" width="5" height="12" rx="1.5" fill="#E8B230" opacity="0.6"/>
      <rect x="13" y="10" width="5" height="18" rx="1.5" fill="#E8B230" opacity="0.8"/>
      <rect x="20" y="4" width="5" height="24" rx="1.5" fill="#E8B230"/>
    </svg>
  );
}

export function ExcelIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="3" fill="#217346" opacity="0.15"/>
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="#217346" strokeWidth="1.5" fill="none"/>
      <path d="M10 11l5 5-5 5M17 11l5 5-5 5" stroke="#217346" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TableauIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4v6M16 22v6M4 16h6M22 16h6" stroke="#E97627" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M9 9l3 3M20 20l3 3M9 23l3-3M20 12l3-3" stroke="#E97627" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="16" cy="16" r="2.5" fill="#E97627"/>
    </svg>
  );
}

export function StatsIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <polyline points="4,24 10,16 16,20 22,10 28,14" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="10" cy="16" r="2" fill="#22d3ee" opacity="0.5"/>
      <circle cx="16" cy="20" r="2" fill="#22d3ee" opacity="0.5"/>
      <circle cx="22" cy="10" r="2" fill="#22d3ee" opacity="0.5"/>
    </svg>
  );
}

export function GitIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="8" r="3" stroke="#F05032" strokeWidth="1.5" fill="none"/>
      <circle cx="10" cy="24" r="3" stroke="#F05032" strokeWidth="1.5" fill="none"/>
      <circle cx="22" cy="24" r="3" stroke="#F05032" strokeWidth="1.5" fill="none"/>
      <path d="M16 11v4c0 3-6 6-6 9M16 15c0 3 6 6 6 9" stroke="#F05032" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export function PandasIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="8" y="4" width="4" height="8" rx="1" fill="#150458"/>
      <rect x="8" y="15" width="4" height="4" rx="1" fill="#150458"/>
      <rect x="8" y="22" width="4" height="6" rx="1" fill="#150458"/>
      <rect x="20" y="6" width="4" height="6" rx="1" fill="#E70488"/>
      <rect x="20" y="15" width="4" height="4" rx="1" fill="#E70488"/>
      <rect x="20" y="22" width="4" height="6" rx="1" fill="#E70488"/>
      <rect x="14" y="12" width="4" height="8" rx="1" fill="#ffca00"/>
    </svg>
  );
}
