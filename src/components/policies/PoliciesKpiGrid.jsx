export default function PoliciesKpiGrid() {
  return (
    <div className="kpis">
      <div className="kpi">
        <div className="kpi-top">
          <div className="label">Total Policies</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 3.5h7L18.5 8v12.5h-11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M13.5 3.5V8h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="value">4,907</div>
        <div className="sub">Across 2,418 customers</div>
      </div>
      <div className="kpi teal">
        <div className="kpi-top">
          <div className="label">In Force</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M8.5 12.2l2.4 2.4 4.6-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="value">4,512</div>
        <div className="sub">92% of total book</div>
      </div>
      <div className="kpi danger">
        <div className="kpi-top">
          <div className="label">Expiring ≤ 60 days</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="value">268</div>
        <div className="sub">Renewal outreach due</div>
      </div>
      <div className="kpi purple">
        <div className="kpi-top">
          <div className="label">Annual Premium</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
              <path d="M14.5 9c-.5-.7-1.5-1.1-2.5-1.1-1.4 0-2.5.8-2.5 1.9 0 1.2 1.1 1.7 2.5 2s2.5.8 2.5 2c0 1.1-1.1 1.9-2.5 1.9-1 0-2-.4-2.5-1.1M12 6.5v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <div className="value">$6.2M</div>
        <div className="sub">In-force gross written</div>
      </div>
    </div>
  );
}
