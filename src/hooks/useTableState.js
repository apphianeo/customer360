import { useMemo, useState } from 'react';

const PAGE_SIZE = 10;

function cval(v) {
  if (typeof v === 'number') return v;
  const s = ('' + v).trim();
  const d = s.match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (d) {
    const mo = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 };
    return new Date(+d[3], mo[d[2]], +d[1]).getTime();
  }
  const n = s.replace(/[$,]/g, '');
  if (/^-?\d+(\.\d+)?$/.test(n)) return parseFloat(n);
  return s.toLowerCase();
}

export function useTableState(data, { sortKeyIndex, filterFields = [] }) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({ key: null, dir: 'asc' });
  const [filters, setFilters] = useState(() => {
    const init = {};
    filterFields.forEach((f) => { init[f] = []; });
    return init;
  });

  const filtered = useMemo(() => {
    return data.filter((row) =>
      filterFields.every((f) => filters[f].length === 0 || filters[f].includes(row[f]))
    );
  }, [data, filters, filterFields]);

  const sorted = useMemo(() => {
    if (!sort.key) return filtered;
    const idx = sortKeyIndex[sort.key];
    const arr = filtered.slice().sort((a, b) => {
      let x = cval(a[idx]);
      let y = cval(b[idx]);
      if (typeof x === 'number' && typeof y === 'number') return sort.dir === 'asc' ? x - y : y - x;
      x = '' + x; y = '' + y;
      return sort.dir === 'asc' ? x.localeCompare(y) : y.localeCompare(x);
    });
    return arr;
  }, [filtered, sort, sortKeyIndex]);

  const total = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const clampedPage = Math.min(Math.max(1, page), total);
  const rows = sorted.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE);

  function toggleSort(key) {
    setSort((prev) => ({
      key,
      dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc',
    }));
    setPage(1);
  }

  function toggleFilter(field, value) {
    setFilters((prev) => {
      const cur = prev[field];
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      return { ...prev, [field]: next };
    });
    setPage(1);
  }

  function clearFilter(field) {
    setFilters((prev) => ({ ...prev, [field]: [] }));
    setPage(1);
  }

  return {
    rows,
    page: clampedPage,
    totalPages: total,
    totalCount: sorted.length,
    pageSize: PAGE_SIZE,
    setPage,
    sort,
    toggleSort,
    filters,
    toggleFilter,
    clearFilter,
  };
}
