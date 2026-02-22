import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ src, alt = "Full image", onClose }) {
  useEffect(() => {
    if (!src) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    // блокируем скролл страницы пока открыт лайтбокс
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox__img" src={src} alt={alt} />
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
