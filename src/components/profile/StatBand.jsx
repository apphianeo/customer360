export default function StatBand({ stats }) {
  return (
    <div className="stat-band">
      {stats.map((t, i) => (
        <div className={'ptile' + (t[2] ? ' zero' : '')} key={i}>
          <div className="n">{t[0]}</div>
          <div className="l">{t[1]}</div>
        </div>
      ))}
    </div>
  );
}
