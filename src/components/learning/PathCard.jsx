import { useEffect } from 'react';

export default function PathCard({ path, onView }) {
  return (
    <article className="path-card">
      <h3>{path.title}</h3>
      <p>{path.desc}</p>
      <button type="button" className="path-btn" onClick={() => onView(path.id)}>
        View Roadmap
      </button>
    </article>
  );
}

export function RoadmapModal({ roadmap, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!roadmap) return null;

  return (
    <div
      className="roadmap-modal open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <button type="button" className="close-modal" onClick={onClose} aria-label="Close roadmap">
          &times;
        </button>
        <h2 id="modalTitle">{roadmap.title}</h2>
        <ol className="roadmap-steps">
          {roadmap.steps.map((step, index) => (
            <li key={`${roadmap.id}-${index}`}>
              <span className="step-num">{index + 1}</span>
              <span className="step-text">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
