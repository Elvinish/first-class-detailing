export const PRICING = {
  gold: {
    Sedan: 239,
    SUV: 269,
    Truck: 289,
    Van: 289,
  },
  platinum: {
    Sedan: 299,
    SUV: 339,
    Truck: 349,
    Van: 349,
  },
};

export function calculatePrice(service, vehicleType) {
  const serviceKey = service?.toLowerCase();

  if (!PRICING[serviceKey]) {
    throw new Error(`Unknown service: ${service}`);
  }
  const price = PRICING[serviceKey][vehicleType];

  if (!price) {
    throw new Error(
      `Invalid vehicle type "${vehicleType}" for service "${service}"`
    );
  }

  return price;
}

export function getPricingCatalog() {
  return PRICING;
}
