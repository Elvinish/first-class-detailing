import { getPricingService } from "../services/pricing-service.js";

export function getPricing(req, res, next) {
  try {
    const pricing = getPricingService();
    res.json(pricing);
  } catch (err) {
    next(err);
  }
}
