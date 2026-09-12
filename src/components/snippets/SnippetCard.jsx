export default function SnippetCard({ snippet }) {
  return (
    <div className="snippet-card">
      <div className="card-header">
        <h3>{snippet.title}</h3>
        <span>{snippet.language}</span>
      </div>
      <p className="card-description">{snippet.description}</p>
      <pre>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export function FilterChips({ languages, active, onChange }) {
  return (
    <div className="filter-chips">
      {languages.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`chip${active === lang ? ' active' : ''}`}
          data-lang={lang}
          onClick={() => onChange(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
