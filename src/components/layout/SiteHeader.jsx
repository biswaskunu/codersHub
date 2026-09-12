import { Link, useNavigate } from 'react-router-dom';

export function Logo({ to = '/' }) {
  return (
    <Link to={to} className="logo-link">
      <h1 className="logo">CODER&apos;S HUB</h1>
    </Link>
  );
}

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button type="button" className="back" onClick={() => navigate(-1)}>
      Back
    </button>
  );
}

export function SimpleHeader() {
  return (
    <header className="site-header container">
      <Logo />
      <BackButton />
    </header>
  );
}
