import { useNavigate } from 'react-router-dom';
import { CLAIMS_ALL } from '../../data/claims.js';
import { useTableState } from '../../hooks/useTableState.js';
import SortableTh from '../common/SortableTh.jsx';
import FilterDropdown from '../common/FilterDropdown.jsx';
import Pagination from '../common/Pagination.jsx';

const SORT_IDX = { polprod: 0, cust: 4, ref: 6, submitted: 7, amount: 10 };

export default function AllClaimsTable() {
  const navigate = useNavigate();
  const table = useTableState(CLAIMS_ALL, {
    sortKeyIndex: SORT_IDX,
    filterFields: [8],
  });

  function handleRowClick(c) {
    const link = c[11];
    if (link && link.startsWith('p1')) navigate('/profile/jt');
    else if (link) navigate('/profile/' + link);
    else alert('Demo: full profile available for John Tan, Jonathan Lim, and Rizal Hakim.');
  }

  const start = (table.page - 1) * table.pageSize + 1;
  const end = Math.min(table.page * table.pageSize, table.totalCount);

  return (
    <div className="card">
      <div className="table-scroll">
        <table id="allcl-table" style={{ tableLayout: 'fixed', minWidth: 1040 }}>
          <colgroup>
            <col style={{ width: '14%' }} /><col style={{ width: '17%' }} /><col style={{ width: '18%' }} /><col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} /><col style={{ width: '10%' }} /><col style={{ width: '10%' }} /><col style={{ width: '7%' }} />
          </colgroup>
          <thead>
            <tr>
              <SortableTh sortKey="polprod" sort={table.sort} onSort={table.toggleSort}>Policy Product</SortableTh>
              <SortableTh sortKey="cust" sort={table.sort} onSort={table.toggleSort}>Customer</SortableTh>
              <th>Claim Description</th>
              <SortableTh sortKey="ref" sort={table.sort} onSort={table.toggleSort}>Reference No.</SortableTh>
              <SortableTh sortKey="submitted" sort={table.sort} onSort={table.toggleSort}>Date Submitted</SortableTh>
              <FilterDropdown
                label="Status"
                options={['Success', 'Processing', 'Draft', 'Closed']}
                selected={table.filters[8]}
                onToggle={(v) => table.toggleFilter(8, v)}
                onClear={() => table.clearFilter(8)}
              />
              <SortableTh sortKey="amount" sort={table.sort} onSort={table.toggleSort}>Amount</SortableTh>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="allcl-tbody">
            {table.rows.length ? table.rows.map((c, i) => {
              const [prod, polNo, ini, av, name, desc, ref, date, status, spill, amt] = c;
              return (
                <tr className="clickable" key={i} onClick={() => handleRowClick(c)}>
                  <td>{prod}<br /><span style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>{polNo}</span></td>
                  <td><span className="cust"><span className={'av ' + av}>{ini}</span>{name}</span></td>
                  <td>{desc}</td>
                  <td><b>{ref}</b></td>
                  <td>{date}</td>
                  <td><span className={'pill ' + spill}>{status}</span></td>
                  <td>{amt}</td>
                  <td><span className="view-link">View</span></td>
                </tr>
              );
            }) : (
              <tr><td colSpan="8" style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: 30 }}>No claims match the selected filters.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="table-foot">
        <span className="showing" id="allcl-showing">
          {table.totalCount === 0 ? 'No results' : `Showing ${start}–${end} of ${table.totalCount}`}
        </span>
        <Pagination page={table.page} totalPages={table.totalPages} onChange={table.setPage} ariaLabel="Claims table pagination" />
      </div>
    </div>
  );
}
