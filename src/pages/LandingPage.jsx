import { Link } from 'react-router-dom';
import '../styles/landing.css';

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="loadname" aria-hidden="true">
        <p>CODER&apos;S HUB</p>
      </div>

      <header className="site-header landing-header">
        <div className="page-top">
          <div className="sitename">
            <Link to="/">CODER&apos;S HUB</Link>
          </div>
          <div className="signin">
            <Link to="/login">
              <button type="button">Sign In</button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="ajenda" aria-label="Coder's Hub introduction">
          <div className="confusion" role="img" aria-label="Confused programmer illustration" />
          <div className="ajenda-text">
            <p>{'// When I wrote this, only God and I understood what I was doing.'}</p>
            <p>{'// Now, Only God knows.'}</p>
          </div>
        </section>

        <div className="start">
          <Link to="/menu">
            <button type="button">Start Journey</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
