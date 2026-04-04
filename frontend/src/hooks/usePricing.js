import { useEffect, useState } from "react";
import { getPricing } from "../utils/pricingApi";

export function usePricing() {
  const [pricing, setPricing] = useState({});
  const [pricingLoading, setPricingLoading] = useState(true);
  const [pricingError, setPricingError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadPricing() {
      try {
        setPricingLoading(true);
        setPricingError("");

        const data = await getPricing();

        if (!isMounted) return;
        setPricing(data);
      } catch (err) {
        if (!isMounted) return;
        setPricingError(err.message || "Failed to load pricing");
      } finally {
        if (!isMounted) return;
        setPricingLoading(false);
      }
    }

    loadPricing();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    pricing,
    pricingLoading,
    pricingError,
  };
}
