import { useMemo, useState } from 'react';
import { useStaticSort } from '../../hooks/useStaticSort.js';
import { SortIcon } from '../common/Icons.jsx';
import FilterDropdown from '../common/FilterDropdown.jsx';

function ynCell(v) {
  if (v === '—' || v === '') return '—';
  return <span className={'yn ' + (v === 'Yes' ? 'y' : 'n')}>{v}</span>;
}

export default function ServiceTable({ svc }) {
  const [dirFilter, setDirFilter] = useState([]);
  const [agentFilter, setAgentFilter] = useState([]);

  const filtered = useMemo(() => {
    return svc.filter((r) =>
      (dirFilter.length === 0 || dirFilter.includes(r[1])) &&
      (agentFilter.length === 0 || agentFilter.includes(r[5]))
    );
  }, [svc, dirFilter, agentFilter]);

  const cellGetters = { date: (r) => r[0], turnaround: (r) => r[8], csat: (r) => r[9] };
  const { sorted, sort, toggleSort } = useStaticSort(filtered, (r, k) => cellGetters[k](r));

  const agents = ['Rayson Heng', 'Pollin Prema', 'System'];

  function toggle(setFn, val) {
    setFn((prev) => (prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]));
  }

  const total = svc.length;
  const shown = sorted.length;

  return (
    <div className="table-scroll">
      <table id="svc-table">
        <colgroup>
          <col style={{ width: 90 }} /><col style={{ width: 86 }} /><col style={{ width: 78 }} /><col style={{ width: 160 }} />
          <col style={{ width: 88 }} /><col style={{ width: 100 }} /><col style={{ width: 128 }} /><col style={{ width: 132 }} />
          <col style={{ width: 112 }} /><col style={{ width: 56 }} />
        </colgroup>
        <thead>
          <tr>
            <th className="sortable" style={{ cursor: 'pointer' }} data-dir={sort.key === 'date' ? sort.dir : undefined} onClick={() => toggleSort('date')}><span className="th-in">Date<SortIcon /></span></th>
            <FilterDropdown
              label="Direction"
              options={['Inbound', 'Outbound']}
              selected={dirFilter}
              onToggle={(v) => toggle(setDirFilter, v)}
              onClear={() => setDirFilter([])}
            />
            <th>Channel</th>
            <th>Contact Reason</th>
            <th>Product</th>
            <FilterDropdown
              label="Agent"
              options={agents}
              selected={agentFilter}
              onToggle={(v) => toggle(setAgentFilter, v)}
              onClear={() => setAgentFilter([])}
            />
            <th><span className="clamp2">Within Service Level</span></th>
            <th><span className="clamp2">First Contact Resolution</span></th>
            <th className="sortable" style={{ cursor: 'pointer' }} data-dir={sort.key === 'turnaround' ? sort.dir : undefined} onClick={() => toggleSort('turnaround')}><span className="th-in"><span className="clamp2">Turnaround Time</span><SortIcon /></span></th>
            <th className="sortable" style={{ cursor: 'pointer' }} data-dir={sort.key === 'csat' ? sort.dir : undefined} onClick={() => toggleSort('csat')}><span className="th-in">CSAT<SortIcon /></span></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((r, i) => (
            <tr key={i}>
              <td>{r[0]}</td>
              <td><span className={'pill ' + (r[1] === 'Inbound' ? 'blue' : 'grey')}>{r[1]}</span></td>
              <td>{r[2]}</td>
              <td>{r[3]}</td>
              <td>{r[4]}</td>
              <td>{r[5]}</td>
              <td>{ynCell(r[6])}</td>
              <td>{ynCell(r[7])}</td>
              <td>{r[8]}</td>
              <td>{r[9]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
