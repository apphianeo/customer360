import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { getSearchResults, highlightMatch } from '../../data/search.js';

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const results = value && value.length >= 2 ? getSearchResults(value).slice(0, 6) : [];

  function goToResult(r) {
    setOpen(false);
    if (r.type === 'Customer' && r.pid) {
      navigate('/profile/' + r.pid);
    } else if (r.type === 'Policy' && r.pid) {
      navigate('/policy/' + r.pid);
    } else {
      runSearch();
    }
  }

  function runSearch() {
    const q = value.trim();
    if (!q) return;
    setOpen(false);
    navigate('/search?q=' + encodeURIComponent(q));
  }

  const overviewActive =
    location.pathname === '/' ||
    location.pathname.startsWith('/profile') ||
    location.pathname.startsWith('/policy');

  return (
    <div className="topbar">
      <div className="brand" onClick={() => navigate('/')}>
        <img className="brand-logo" src="/logo.png" alt="UOI" />
        <div className="brand-name">Customer&nbsp;360</div>
      </div>
      <nav className="topnav">
        <a id="nav-overview" className={overviewActive ? 'active' : ''} onClick={() => navigate('/')}>Overview</a>
        <a id="nav-policies" className={location.pathname === '/policies' ? 'active' : ''} onClick={() => navigate('/policies')}>Policies</a>
        <a id="nav-claims" className={location.pathname === '/claims' ? 'active' : ''} onClick={() => navigate('/claims')}>Claims</a>
      </nav>
      <div className="topbar-right">
        <div className="search" id="search-wrap" ref={wrapRef}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.9628 17.9968C15.3782 19.3459 13.3242 20.16 11.08 20.16C6.06525 20.16 2 16.0947 2 11.08C2 6.06525 6.06525 2 11.08 2C16.0947 2 20.16 6.06525 20.16 11.08C20.16 13.3106 19.3557 15.3533 18.0212 16.934L22.3797 21.2924L21.319 22.3531L16.9628 17.9968ZM18.66 11.08C18.66 15.2663 15.2663 18.66 11.08 18.66C6.89368 18.66 3.5 15.2663 3.5 11.08C3.5 6.89368 6.89368 3.5 11.08 3.5C15.2663 3.5 18.66 6.89368 18.66 11.08Z" fill="#6E6E6E" />
          </svg>
          <input
            id="global-search"
            placeholder="Search customers, policies…"
            autoComplete="off"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setOpen(e.target.value.length >= 2);
            }}
            onFocus={() => {
              if (value.length >= 2) setOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                runSearch();
              }
            }}
          />
          <div className={'search-dd' + (open && results.length ? ' open' : '')} id="search-dd">
            {results.map((r, i) => (
              <div className="sdd-item" key={i} onClick={() => goToResult(r)}>
                <span className={'sdd-cat ' + r.cat}>{r.type}</span>
                <div className="sdd-label">
                  <span dangerouslySetInnerHTML={{ __html: highlightMatch(r.title, value) }} />
                  {r.sub ? <div className="sdd-sub">{r.sub}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="avatar-sm">CX</div>
      </div>
    </div>
  );
}
