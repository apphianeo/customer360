import { useNavigate, useParams } from 'react-router-dom';
import { POLICIES_FULL, HOLDER, INSURED } from '../data/policyDetails.js';
import PolGrid from '../components/policyDetail/PolGrid.jsx';
import NricField from '../components/common/NricField.jsx';
import { useStaticSort } from '../hooks/useStaticSort.js';
import { SortIcon } from '../components/common/Icons.jsx';

function PersonGrid({ pairs, style }) {
  return (
    <div className="pol-grid" style={style}>
      {pairs.map(([l, v], i) => (
        <div className="pdl" key={i}>
          <span className="pl">{l}</span>
          <span className="pv">{l === 'NRIC/FIN' ? <NricField nric={v} /> : v}</span>
        </div>
      ))}
    </div>
  );
}

export default function PolicyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = POLICIES_FULL[id];

  const payments = p ? p.payments : [];
  const documents = p ? p.documents : [];

  const { sorted: sortedPayments, sort: paySort, toggleSort: togglePaySort } = useStaticSort(
    payments,
    (r) => r[0]
  );
  const { sorted: sortedDocs, sort: docSort, toggleSort: toggleDocSort } = useStaticSort(
    documents,
    (r) => r[2]
  );

  if (!p) {
    return (
      <div className="shell page visible" id="page-policy">
        <p style={{ padding: 24 }}>Policy not found.</p>
      </div>
    );
  }

  return (
    <div className="shell page visible" id="page-policy">
      <div className="crumbs">
        <a onClick={() => navigate('/')}>Overview</a><span>›</span>
        <a onClick={() => navigate('/profile/jt')}>Customer Profile (John Tan)</a><span>›</span>
        <span id="pol-crumb">{p.title}</span>
      </div>

      {p.banner && (
        <div className="pol-banner" id="pol-banner" style={{ display: 'flex' }}>
          <div className="bi">!</div>
          <div>
            <div className="t" id="pol-banner-t">{p.banner.t}</div>
            <div className="d" id="pol-banner-d">{p.banner.d}</div>
          </div>
          <button className="btn">Fill details</button>
        </div>
      )}

      <div className="pol-hero">
        <div className="pol-hero-main">
          <div className="pol-title-row">
            <h1 id="pol-title">{p.title}</h1>
            <span className="badge-inforce" id="pol-status">{p.status}</span>
          </div>
          <div className="pol-sub">Policy Number: <b id="pol-no">{p.policyNo}</b></div>
          <div className="pol-sub" id="pol-plan" dangerouslySetInnerHTML={{ __html: p.plan }} />
        </div>
        <div className="pol-actions">
          <button className="icon-btn" title="Download policy document">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="btn btn-primary">Submit Claim</button>
        </div>
      </div>

      <div className="card pol-section">
        <div className="card-head"><h3>Policy Details</h3></div>
        <PolGrid pairs={p.details} />
        <div className="pol-note">For more information about this policy, please refer to the <a href="#">policy wording</a>.</div>
      </div>

      <div className="card pol-section">
        <div className="card-head"><h3>Policyholder Details</h3></div>
        <PersonGrid pairs={HOLDER} />
      </div>

      <div className="card pol-section">
        <div className="card-head"><h3>Insured Details</h3></div>
        <div className="insured-block">
          <h4>Insured 1 (Adult)</h4>
          <PersonGrid pairs={INSURED} style={{ padding: 0 }} />
        </div>
      </div>

      <div className="card pol-section">
        <div className="card-head"><h3>Payment History</h3></div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th className="sortable" style={{ cursor: 'pointer' }} data-dir={paySort.key === 'date' ? paySort.dir : undefined} onClick={() => togglePaySort('date')}><span className="th-in">Transaction Date<SortIcon /></span></th>
                <th>Type</th><th>Premium</th><th>Payment Method</th><th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedPayments.map(([dt, ty, pr, pm, st], i) => (
                <tr key={i}>
                  <td>{dt}</td><td>{ty}</td><td>{pr}</td><td>{pm}</td>
                  <td><span className={'pill ' + st.cls}>{st.t}</span></td>
                  <td><span className="view-link">Download</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card pol-section">
        <div className="card-head"><h3>Documents</h3></div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Document</th><th>Type</th>
                <th className="sortable" style={{ cursor: 'pointer' }} data-dir={docSort.key === 'date' ? docSort.dir : undefined} onClick={() => toggleDocSort('date')}><span className="th-in">Date<SortIcon /></span></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedDocs.map(([dc, ty, dt], i) => (
                <tr key={i}>
                  <td>{dc}</td><td>{ty}</td><td>{dt}</td>
                  <td><span className="view-link">Download</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card pol-section">
        <div className="card-head"><h3>Policy Contact</h3></div>
        <div className="pol-note" style={{ padding: '16px 20px 0' }}>All policy documents will be sent to the contact information tied to this specific policy.</div>
        <PolGrid pairs={p.contact} />
      </div>

      <div className="card pol-section">
        <div className="card-head"><h3>Others</h3></div>
        <div className="pol-note" style={{ padding: '16px 20px 0' }}>If this policy is purchased via an agent, please contact the agent for any updates or changes to the policy.</div>
        <PolGrid pairs={p.others} />
      </div>

      <div className="cancel-row">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
        Request Cancellation
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--text-tertiary)', margin: '6px 4px 26px' }}>
        For any amendments to your policy, please contact <a href="#" style={{ color: 'var(--text-link)', fontWeight: 600 }}>help@uoi.com.sg</a>.
      </div>
    </div>
  );
}
