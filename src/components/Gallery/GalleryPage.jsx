import "./GalleryPage.css";
import Section from "../Shared/Section";
import { GALLERY_ITEMS } from "../../utils/constants";

import exterior from "../../assets/exterior.jpg";
import ceramic from "../../assets/ceramic-coating.jpg";
import hero from "../../assets/hero-car.jpg";

const imagesMap = {
  "/assets/hero-car.jpg": hero,
  "/assets/interior-detail.jpg": exterior,
  "/assets/ceramic-coating.jpg": ceramic,
};

export default function GalleryPage() {
  return (
    <Section
      id="gallery"
      eyebrow="Results"
      title="Before & after quality you can see"
      kicker="Real cars, real daily drivers. Replace these demo photos with your own work to build trust instantly."
    >
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.id} className="gallery-item">
            <div className="gallery-item__image-wrap">
              <img src={imagesMap[item.image]} alt={item.label} />
            </div>
            <figcaption className="gallery-item__caption">
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
