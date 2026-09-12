import { useMemo, useState } from 'react';
import { snippets, snippetLanguages } from '../data/snippets';
import SnippetCard, { FilterChips } from '../components/snippets/SnippetCard';
import { SimpleHeader } from '../components/layout/SiteHeader';
import Footer from '../components/layout/Footer';
import '../styles/snippets.css';

const SUBMIT_EMAIL = 'kunubiswas2@gmail.com';
const SUBMIT_SUBJECT = 'New Code Snippet Submission';
const SUBMIT_BODY = `Hi,

I would like to submit a code snippet:

Title:
Language:
Description:

Code:
\`\`\`
(paste your code here)
\`\`\`

Thanks!`;

const GMAIL_COMPOSE_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SUBMIT_EMAIL)}` +
  `&su=${encodeURIComponent(SUBMIT_SUBJECT)}` +
  `&body=${encodeURIComponent(SUBMIT_BODY)}`;

export default function SnippetsPage() {
  const [query, setQuery] = useState('');
  const [activeLang, setActiveLang] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return snippets.filter((snip) => {
      const matchesQuery =
        !q ||
        snip.title.toLowerCase().includes(q) ||
        snip.description.toLowerCase().includes(q) ||
        snip.language.toLowerCase().includes(q);
      const matchesLang = activeLang === 'All' || snip.language === activeLang;
      return matchesQuery && matchesLang;
    });
  }, [query, activeLang]);

  return (
    <div className="snippets-page">
      <SimpleHeader />

      <main>
        <section className="page-header">
          <div className="container">
            <h2>Code Snippet Library</h2>
            <p>
              A growing collection of useful code snippets contributed by the community. Share and
              save your own!
            </p>
            <a
              href={GMAIL_COMPOSE_URL}
              className="submit-btn"
              target="_blank"
              rel="noopener noreferrer"
              title={`Send your snippet to ${SUBMIT_EMAIL} via Gmail`}
            >
              Submit a Snippet
            </a>
          </div>
        </section>

        <section className="snippet-controls container" aria-label="Snippet filters">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
            <input
              type="search"
              className="snippet-search-bar"
              placeholder="Search snippets by name, language or keyword..."
              aria-label="Search snippets"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <FilterChips languages={snippetLanguages} active={activeLang} onChange={setActiveLang} />
        </section>

        <section className="code-snippets-section container" aria-label="Code snippets">
          <div className="snippet-cards">
            {filtered.map((snip) => (
              <SnippetCard key={`${snip.language}-${snip.title}`} snippet={snip} />
            ))}
          </div>
          {filtered.length === 0 && <p className="no-results">No snippets match your search.</p>}
        </section>
      </main>

      <Footer />
    </div>
  );
}
