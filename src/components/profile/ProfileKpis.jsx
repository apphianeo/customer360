export default function ProfileKpis({ p }) {
  return (
    <div className="kpis">
      <div className="kpi">
        <div className="kpi-top">
          <div className="label">Lifetime Value</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
              <path d="M14.5 9c-.5-.7-1.5-1.1-2.5-1.1-1.4 0-2.5.8-2.5 1.9 0 1.2 1.1 1.7 2.5 2s2.5.8 2.5 2c0 1.1-1.1 1.9-2.5 1.9-1 0-2-.4-2.5-1.1M12 6.5v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <div className="value">{p.ltv}</div>
        <div className="sub">Paid premiums to date</div>
      </div>
      <div className="kpi teal">
        <div className="kpi-top">
          <div className="label">Net Contribution</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 16l5-5 4 4 7-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 8h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="value">{p.net}</div>
        <div className="sub"><strong>{p.netPct}</strong> retained after costs</div>
      </div>
      <div className="kpi purple">
        <div className="kpi-top">
          <div className="label">Lifetime Value : Acquisition Cost</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="12" cy="12" r="1.2" fill="currentColor" />
            </svg>
          </span>
        </div>
        <div className="value" dangerouslySetInnerHTML={{ __html: p.ratio }} />
        <div className="sub" dangerouslySetInnerHTML={{ __html: p.ratioNote }} />
      </div>
      <div className="kpi danger">
        <div className="kpi-top">
          <div className="label">Claim Cycle</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 4.5l8.5 14.5h-17z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M12 10v4M12 16.7h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <div className="value">{p.cycle}</div>
        <div className="sub" dangerouslySetInnerHTML={{ __html: p.cycleSub }} />
      </div>
    </div>
  );
}
