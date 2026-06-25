import { useEffect } from 'react';

export default function ClaimModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={'modal-overlay' + (open ? ' open' : '')}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal modal-wide">
        <div className="modal-head">
          <h3>Claim CLM-2026-0147</h3>
          <button className="x" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M16 1.02126L14.9787 0L7.99998 6.97877L1.02126 0L0 1.0213L6.97872 8.00002L0.000338 14.9784L1.02159 15.9997L7.99998 9.02128L14.9784 15.9997L15.9997 14.9785L9.02123 8.00002L16 1.02126Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="clm-meta">
            <div><span className="clm-meta-l">Policy</span><span className="clm-meta-v">UOI-TRV-10422 · UniTravel</span></div>
            <div><span className="clm-meta-l">Type</span><span className="clm-meta-v">Travel — baggage delay</span></div>
            <div><span className="clm-meta-l">Amount paid</span><span className="clm-meta-v">$120</span></div>
            <div><span className="clm-meta-l">Outcome</span><span className="clm-meta-v"><span className="pill green">Paid</span></span></div>
          </div>

          <div className="clm-stats">
            <div className="clm-stat"><div className="clm-stat-n">14</div><div className="clm-stat-l">days, end to end</div></div>
            <div className="clm-stat warn"><div className="clm-stat-n">7</div><div className="clm-stat-l">days waiting for payout</div></div>
            <div className="clm-stat bad"><div className="clm-stat-n">3<span>/10</span></div><div className="clm-stat-l">customer satisfaction</div></div>
          </div>

          <div className="modal-sec">Claim journey</div>
          <div className="clm-journey">
            <div className="cj-step">
              <div className="cj-rail"><span className="cj-dot" /><span className="cj-bar" /></div>
              <div className="cj-content">
                <div className="cj-row"><span className="cj-title">Claim submitted</span><span className="cj-date">11 Jun 2026</span></div>
                <div className="cj-sub">John filed the baggage-delay claim online.</div>
              </div>
            </div>
            <div className="cj-step">
              <div className="cj-rail"><span className="cj-dot" /><span className="cj-bar" /></div>
              <div className="cj-content">
                <div className="cj-row"><span className="cj-title">Claim reviewed</span><span className="cj-date">15 Jun 2026</span></div>
                <div className="cj-sub">Assessor completed review. <span className="cj-gap ok">4 days</span></div>
              </div>
            </div>
            <div className="cj-step">
              <div className="cj-rail"><span className="cj-dot" /><span className="cj-bar" /></div>
              <div className="cj-content">
                <div className="cj-row"><span className="cj-title">Outcome shared</span><span className="cj-date">18 Jun 2026</span></div>
                <div className="cj-sub">Approval communicated to John. <span className="cj-gap ok">3 days</span></div>
              </div>
            </div>
            <div className="cj-step last">
              <div className="cj-rail"><span className="cj-dot bad" /></div>
              <div className="cj-content">
                <div className="cj-row"><span className="cj-title">Payment received</span><span className="cj-date">25 Jun 2026</span></div>
                <div className="cj-sub">Funds reached John's account. <span className="cj-gap bad">7 days — the bottleneck</span></div>
              </div>
            </div>
          </div>

          <div className="clm-callout">
            <span className="clm-callout-i">!</span>
            <div>Approval took 7 days, but <b>payment took another 7</b> — half the total cycle was spent after the claim was already approved. This payment-handoff delay is the main driver of the low satisfaction score.</div>
          </div>

          <div className="modal-foot">
            <button className="btn-text" onClick={onClose}>Close</button>
            <button className="btn-confirm" onClick={onClose}>View full claim</button>
          </div>
        </div>
      </div>
    </div>
  );
}
