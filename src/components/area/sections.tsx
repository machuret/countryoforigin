import Link from "next/link";
import { decodeEntities } from "@/lib/html-entities";
import type {
  AreaCatchVolume,
  AreaTopSpecies,
  AreaFleet,
  AreaPort,
  AreaProcessor,
  AreaEconomicValue,
} from "@/data/areas";
import { speciesBySlug } from "@/data/species";

export function AreaHeadline({
  catch_,
  econ,
}: {
  catch_?: AreaCatchVolume;
  econ?: AreaEconomicValue;
}) {
  if (!catch_ && !econ) return null;
  return (
    <div className="deep-grid-2">
      {catch_ && (
        <div className="deep-card">
          <h3>Catch &amp; production</h3>
          <p>
            <strong>Volume:</strong>{" "}
            {catch_.tonnes.toLocaleString()} t ({catch_.year})
          </p>
          {catch_.note && <p className="deep-muted">{catch_.note}</p>}
        </div>
      )}
      {econ && (
        <div className="deep-card">
          <h3>Economic value</h3>
          <p>
            <strong>{econ.dollars}</strong> ({econ.year})
          </p>
          {econ.note && <p className="deep-muted">{econ.note}</p>}
        </div>
      )}
    </div>
  );
}

export function AreaTopSpeciesList({ items }: { items?: AreaTopSpecies[] }) {
  if (!items?.length) return null;
  return (
    <div className="deep-grid-2">
      {items.map((s) => {
        const sp = speciesBySlug(s.speciesSlug);
        const name = sp?.name ?? s.speciesSlug;
        return (
          <Link
            key={s.speciesSlug}
            href={`/species/${s.speciesSlug}`}
            className="deep-card deep-card-link"
          >
            <strong>{name}</strong>
            {s.pctOfCatch != null && (
              <div className="deep-muted">~{s.pctOfCatch}% of catch</div>
            )}
            {s.note && <p style={{ margin: "0.4rem 0 0" }}>{s.note}</p>}
          </Link>
        );
      })}
    </div>
  );
}

export function AreaFleetBlock({ fleet }: { fleet?: AreaFleet }) {
  if (!fleet) return null;
  return (
    <div className="deep-card">
      <h3>Fleet profile</h3>
      {fleet.vessels != null && <p><strong>Vessels:</strong> {fleet.vessels.toLocaleString()}</p>}
      {fleet.approxWorkers != null && (
        <p><strong>Workers (approx):</strong> {fleet.approxWorkers.toLocaleString()}</p>
      )}
      {fleet.homePorts && fleet.homePorts.length > 0 && (
        <p>
          <strong>Home ports:</strong>{" "}
          {fleet.homePorts.map((h, i) => <span key={i} className="deep-tag">{h}</span>)}
        </p>
      )}
      {fleet.note && <p className="deep-muted">{fleet.note}</p>}
    </div>
  );
}

export function AreaProcessorList({ items }: { items?: AreaProcessor[] }) {
  if (!items?.length) return null;
  return (
    <div className="deep-grid-2">
      {items.map((p) => (
        <div key={p.name} className="deep-card">
          <strong>
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
            ) : p.name}
          </strong>
          <div className="deep-muted" style={{ textTransform: "capitalize" }}>{p.type}</div>
          {p.note && <p style={{ margin: "0.4rem 0 0" }}>{p.note}</p>}
        </div>
      ))}
    </div>
  );
}

export function AreaPortList({ items }: { items?: AreaPort[] }) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((p) => (
        <li key={p.name}>
          <strong>{p.name}</strong>
          {p.note && <span className="deep-muted"> — {p.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export function AreaCulturalNote({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div
      className="deep-card"
      style={{
        background: "rgba(201, 168, 76, 0.10)",
        borderColor: "rgba(201, 168, 76, 0.4)",
      }}
    >
      <p style={{ margin: 0 }}>{decodeEntities(text)}</p>
    </div>
  );
}

export function NamedNoteList({
  items,
  accent,
}: {
  items?: { name: string; note?: string; url?: string }[];
  accent?: string;
}) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((n) => (
        <li key={n.name}>
          {n.url ? (
            <a href={n.url} target="_blank" rel="noopener noreferrer">
              <strong style={accent ? { color: `var(--${accent})` } : undefined}>{n.name}</strong>
            </a>
          ) : (
            <strong style={accent ? { color: `var(--${accent})` } : undefined}>{n.name}</strong>
          )}
          {n.note && <span className="deep-muted"> — {n.note}</span>}
        </li>
      ))}
    </ul>
  );
}
