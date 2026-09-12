import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import '../styles/menu.css';

const features = [
  {
    title: 'Learning Paths',
    text: 'Structured roadmaps to guide you from beginner to expert in various languages.',
  },
  {
    title: 'Code Snippets',
    text: 'A library of reusable code blocks for common problems, contributed by the community.',
  },
  {
    title: 'Community Forums',
    text: 'Ask questions, share knowledge, and collaborate with fellow developers.',
  },
];

export default function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="menu-page">
      <header className="site-header">
        <nav className="container" aria-label="Main navigation">
          <Link to="/" className="logo-link">
            <h1 className="logo">CODER&apos;S HUB</h1>
          </Link>
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <button type="button" className="back" onClick={() => navigate(-1)}>
                Back
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Your Journey Starts Here.</h1>
            <p>
              A place for coders, by coders. Find resources, share code, and connect with a
              community that helps you grow.
            </p>
            <div className="buttons">
              <Link to="/learning-paths" className="btn primary-btn">
                Explore Learning Paths
              </Link>
              <Link to="/snippets" className="btn secondary-btn">
                Browse Code Snippets
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="features-section container">
          <h2>What We Offer</h2>
          <div className="feature-cards">
            {features.map((f) => (
              <article className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-anchor" aria-hidden="true" />
      </main>

      <Footer />
    </div>
  );
}
