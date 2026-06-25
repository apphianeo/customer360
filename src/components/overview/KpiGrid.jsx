export default function KpiGrid() {
  return (
    <div className="kpis">
      <div className="kpi">
        <div className="kpi-top">
          <div className="label">Total Customers</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
              <path d="M3.5 19a5.5 5.5 0 0111 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M16 5.2a3.2 3.2 0 010 5.6M20.5 19a5.5 5.5 0 00-3.8-5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <div className="value">2,418</div>
        <div className="sub"><strong>+34</strong> this month</div>
      </div>
      <div className="kpi teal">
        <div className="kpi-top">
          <div className="label">Avg Lifetime Value</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
              <path d="M14.5 9c-.5-.7-1.5-1.1-2.5-1.1-1.4 0-2.5.8-2.5 1.9 0 1.2 1.1 1.7 2.5 2s2.5.8 2.5 2c0 1.1-1.1 1.9-2.5 1.9-1 0-2-.4-2.5-1.1M12 6.5v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <div className="value">$1,260</div>
        <div className="sub">Paid premiums per customer</div>
      </div>
      <div className="kpi purple">
        <div className="kpi-top">
          <div className="label">Active Policies</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 3.5h7L18.5 8v12.5h-11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M13.5 3.5V8h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="value">4,907</div>
        <div className="sub">2.0 per customer avg</div>
      </div>
      <div className="kpi danger">
        <div className="kpi-top">
          <div className="label">Avg Claim Cycle</div>
          <span className="kpi-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="value">11.8 days</div>
        <div className="sub"><span className="trend-bad">▲ 10%</span> longer vs last month</div>
      </div>
    </div>
  );
}
