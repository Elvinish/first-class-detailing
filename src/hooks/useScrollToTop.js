import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ✅ если есть якорь — ждем пока элемент появится и скроллим к нему
    if (hash) {
      let rafId = 0;
      let tries = 0;

      const tryScroll = () => {
        const el = document.querySelector(hash);

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        // пробуем ~1 сек (60 кадров)
        if (tries < 60) {
          tries += 1;
          rafId = requestAnimationFrame(tryScroll);
        }
      };

      rafId = requestAnimationFrame(tryScroll);

      return () => cancelAnimationFrame(rafId);
    }

    // ✅ обычный переход без hash — наверх
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
}
