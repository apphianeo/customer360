import { SortIcon } from './Icons.jsx';

export default function SortableTh({ sortKey, sort, onSort, children, ...rest }) {
  const dir = sort.key === sortKey ? sort.dir : undefined;
  return (
    <th
      className="sortable"
      data-dir={dir}
      style={{ cursor: 'pointer' }}
      onClick={() => onSort(sortKey)}
      {...rest}
    >
      <span className="th-in">
        {children}
        <SortIcon />
      </span>
    </th>
  );
}
