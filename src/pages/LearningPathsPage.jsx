import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { roadmaps } from '../data/roadmaps';
import PathCard, { RoadmapModal } from '../components/learning/PathCard';
import Footer from '../components/layout/Footer';
import '../styles/learning-paths.css';

export default function LearningPathsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return roadmaps;
    return roadmaps.filter(
      (path) => path.title.toLowerCase().includes(q) || path.desc.toLowerCase().includes(q),
    );
  }, [query]);

  const activeRoadmap = useMemo(
    () => roadmaps.find((item) => item.id === activeId) ?? null,
    [activeId],
  );

  return (
    <div className="learning-page">
      <header className="site-header">
        <Link to="/" className="logo-link">
          <h1 className="logo">CODER&apos;S HUB</h1>
        </Link>

        <div className="search" role="search">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          <input
            type="search"
            className="search-bar"
            placeholder="Search"
            aria-label="Search learning paths"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button type="button" className="back" onClick={() => navigate(-1)}>
          Back
        </button>
      </header>

      <main>
        <section className="page-header">
          <div className="container">
            <h2>Explore Learning Paths</h2>
            <p>Choose your journey and follow a structured roadmap to master a new skill.</p>
          </div>
        </section>

        <section className="learning-paths-section container" aria-label="Learning paths">
          <div className="path-cards">
            {filtered.map((path) => (
              <PathCard key={path.id} path={path} onView={setActiveId} />
            ))}
          </div>
        </section>
      </main>

      <RoadmapModal roadmap={activeRoadmap} onClose={() => setActiveId(null)} />

      <Footer />
    </div>
  );
}
