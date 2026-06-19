import { useEffect, useRef } from "react";

export default function ToolkitDetailModal({ toolkit, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!toolkit) return undefined;

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toolkit, onClose]);

  if (!toolkit) return null;

  return (
    <div className="toolkit-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="toolkit-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="toolkit-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="toolkit-modal__close" type="button" onClick={onClose} ref={closeButtonRef}>
          Close
        </button>

        <p className="toolkit-modal__label">{toolkit.label}</p>
        <h2 id="toolkit-modal-title">{toolkit.modalHeading}</h2>
        <h3>{toolkit.title}</h3>

        <div className="toolkit-modal__intro">
          <p><strong>Audience:</strong> {toolkit.audience}</p>
          <p><strong>Value:</strong> {toolkit.valueProposition}</p>
          <p>{toolkit.modalSummary}</p>
        </div>

        <div className="toolkit-modal__content">
          <div>
            <h4>What's included</h4>
            <ul>
              {toolkit.whatsIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Best for</h4>
            <ul>
              {toolkit.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="toolkit-modal__footer">
          <strong>{toolkit.price}</strong>
          <a href={toolkit.href} target="_blank" rel="noopener noreferrer">
            {toolkit.ctaLabel}
          </a>
        </div>
      </section>
    </div>
  );
}
