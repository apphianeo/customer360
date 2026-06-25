import { ChevLeft, ChevRight } from './Icons.jsx';

export default function Pagination({ page, totalPages, onChange, ariaLabel }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);
  return (
    <nav className="pagination" aria-label={ariaLabel}>
      <button
        type="button"
        className="pg-item pg-arrow"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevLeft />
      </button>
      {pages.map((i) => (
        <button
          key={i}
          type="button"
          className={'pg-item' + (i === page ? ' active' : '')}
          onClick={() => onChange(i)}
          aria-current={i === page ? 'page' : undefined}
        >
          {i}
        </button>
      ))}
      <button
        type="button"
        className="pg-item pg-arrow"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <ChevRight />
      </button>
    </nav>
  );
}
