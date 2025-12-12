import { useEffect, useState } from "react";
import "./HomePage.css";
import Button from "../Shared/Button";
import Section from "../Shared/Section";
import { CONTACT_PHONE, CONTACT_ADDRESS } from "../../utils/constants";

import BookingPage from "../Booking/BookingPage";
import GalleryPage from "../Gallery/GalleryPage";

import hero1 from "../../assets/hero-car.jpg";
import hero2 from "../../assets/interior-detail.jpg";
import hero3 from "../../assets/ceramic-coating.jpg";

const HERO_IMAGES = [hero1, hero2, hero3];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

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
        id="services-home"
        title="Our Services"
        kicker="We offer a range of detailing services to keep your car looking its best."
      >
        <div className="home-services">
          <article className="home-services__card">
            <div className="home-services__image-wrap">
              <img src={hero1} alt="Exterior Detailing" />
            </div>
            <h3 className="home-services__title">Exterior Detailing</h3>
            <p className="home-services__text">
              Full exterior wash and detail to keep paint glossy and protected.
            </p>
            <p className="home-services__price">$99</p>
            <Button as="a" href="#booking" size="sm">
              Book Now
            </Button>
          </article>

          <article className="home-services__card">
            <div className="home-services__image-wrap">
              <img src={hero2} alt="Interior Detailing" />
            </div>
            <h3 className="home-services__title">Interior Detailing</h3>
            <p className="home-services__text">
              Deep interior clean for seats, carpets and all high-touch areas.
            </p>
            <p className="home-services__price">$99</p>
            <Button as="a" href="#booking" size="sm">
              Book Now
            </Button>
          </article>

          <article className="home-services__card">
            <div className="home-services__image-wrap">
              <img src={hero3} alt="Ceramic Coating" />
            </div>
            <h3 className="home-services__title">Ceramic Coating</h3>
            <p className="home-services__text">
              Long-term paint protection and extra gloss with ceramic coating.
            </p>
            <p className="home-services__price">$30</p>
            <Button as="a" href="#booking" size="sm">
              Book Now
            </Button>
          </article>
        </div>
      </Section>

      {/* GALLERY – используется готовая страница, просто как секция */}
      <GalleryPage />

      {/* BOOKING – форма резервирования */}
      <BookingPage />

      {/* CONTACT US + MAP */}
      <Section id="contact-home" title="Contact Us">
        <div className="home-contact-box">
          <div className="home-contact">
            <div className="home-contact__col home-contact__col--info">
              <p className="home-contact__text">
                Book your detailing appointment today. We’ll confirm your time
                and package as soon as possible.
              </p>

              <div className="home-contact__info">
                <div className="home-contact__item">
                  <span className="home-contact__label">Phone</span>
                  <span className="home-contact__value">{CONTACT_PHONE}</span>
                </div>

                <div className="home-contact__item">
                  <span className="home-contact__label">Address</span>
                  <span className="home-contact__value">{CONTACT_ADDRESS}</span>
                </div>
              </div>

              <div className="home-contact__button">
                <Button as="a" href="#booking" size="md">
                  Book Now
                </Button>
              </div>
            </div>

            <div className="home-contact__col home-contact__col--map">
              <div className="home-contact__map-placeholder">
                <p>Google Maps placeholder</p>
                <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                  Embed your real location map here later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
