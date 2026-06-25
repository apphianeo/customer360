export default function PolGrid({ pairs, style }) {
  return (
    <div className="pol-grid" style={style}>
      {pairs.map(([l, v], i) => (
        <div className="pdl" key={i}>
          <span className="pl">{l}</span>
          <span className="pv" dangerouslySetInnerHTML={{ __html: v }} />
        </div>
      ))}
    </div>
  );
}
