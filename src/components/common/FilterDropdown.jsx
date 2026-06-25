import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FunnelIcon } from './Icons.jsx';

export default function FilterDropdown({ label, options, selected, onToggle, onClear }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  function place() {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    let left = window.scrollX + r.left;
    const mw = 190;
    if (left + mw > window.scrollX + document.documentElement.clientWidth - 12) {
      left = window.scrollX + document.documentElement.clientWidth - mw - 12;
    }
    setPos({ top: window.scrollY + r.bottom + 6, left });
  }

  useEffect(() => {
    if (!open) return;
    place();
    function onDocClick(e) {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) setOpen(false);
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onScrollOrResize() {
      setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [open]);

  const active = selected.length > 0;

  return (
    <th data-filter>
      <button
        type="button"
        ref={btnRef}
        className={'hdr-filter' + (active ? ' active' : '')}
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        <span className="hf-label">{active ? `${label} (${selected.length})` : label}</span>
        <FunnelIcon />
      </button>
      {open && createPortal(
        <div className="dd-menu" ref={menuRef} style={{ top: pos.top, left: pos.left }}>
          <div
            className={'dd-item' + (selected.length === 0 ? ' sel' : '')}
            onClick={(e) => {
              e.stopPropagation();
              onClear();
              setOpen(false);
            }}
          >
            <span className={'dd-check' + (selected.length === 0 ? ' on' : '')} />
            <span>All</span>
          </div>
          {options.map((opt) => {
            const on = selected.includes(opt);
            return (
              <div
                key={opt}
                className={'dd-item' + (on ? ' sel' : '')}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(opt);
                }}
              >
                <span className={'dd-check' + (on ? ' on' : '')} />
                <span>{opt}</span>
              </div>
            );
          })}
        </div>,
        document.body
      )}
    </th>
  );
}
