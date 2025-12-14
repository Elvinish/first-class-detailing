import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ✅ если есть якорь — скроллим к нему
    if (hash) {
      // небольшой таймаут, чтобы DOM секции успел отрендериться
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
      return;
    }

    // ✅ если якоря нет — обычный скролл наверх при смене страницы
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
}
