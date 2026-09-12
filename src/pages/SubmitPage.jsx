import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { snippetLanguages } from '../data/snippets';
import { SimpleHeader } from '../components/layout/SiteHeader';
import '../styles/submit.css';

const emptyForm = { title: '', language: '', description: '', code: '' };

export default function SubmitPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null);

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: persist to localStorage so the UI stays useful without a backend.
    try {
      const raw = localStorage.getItem('coders-hub-submissions');
      const existing = raw ? JSON.parse(raw) : [];
      existing.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem('coders-hub-submissions', JSON.stringify(existing));
    } catch {
      // Ignore storage errors (private mode, quota, etc.)
    }
    setStatus(`Thanks! "${form.title}" was saved locally.`);
    setForm(emptyForm);
  };

  return (
    <div className="submit-page">
      <SimpleHeader />

      <main>
        <section className="page-header">
          <div className="container">
            <h2>Submit Your Code Snippet</h2>
            <p>Help the community by sharing a useful piece of code.</p>
          </div>
        </section>

        <section className="submit-form-section container">
          <form id="snippet-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Snippet Title</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={form.title}
                onChange={update('title')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="language">Language</label>
              <select
                id="language"
                name="language"
                required
                value={form.language}
                onChange={update('language')}
              >
                <option value="">-Select Language-</option>
                {snippetLanguages
                  .filter((l) => l !== 'All')
                  .map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
                value={form.description}
                onChange={update('description')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="code">Code</label>
              <textarea
                id="code"
                name="code"
                rows="10"
                required
                value={form.code}
                onChange={update('code')}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Snippet
            </button>
            {status && (
              <p className="submit-status" role="status">
                {status}{' '}
                <button type="button" className="link-btn" onClick={() => navigate('/snippets')}>
                  Browse snippets
                </button>
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}
