import NricField from '../common/NricField.jsx';

export function PersonalParticularsCard({ p }) {
  const consentRow = p.consent === 'No' ? (
    <span className="v consent-no"><span className="dot-warn" />No</span>
  ) : (
    <span className="v">Yes</span>
  );
  return (
    <div className="card">
      <div className="card-head">
        <div className="ico">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8.5" r="3.8" stroke="currentColor" strokeWidth="1.7" />
            <path d="M5.5 20a6.5 6.5 0 0113 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>
        <h3>Personal Particulars</h3>
      </div>
      <div className="card-body">
        <div className="row"><span className="k">Status</span><span className="v"><span className={'pill ' + p.statusPill}>{p.status}</span></span></div>
        <div className="row"><span className="k">Full name</span><span className="v">{p.name}</span></div>
        <div className="row"><span className="k">NRIC / FIN</span><span className="v"><NricField nric={p.nric} /></span></div>
        <div className="row"><span className="k">Date of birth</span><span className="v">{p.dob} · {p.age} years old</span></div>
        <div className="row"><span className="k">Gender</span><span className="v">{p.gender}</span></div>
        <div className="row"><span className="k">Contact</span><span className="v">{p.phone}</span></div>
        <div className="row"><span className="k">Email address</span><span className="v">{p.email}</span></div>
        <div className="row"><span className="k">Home address</span><span className="v" style={{ textAlign: 'right', maxWidth: '60%' }}>{p.addr1}<br />{p.addr2}</span></div>
        <div className="row"><span className="k">Marketing consent</span>{consentRow}</div>
      </div>
    </div>
  );
}

export function AcquisitionCard({ p }) {
  return (
    <div className="card">
      <div className="card-head">
        <div className="ico">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          </svg>
        </div>
        <h3>Acquisition</h3>
      </div>
      <div className="card-body">
        <div className="row"><span className="k">Channel</span><span className="v"><span className={'pill ' + p.channelPill}>{p.channel}</span></span></div>
        <div className="row"><span className="k">Lead source</span><span className="v">{p.lead}</span></div>
        <div className="row"><span className="k">Acquisition cost</span><span className="v">{p.acqCost}</span></div>
        <div className="row"><span className="k">Total marketing cost <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>(lifetime)</span></span><span className="v">{p.mktCost}</span></div>
        <div className="gauge" style={{ marginTop: 14 }}>
          <div className="top"><span className="lab">Acquisition efficiency (Lifetime Value : Acquisition Cost)</span><span className="num" style={{ color: p.gaugeColor }}>{p.gaugeRatio}</span></div>
          <div className="bar"><span className={p.gaugeFill} style={{ width: p.gaugeWidth + '%' }} /></div>
        </div>
        <div className="row" style={{ border: 0, paddingTop: 4 }}><span className="k" style={{ fontSize: 12.5, color: 'var(--text-tertiary)' }}>{p.acqNote}</span></div>
      </div>
    </div>
  );
}

export function VocCard({ p }) {
  return (
    <div className="card">
      <div className="card-head">
        <div className="ico">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 5.5h16v10H9l-4 3v-3H4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M8.5 10.5h7M8.5 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <h3>Voice of Customer</h3>
      </div>
      <div className="card-body">
        <div className="voc">
          <div className="voc-item">
            <div className="voc-head">
              <span className="voc-label">Last CSAT</span>
              <span className="voc-score" style={p.csatColor ? { color: p.csatColor } : undefined}>{p.csat}<small>/5</small></span>
            </div>
            <div className="bar"><span className={p.csatFill} style={{ width: p.csatPct + '%' }} /></div>
            <span className={'voc-tag ' + p.csatTagC}>{p.csatTag}</span>
          </div>
          <div className="voc-item">
            <div className="voc-head">
              <span className="voc-label">Relationship NPS</span>
              <span className="voc-score" style={{ color: p.relColor }}>{p.relNps}<small>/10</small></span>
            </div>
            <div className="bar"><span className={p.relFill} style={{ width: p.relPct + '%' }} /></div>
            <span className={'voc-tag ' + p.relTagC}>{p.relTag}</span>
          </div>
          <div className="voc-item">
            <div className="voc-head">
              <span className="voc-label">Claims NPS <span className="voc-note">{p.clmNote}</span></span>
              <span className="voc-score" style={{ color: p.clmColor }}>{p.clmNps}<small>/10</small></span>
            </div>
            <div className="bar"><span className={p.clmFill} style={{ width: p.clmPct + '%' }} /></div>
            <span className={'voc-tag ' + p.clmTagC}>{p.clmTag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
