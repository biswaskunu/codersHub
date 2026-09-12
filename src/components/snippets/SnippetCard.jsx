import { useEffect, useRef, useState } from 'react';

async function copyText(text) {
  // Preferred: async clipboard API (requires secure context + permissions).
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for older browsers / non-secure contexts.
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'absolute';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

export default function SnippetCard({ snippet }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const handleCopy = async () => {
    try {
      await copyText(snippet.code);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="snippet-card">
      <div className="card-header">
        <h3>{snippet.title}</h3>
        <span>{snippet.language}</span>
      </div>
      <p className="card-description">{snippet.description}</p>
      <div className="code-block">
        <button
          type="button"
          className={`copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          aria-live="polite"
        >
          <i
            className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'}
            aria-hidden="true"
          />
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre>
          <code>{snippet.code}</code>
        </pre>
      </div>
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
