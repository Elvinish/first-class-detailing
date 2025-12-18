import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Button from "../Shared/Button";
import Section from "../Shared/Section";
import ServiceCard from "./ServiceCard";
import Lightbox from "../Shared/Lightbox";

import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
} from "../../utils/constants";

import BookingPage from "../Booking/BookingPage";
import GalleryPage from "../Gallery/GalleryPage";

const HERO_IMAGES = [
  "/assets/hero-car.jpg",
  "/assets/interior-detail.jpg",
  "/assets/ceramic-coating.jpg",
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  // простой автослайдер
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // каждые 6 секунд
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="home-hero" id="top">
        <div className="home-hero__image-wrap">
          {HERO_IMAGES.map((img, index) => (
            <img
              key={index}
              src={img}
              className={
                "home-hero__image" +
                (index === activeIndex ? " home-hero__image--active" : "")
              }
              alt="First Class Auto Detailing"
            />
          ))}

          <div className="home-hero__overlay">
            <h1 className="home-hero__title">First Class Auto Detailing</h1>
            <p className="home-hero__subtitle">
              Premium car wash and auto detailing services
            </p>
            <div className="home-hero__actions">
              <Button as="a" href="#booking" variant="primary" size="lg">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES (для якоря из navbar) */}
      <Section
        id="services"
        title="Our Services"
        kicker="We offer a range of detailing services to keep your car looking its best."
      >
        <div className="home-services">
          <ServiceCard
            image="/assets/hero-car.jpg"
            title="Exterior Detailing"
            text="Full exterior wash and detail to keep paint glossy and protected."
            price="$99"
            onImageClick={(src, alt) => setSelected({ src, alt })}
          />

          <ServiceCard
            image="/assets/interior-detail.jpg"
            title="Interior Detailing"
            text="Deep interior clean for seats, carpets and all high-touch areas."
            price="$99"
            onImageClick={(src, alt) => setSelected({ src, alt })}
          />

          <ServiceCard
            image="/assets/ceramic-coating.jpg"
            title="Ceramic Coating"
            text="Long-term paint protection and extra gloss with ceramic coating."
            price="$30"
            onImageClick={(src, alt) => setSelected({ src, alt })}
          />

          <Lightbox
            src={selected?.src}
            alt={selected?.alt}
            onClose={() => setSelected(null)}
          />
        </div>
        <div className="home-services__cta">
          <Button as={Link} to="/services" size="md">
            See more
          </Button>
        </div>
      </Section>

      {/* GALLERY – используется готовая страница, просто как секция */}
      <GalleryPage />

      {/* BOOKING – форма резервирования */}
      <BookingPage />

      {/* CONTACT US + MAP */}
      <Section id="contact" title="Contact Us">
        <div className="home-contact-box">
          <div className="home-contact">
            <div className="home-contact__col home-contact__col--info">
              <p className="home-contact__text">
                Book your detailing appointment today. We’ll confirm your time
                and package as soon as possible.
              </p>
              <div className="home-contact__item">
                <span className="home-contact__label">Phone</span>
                <span className="home-contact__value">
                  <a
                    className="home-contact__link"
                    href={`tel:${CONTACT_PHONE}`}
                  >
                    {CONTACT_PHONE}
                  </a>
                </span>
              </div>

              <div className="home-contact__item">
                <span className="home-contact__label">Email</span>
                <span className="home-contact__value">
                  <a
                    className="home-contact__link"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </div>

              <div className="home-contact__item">
                <span className="home-contact__label">Address</span>
                <span className="home-contact__value">{CONTACT_ADDRESS}</span>
              </div>
            </div>

            <div className="home-contact__map">
              <iframe
                title="First Class Auto Detailing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.6045186619963!2d-122.31893052319717!3d47.47813569683923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549043725d30b2c9%3A0x919ded92e73b5ef9!2s1244%20S%20140th%20St%2C%20Burien%2C%20WA%2098168!5e0!3m2!1sen!2sus!4v1766037666103!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
