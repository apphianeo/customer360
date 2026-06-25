export default function AiSummaryCard({ p }) {
  return (
    <div className="ai-card">
      <div className="ai-head">
        <div className="ai-spark">✦</div>
        <div><h2>AI Summary</h2><span className="ai-sub">{p.aiSub}</span></div>
      </div>
      <div className="ai-body">
        {p.ai.map((r, i) => (
          <p key={i}>
            <span className="ai-dot" style={{ background: r[0] }} />
            <span dangerouslySetInnerHTML={{ __html: r[1] }} />
          </p>
        ))}
      </div>
      <div className="ai-foot">AI-generated summary — verify key figures before acting on them.</div>
    </div>
  );
}
