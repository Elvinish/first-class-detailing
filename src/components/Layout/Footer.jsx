import "./Footer.css";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from "../../utils/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <h4 className="site-footer__title">First Class Auto Detailing</h4>
          <p className="site-footer__text">{CONTACT_ADDRESS}</p>
          <p className="site-footer__text">
            {CONTACT_PHONE} · {CONTACT_EMAIL}
          </p>
        </div>

        <div className="site-footer__col site-footer__col--right">
          <p className="site-footer__text">
            © {new Date().getFullYear()} First Class Auto Detailing. All rights
            reserved.
          </p>
          <p className="site-footer__text site-footer__text--muted">
            Hand-crafted website · React + React Router.
          </p>
        </div>
      </div>
    </footer>
  );
}
