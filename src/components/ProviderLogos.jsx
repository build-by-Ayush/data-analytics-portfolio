/* Stylized provider logo SVGs for certificate cards */

export function GoogleLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M14.3 11.8v4.7h6.6c-.3 1.5-1.1 2.7-2.3 3.5l3.7 2.9c2.2-2 3.4-5 3.4-8.5 0-.8-.1-1.6-.2-2.3h-11.2v-.3z" fill="#4285F4"/>
      <path d="M6.3 16.6l-.8.6-2.9 2.3C4.8 23.5 9.1 26 14.3 26c3.5 0 6.4-1.2 8.5-3.1l-3.7-2.9c-1.1.7-2.6 1.2-4.8 1.2-3.7 0-6.8-2.5-7.9-5.8l-.1.2z" fill="#34A853"/>
      <path d="M2.6 19.5c-1-2-1.6-4.2-1.6-6.5s.6-4.5 1.6-6.5l3.7 2.9c-.4 1.1-.7 2.3-.7 3.6s.2 2.5.7 3.6l-3.7 2.9z" fill="#FBBC05"/>
      <path d="M14.3 5.2c2.1 0 3.9.7 5.4 2.1l4-4C21.5 1.3 18.3 0 14.3 0 9.1 0 4.8 2.5 2.6 6.5l3.7 2.9c1.1-3.3 4.2-4.2 8-4.2z" fill="#EA4335"/>
    </svg>
  );
}

export function MicrosoftLogo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
      <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
    </svg>
  );
}

export function DatacampLogo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 8l10 6 10-6-10-6z" fill="#03EF62" opacity="0.9"/>
      <path d="M2 16l10 6 10-6" stroke="#03EF62" strokeWidth="2" fill="none" opacity="0.6"/>
      <path d="M2 12l10 6 10-6" stroke="#03EF62" strokeWidth="2" fill="none" opacity="0.8"/>
    </svg>
  );
}

export function UdemyLogo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#A435F0" opacity="0.15"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="#A435F0" strokeWidth="1.5" fill="none"/>
      <path d="M9 8v5c0 1.7 1.3 3 3 3s3-1.3 3-3V8" stroke="#A435F0" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
