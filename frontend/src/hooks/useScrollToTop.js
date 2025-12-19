import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let tries = 0;
    let rafId = 0;

    const tryScroll = () => {
      const el = document.querySelector(hash);

      if (el) {
        // 1) первый скролл
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        // 2) повторный скролл — когда разметка стабилизируется
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 350);

        return;
      }

      // ждём появления секции (до ~2 сек)
      if (tries < 120) {
        tries += 1;
        rafId = requestAnimationFrame(tryScroll);
      }
    };

    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);
}
