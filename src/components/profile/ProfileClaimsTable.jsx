export default function ProfileClaimsTable({ claims, onOpenClaim, onDemoAction }) {
  function handleClick(r) {
    if (r[12]) onOpenClaim();
    else onDemoAction();
  }
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Claim Ref</th><th>Policy</th><th>Type</th><th>Submitted</th><th>Paid</th>
            <th>Amount Paid</th><th>Cycle</th><th>Claims NPS</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {claims.length ? claims.map((r, i) => {
            const cycStyle = r[7] ? { color: 'var(--status-error)', fontWeight: 700 } : undefined;
            const npsStyle = r[9] ? { color: 'var(--status-error)', fontWeight: 700 } : undefined;
            return (
              <tr className="clickable" key={i} onClick={() => handleClick(r)}>
                <td><b>{r[0]}</b></td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td>{r[4]}</td>
                <td>{r[5]}</td>
                <td style={cycStyle}>{r[6]}</td>
                <td style={npsStyle}>{r[8]}</td>
                <td><span className={'pill ' + r[11]}>{r[10]}</span></td>
                <td><span className="view-link">View Timeline</span></td>
              </tr>
            );
          }) : (
            <tr><td colSpan="10" style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: 26 }}>No claims on record.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
