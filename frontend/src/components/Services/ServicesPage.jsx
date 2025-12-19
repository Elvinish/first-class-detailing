import { useState } from "react";
import "./ServicesPage.css";
import Section from "../Shared/Section";
import Lightbox from "../Shared/Lightbox";
import { SERVICES } from "../../utils/constants";
import Button from "../Shared/Button";

export default function ServicesPage() {
  const [selected, setSelected] = useState(null);
  return (
    <Section
      id="services"
      eyebrow="Detailing menu"
      title="Choose the level of clean your car deserves"
      kicker="All packages are fully hand-performed using pH-balanced soaps, high-quality microfibers and paint-safe techniques."
    >
      <div className="services-grid">
        {SERVICES.map((service) => (
          <article key={service.id} className="services-card">
            <div className="services-card__media">
              <img
                className="services-card__img"
                src={service.image}
                alt={service.name}
                loading="lazy"
                onClick={() =>
                  setSelected({ src: service.image, alt: service.name })
                }
              />
            </div>

            <div className="services-card__body">
              <header className="services-card__header">
                <h3 className="services-card__title">{service.name}</h3>
                <p className="services-card__price">
                  From ${service.fromPrice}
                </p>
              </header>

              <p className="services-card__short">{service.short}</p>

              <ul className="services-card__list">
                {service.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <Button
                as="a"
                href="/#booking"
                variant="ghost"
                size="sm"
                className="services-card__btn"
              >
                Book now
              </Button>
            </div>
          </article>
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
