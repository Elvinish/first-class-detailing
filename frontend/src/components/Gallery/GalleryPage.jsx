import { useState } from "react";
import "./GalleryPage.css";
import Section from "../Shared/Section";
import Lightbox from "../Shared/Lightbox";
import { GALLERY_ITEMS } from "../../utils/constants";

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  return (
    <Section
      id="gallery"
      eyebrow="Results"
      title="Before & after quality you can see"
      kicker="Real cars, real daily drivers."
    >
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.id} className="gallery-item">
            <div className="gallery-item__image-wrap">
              <img
                src={item.image}
                alt={item.label}
                onClick={() =>
                  setSelected({ src: item.image, alt: item.label })
                }
              />
            </div>
            <figcaption className="gallery-item__caption">
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <Lightbox
        src={selected?.src}
        alt={selected?.alt}
        onClose={() => setSelected(null)}
      />
    </Section>
  );
}
