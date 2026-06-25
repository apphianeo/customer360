import { useNavigate } from 'react-router-dom';
import { POLICIES_ALL } from '../../data/policies.js';
import { useTableState } from '../../hooks/useTableState.js';
import SortableTh from '../common/SortableTh.jsx';
import FilterDropdown from '../common/FilterDropdown.jsx';
import Pagination from '../common/Pagination.jsx';

const SORT_IDX = { polno: 0, cust: 3, start: 5, renewal: 6, premium: 7 };

export default function AllPoliciesTable() {
  const navigate = useNavigate();
  const table = useTableState(POLICIES_ALL, {
    sortKeyIndex: SORT_IDX,
    filterFields: [4, 8],
  });

  function handleRowClick(p) {
    const link = p[10];
    if (link) navigate('/policy/' + link);
    else alert("Demo: only John Tan's policies open the full policy view in this prototype.");
  }

  const start = (table.page - 1) * table.pageSize + 1;
  const end = Math.min(table.page * table.pageSize, table.totalCount);

  return (
    <div className="card">
      <div className="table-scroll">
        <table id="allpol-table" style={{ tableLayout: 'fixed', minWidth: 1060 }}>
          <colgroup>
            <col style={{ width: '16%' }} /><col style={{ width: '18%' }} /><col style={{ width: '13%' }} /><col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} /><col style={{ width: '12%' }} /><col style={{ width: '10%' }} /><col style={{ width: '7%' }} />
          </colgroup>
          <thead>
            <tr>
              <SortableTh sortKey="polno" sort={table.sort} onSort={table.toggleSort}>Policy No</SortableTh>
              <SortableTh sortKey="cust" sort={table.sort} onSort={table.toggleSort}>Customer</SortableTh>
              <FilterDropdown
                label="Product"
                options={['UniTravel', 'UniHome', 'UniCar', 'UniPA']}
                selected={table.filters[4]}
                onToggle={(v) => table.toggleFilter(4, v)}
                onClear={() => table.clearFilter(4)}
              />
              <SortableTh sortKey="start" sort={table.sort} onSort={table.toggleSort}>Start Date</SortableTh>
              <SortableTh sortKey="renewal" sort={table.sort} onSort={table.toggleSort}>Renewal</SortableTh>
              <SortableTh sortKey="premium" sort={table.sort} onSort={table.toggleSort}>Annual Premium</SortableTh>
              <FilterDropdown
                label="Status"
                options={['In Force', 'Lapsing', 'Expired']}
                selected={table.filters[8]}
                onToggle={(v) => table.toggleFilter(8, v)}
                onClear={() => table.clearFilter(8)}
              />
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="allpol-tbody">
            {table.rows.length ? table.rows.map((p, i) => {
              const [no, ini, av, name, product, start, renewal, prem, status, spill] = p;
              return (
                <tr className="clickable" key={i} onClick={() => handleRowClick(p)}>
                  <td><span style={{ fontWeight: 600 }}>{no}</span></td>
                  <td><span className="cust"><span className={'av ' + av}>{ini}</span>{name}</span></td>
                  <td>{product}</td>
                  <td>{start}</td>
                  <td>{renewal}</td>
                  <td>{prem}</td>
                  <td><span className={'pill ' + spill}>{status}</span></td>
                  <td><span className="view-link">View</span></td>
                </tr>
              );
            }) : (
              <tr><td colSpan="8" style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: 30 }}>No policies match the selected filters.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="table-foot">
        <span className="showing" id="allpol-showing">
          {table.totalCount === 0 ? 'No results' : `Showing ${start}–${end} of ${table.totalCount}`}
        </span>
        <Pagination page={table.page} totalPages={table.totalPages} onChange={table.setPage} ariaLabel="Policies table pagination" />
      </div>
    </div>
  );
}
