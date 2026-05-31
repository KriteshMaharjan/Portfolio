import { useState } from "react";
import "./ProjectPreview.css";

export default function ProjectPreview({ images = [], onClose }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="project-preview-overlay" onClick={onClose}>
      <div
        className="project-preview-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-preview-header">
          <button
            className="preview-close-btn"
            onClick={onClose}
            aria-label="Close preview"
          >
            ✕
          </button>
        </div>

        <div className="preview-visual">
          <img
            src={images[index]}
            alt={`preview-${index + 1}`}
            className="preview-image"
          />
          <div className="preview-meta">
            <span className="preview-counter">
              {index + 1} / {images.length}
            </span>
            <div>
              <button
                className="preview-nav"
                onClick={prev}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="preview-nav"
                onClick={next}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
