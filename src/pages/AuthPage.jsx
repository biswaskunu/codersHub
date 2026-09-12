import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

export default function AuthPage() {
  const [mode, setMode] = useState('login');

  return (
    <div className="auth-scope">
    <main className="formbox">
      <div className="auth-top">
        <Link to="/" className="auth-home">
          &larr; CODER&apos;S HUB
        </Link>
      </div>

      <div className="button-box" role="tablist" aria-label="Authentication">
        <div id="btn" className={mode === 'register' ? 'slide-right' : ''} aria-hidden="true" />
        <button
          type="button"
          className="change-btn"
          role="tab"
          aria-selected={mode === 'login'}
          onClick={() => setMode('login')}
        >
          <span>LogIn</span>
        </button>
        <button
          type="button"
          className="change-btn"
          role="tab"
          aria-selected={mode === 'register'}
          onClick={() => setMode('register')}
        >
          <span>Register</span>
        </button>
      </div>

      <div className="social" aria-label="Social login options">
        <a href="#" aria-label="Sign in with Google">
          <i className="fa-brands fa-google" aria-hidden="true" />
        </a>
        <a href="#" aria-label="Sign in with Facebook">
          <i className="fa-brands fa-facebook" aria-hidden="true" />
        </a>
        <a href="#" aria-label="Sign in with LinkedIn">
          <i className="fa-brands fa-linkedin" aria-hidden="true" />
        </a>
      </div>

      {mode === 'login' ? (
        <form
          id="login"
          className="logindata"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" className="name-pass" placeholder="Enter username" aria-label="Username" required />
          <input type="password" className="name-pass" placeholder="Password" aria-label="Password" required />
          <label className="remmeber-pass">
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
          </label>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      ) : (
        <form
          id="Register"
          className="logindata"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" className="name-pass" placeholder="Enter username" aria-label="Username" required />
          <input type="email" className="name-pass" placeholder="Email Id" aria-label="Email address" required />
          <input type="password" className="name-pass" placeholder="Password" aria-label="Password" required />
          <label className="terms">
            <input type="checkbox" className="check-box" required />
            <span>I Agree To The Terms and Conditions</span>
          </label>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      )}
    </main>
    </div>
  );
}
