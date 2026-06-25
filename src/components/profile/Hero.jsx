export default function Hero({ p }) {
  const consentFlag = p.consent === 'No' ? (
    <span className="hi flag">
      <svg className="mi" viewBox="0 0 24 24" fill="none">
        <path d="M4 9.5v5h3l8 4.5V5L7 9.5H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M18 9.5a3 3 0 010 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      No marketing consent
    </span>
  ) : null;

  return (
    <div className="hero">
      <div className={'hero-avatar av ' + p.av}>{p.ini}</div>
      <div className="hero-id">
        <div className="hero-name-row">
          <h1>{p.name}</h1>
          <span className={'status-badge ' + p.statusPill}>{p.status}</span>
          <span className="seg-badge">{p.seg}</span>
        </div>
        <div className="hero-info">
          <span className="hi">
            <svg className="mi" viewBox="0 0 24 24" fill="none">
              <circle cx="10" cy="14" r="5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M14 10l5-5m0 0h-3.5M19 5v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {p.gender} · {p.age}
          </span>
          <span className="hi">
            <svg className="mi" viewBox="0 0 24 24" fill="none">
              <path d="M6.5 4h3l1.2 3.5-1.8 1.3a12 12 0 005.3 5.3l1.3-1.8L19 16.5v3a1.5 1.5 0 01-1.6 1.5A14.5 14.5 0 014 6.6 1.5 1.5 0 015.5 5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
            {p.phone}
          </span>
          <span className="hi">
            <svg className="mi" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {p.email}
          </span>
          {consentFlag}
        </div>
      </div>
    </div>
  );
}
