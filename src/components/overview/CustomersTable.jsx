import { useNavigate } from 'react-router-dom';
import { CUSTOMERS } from '../../data/customers.js';
import { useTableState } from '../../hooks/useTableState.js';
import SortableTh from '../common/SortableTh.jsx';
import FilterDropdown from '../common/FilterDropdown.jsx';
import Pagination from '../common/Pagination.jsx';

const SORT_IDX = { name: 2, pol: 6, ltv: 7, nps: 8, last: 11 };

export default function CustomersTable() {
  const navigate = useNavigate();
  const table = useTableState(CUSTOMERS, {
    sortKeyIndex: SORT_IDX,
    filterFields: [3, 5],
  });

  function handleRowClick(c) {
    const pid = c[12];
    if (pid) navigate('/profile/' + pid);
    else alert('Demo: a full profile is built for John Tan, Jonathan Lim (lapsing) and Rizal Hakim (inactive) in this prototype.');
  }

  const start = (table.page - 1) * table.pageSize + 1;
  const end = Math.min(table.page * table.pageSize, table.totalCount);

  return (
    <div className="card">
      <div className="table-scroll">
        <table id="cust-table">
          <colgroup>
            <col style={{ width: '16%' }} /><col style={{ width: '9%' }} /><col style={{ width: '11%' }} /><col style={{ width: '10%' }} />
            <col style={{ width: '8%' }} /><col style={{ width: '9%' }} /><col style={{ width: '7%' }} /><col style={{ width: '10%' }} />
            <col style={{ width: '12%' }} /><col style={{ width: '8%' }} />
          </colgroup>
          <thead>
            <tr>
              <SortableTh sortKey="name" sort={table.sort} onSort={table.toggleSort}>Customer</SortableTh>
              <FilterDropdown
                label="Status"
                options={['Active', 'Lapsing', 'Inactive']}
                selected={table.filters[3]}
                onToggle={(v) => table.toggleFilter(3, v)}
                onClear={() => table.clearFilter(3)}
              />
              <th>Segment</th>
              <FilterDropdown
                label="Channel"
                options={['Direct', 'Agent', 'Partner', 'Digital Marketing']}
                selected={table.filters[5]}
                onToggle={(v) => table.toggleFilter(5, v)}
                onClear={() => table.clearFilter(5)}
              />
              <SortableTh sortKey="pol" sort={table.sort} onSort={table.toggleSort}>Active Policies</SortableTh>
              <SortableTh sortKey="ltv" sort={table.sort} onSort={table.toggleSort}>Lifetime Value</SortableTh>
              <SortableTh sortKey="nps" sort={table.sort} onSort={table.toggleSort}>Last NPS</SortableTh>
              <th>Marketing Consent</th>
              <SortableTh sortKey="last" sort={table.sort} onSort={table.toggleSort}>Last Interaction</SortableTh>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="cust-tbody">
            {table.rows.length ? table.rows.map((c, i) => {
              const [ini, av, name, status, spill, channel, pol, ltv, nps, consent, cpill, last] = c;
              return (
                <tr className="clickable" key={i} onClick={() => handleRowClick(c)}>
                  <td><span className="cust"><span className={'av ' + av}>{ini}</span>{name}</span></td>
                  <td><span className={'pill ' + spill}>{status}</span></td>
                  <td>Retail · Individual</td>
                  <td>{channel}</td>
                  <td>{pol}</td>
                  <td>{ltv}</td>
                  <td>{nps}</td>
                  <td><span className={'pill ' + cpill}>{consent}</span></td>
                  <td>{last}</td>
                  <td><span className="view-link">View</span></td>
                </tr>
              );
            }) : (
              <tr><td colSpan="10" style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: 30 }}>No customers match the selected filters.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="table-foot">
        <span className="showing" id="cust-showing">
          {table.totalCount === 0 ? 'No results' : `Showing ${start}–${end} of ${table.totalCount}`}
        </span>
        <Pagination page={table.page} totalPages={table.totalPages} onChange={table.setPage} ariaLabel="Customer table pagination" />
      </div>
    </div>
  );
}
