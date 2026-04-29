import type {
  IndustryWorkforce,
  IndustryEconomicImpact,
  IndustryProducer,
  IndustryAssociation,
  IndustryReport,
  IndustryTimelineEntry,
  IndustryRegulation,
  IndustryCertification,
  IndustryChallenge,
} from "@/data/industries";

export function IndustryHeadline({
  workforce,
  econ,
}: {
  workforce?: IndustryWorkforce;
  econ?: IndustryEconomicImpact;
}) {
  if (!workforce && !econ) return null;
  return (
    <div className="deep-grid-2">
      {workforce && (
        <div className="deep-card">
          <h3>Workforce</h3>
          {workforce.direct && <p><strong>Direct:</strong> {workforce.direct}</p>}
          {workforce.indirect && <p><strong>Indirect:</strong> {workforce.indirect}</p>}
          {workforce.regions && (
            <p className="deep-muted">
              Regions:{" "}
              {workforce.regions.map((r, i) => (
                <span key={i} className="deep-tag">{r}</span>
              ))}
            </p>
          )}
          {workforce.note && <p className="deep-muted">{workforce.note}</p>}
        </div>
      )}
      {econ && (
        <div className="deep-card">
          <h3>Economic impact</h3>
          {econ.gvp && <p><strong>GVP:</strong> {econ.gvp}</p>}
          {econ.exports && <p><strong>Exports:</strong> {econ.exports}</p>}
          {econ.domestic && <p><strong>Domestic:</strong> {econ.domestic}</p>}
          {econ.note && <p className="deep-muted">{econ.note}</p>}
        </div>
      )}
    </div>
  );
}

export function ProducerList({ items }: { items?: IndustryProducer[] }) {
  if (!items?.length) return null;
  return (
    <div className="deep-grid-2">
      {items.map((p) => (
        <div key={p.name} className="deep-card">
          <strong style={{ display: "block", marginBottom: 4 }}>
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
            ) : p.name}
          </strong>
          {p.location && <div className="deep-muted">{p.location}</div>}
          {p.products && <p style={{ margin: "0.4rem 0 0" }}>{p.products}</p>}
          {p.note && <p className="deep-muted" style={{ marginTop: "0.4rem" }}>{p.note}</p>}
        </div>
      ))}
    </div>
  );
}

export function AssociationList({ items }: { items?: IndustryAssociation[] }) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((a) => (
        <li key={a.name}>
          {a.url ? (
            <a href={a.url} target="_blank" rel="noopener noreferrer">{a.name}</a>
          ) : <strong>{a.name}</strong>}
          {a.note && <span className="deep-muted"> — {a.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export function ReportList({ items }: { items?: IndustryReport[] }) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((r, i) => (
        <li key={i} style={{ marginBottom: 8 }}>
          {r.url ? (
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              <strong>{r.title}</strong>
            </a>
          ) : <strong>{r.title}</strong>}
          {(r.publisher || r.year) && (
            <span className="deep-muted">
              {" "}— {r.publisher}{r.year ? ` (${r.year})` : ""}
            </span>
          )}
          {r.summary && <div className="deep-muted">{r.summary}</div>}
        </li>
      ))}
    </ul>
  );
}

export function IndustryTimeline({ items }: { items?: IndustryTimelineEntry[] }) {
  if (!items?.length) return null;
  return (
    <ol className="timeline">
      {items.map((t, i) => (
        <li key={i} className="timeline__item">
          <strong className="timeline__year">{t.year}</strong>
          <span>{t.event}</span>
        </li>
      ))}
    </ol>
  );
}

export function RegulationBlock({ reg }: { reg?: IndustryRegulation }) {
  if (!reg || (!reg.regulators?.length && !reg.schemes?.length)) return null;
  return (
    <div className="deep-grid-2">
      {reg.regulators?.length ? (
        <div className="deep-card">
          <h3>Regulators</h3>
          <ul>
            {reg.regulators.map((r, i) => (
              <li key={i}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                ) : <strong>{r.name}</strong>}
                {r.note && <span className="deep-muted"> — {r.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {reg.schemes?.length ? (
        <div className="deep-card">
          <h3>Frameworks &amp; schemes</h3>
          <ul>
            {reg.schemes.map((s, i) => (
              <li key={i}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                ) : <strong>{s.name}</strong>}
                {s.note && <span className="deep-muted"> — {s.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function CertificationList({ items }: { items?: IndustryCertification[] }) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((c) => (
        <li key={c.name}>
          {c.url ? (
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              <strong>{c.name}</strong>
            </a>
          ) : <strong>{c.name}</strong>}
          {c.summary && <span className="deep-muted"> — {c.summary}</span>}
        </li>
      ))}
    </ul>
  );
}

export function ChallengeList({ items }: { items?: IndustryChallenge[] }) {
  if (!items?.length) return null;
  return (
    <div className="deep-grid-2">
      {items.map((c, i) => (
        <div key={i} className="deep-card">
          <strong>{c.title}</strong>
          <p style={{ margin: "0.4rem 0 0" }}>{c.note}</p>
        </div>
      ))}
    </div>
  );
}

export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id}>{children}</h2>;
}
