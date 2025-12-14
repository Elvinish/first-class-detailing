import "./Header.css";
import { SITE_NAME } from "../../utils/constants";
import Button from "../Shared/Button";

export default function Header() {
  const mainTitle = SITE_NAME.split("Auto")[0].trim();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* Лого ведёт к самому верху */}
        <a href="/#top" className="site-header__brand">
          <span className="site-header__logo-dot" />
          <span className="site-header__logo-text">
            {mainTitle}
            <span className="site-header__logo-sub">Auto Detailing</span>
          </span>
        </a>

        <nav className="site-header__nav">
          <a href="/#services" className="site-header__link">
            Services
          </a>
          <a href="/#gallery" className="site-header__link">
            Gallery
          </a>
          {/* Booking убрали из навбара */}
        </nav>

        {/* Кнопка ведёт к секции бронирования/формы */}
        <Button as="a" href="/#booking" variant="primary" size="sm">
          Reserve now
        </Button>
      </div>
    </header>
  );
}
