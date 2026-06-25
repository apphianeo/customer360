import { useNavigate } from 'react-router-dom';
import { useStaticSort } from '../../hooks/useStaticSort.js';
import { SortIcon } from '../common/Icons.jsx';

export default function ProfilePolicyTable({ policies, onDemoAction }) {
  const navigate = useNavigate();
  const cellGetters = {
    start: (r) => r[3],
    renewal: (r) => r[4],
    premium: (r) => r[5],
  };
  const { sorted, sort, toggleSort } = useStaticSort(policies, (r, k) => cellGetters[k](r));

  function handleClick(r) {
    if (r[0]) navigate('/policy/' + r[0]);
    else onDemoAction();
  }

  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Policy No.</th>
            <th>Product</th>
            <th className="sortable" style={{ cursor: 'pointer' }} data-dir={sort.key === 'start' ? sort.dir : undefined} onClick={() => toggleSort('start')}><span className="th-in">Start Date<SortIcon /></span></th>
            <th className="sortable" style={{ cursor: 'pointer' }} data-dir={sort.key === 'renewal' ? sort.dir : undefined} onClick={() => toggleSort('renewal')}><span className="th-in">Renewal<SortIcon /></span></th>
            <th className="sortable" style={{ cursor: 'pointer' }} data-dir={sort.key === 'premium' ? sort.dir : undefined} onClick={() => toggleSort('premium')}><span className="th-in">Annual Premium<SortIcon /></span></th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sorted.length ? sorted.map((r, i) => (
            <tr className="clickable" key={i} onClick={() => handleClick(r)}>
              <td><b>{r[1]}</b></td>
              <td>{r[2]}</td>
              <td>{r[3]}</td>
              <td>{r[4]}</td>
              <td>{r[5]}</td>
              <td><span className={'pill ' + r[7]}>{r[6]}</span></td>
              <td><span className="view-link">View</span></td>
            </tr>
          )) : (
            <tr><td colSpan="7" style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: 26 }}>No policies on record.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
