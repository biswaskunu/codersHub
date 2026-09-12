import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { snippets, snippetLanguages } from '../data/snippets';
import SnippetCard, { FilterChips } from '../components/snippets/SnippetCard';
import { SimpleHeader } from '../components/layout/SiteHeader';
import Footer from '../components/layout/Footer';
import '../styles/snippets.css';

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
            <Link to="/submit" className="submit-btn">
              Submit a Snippet
            </Link>
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
