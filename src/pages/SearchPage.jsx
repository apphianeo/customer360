import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchResults, highlightMatch } from '../data/search.js';

export default function SearchPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const results = q.trim() ? getSearchResults(q.trim()) : [];

  function handleClick(r) {
    if (r.type === 'Customer' && r.pid) navigate('/profile/' + r.pid);
    else if (r.type === 'Policy' && r.pid) navigate('/policy/' + r.pid);
    else alert('Demo: detailed view available for John Tan, Jonathan Lim, and Rizal Hakim.');
  }

  return (
    <div className="shell page visible" id="page-search">
      <div className="crumbs">
        <a onClick={() => navigate('/')}>Overview</a><span>›</span>
        <span style={{ color: 'var(--primary-sureblue)', fontWeight: 600 }}>Search Results</span>
      </div>
      <h1 id="sr-heading" style={{ marginBottom: 4 }}>
        Results for &#8220;<b>{q}</b>&#8221;
      </h1>
      <p className="sr-count" id="sr-count">
        {results.length} result{results.length !== 1 ? 's' : ''} found
      </p>
      <div id="sr-results">
        {results.length ? results.map((r, i) => (
          <div className="sr-card" key={i} onClick={() => handleClick(r)}>
            <span className={'sdd-cat ' + r.cat}>{r.type}</span>
            <div className="sr-title" dangerouslySetInnerHTML={{ __html: highlightMatch(r.title, q) }} />
            <div className="sr-sub">{r.sub || ''}</div>
          </div>
        )) : <p style={{ color: 'var(--text-tertiary)' }}>No results found.</p>}
      </div>
    </div>
  );
}
