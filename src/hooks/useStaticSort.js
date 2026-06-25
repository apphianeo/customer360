import { useMemo, useState } from 'react';

function parseCell(s) {
  if (s === '' || s === '—') return null;
  const d = s.match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (d) {
    const mo = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 };
    return new Date(+d[3], mo[d[2]], +d[1]).getTime();
  }
  const m = s.replace(/[$,%]/g, '').match(/-?\d+(\.\d+)?/);
  if (m && !/[A-Za-z]{3,}/.test(s.replace(/days?/i, ''))) return parseFloat(m[0]);
  return s.toLowerCase();
}

export function useStaticSort(rows, getCell) {
  const [sort, setSort] = useState({ key: null, dir: 'asc' });

  const sorted = useMemo(() => {
    if (!sort.key) return rows;
    const arr = rows.slice().sort((a, b) => {
      let x = parseCell(String(getCell(a, sort.key)));
      let y = parseCell(String(getCell(b, sort.key)));
      if (x === null) return 1;
      if (y === null) return -1;
      if (typeof x === 'number' && typeof y === 'number') return sort.dir === 'asc' ? x - y : y - x;
      x = '' + x; y = '' + y;
      return sort.dir === 'asc' ? x.localeCompare(y) : y.localeCompare(x);
    });
    return arr;
  }, [rows, sort, getCell]);

  function toggleSort(key) {
    setSort((prev) => ({ key, dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc' }));
  }

  return { sorted, sort, toggleSort };
}
