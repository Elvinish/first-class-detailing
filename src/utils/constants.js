export const SITE_NAME = "First Class Auto Detailing";

export const CONTACT_PHONE = "(425) 000-0000";
export const CONTACT_EMAIL = "info@firstclassdetail.com";
export const CONTACT_ADDRESS = "1234 Premium Wash Ave, Suite A, Your City, ST";

export const VEHICLE_TYPES = ["Car", "SUV", "Truck", "Van", "Other"];

export const SERVICES = [
  {
    id: "express",
    name: "Express Exterior Wash",
    short: "Perfect when you just need the car to look fresh again.",
    features: [
      "Pre-rinse & foam bath",
      "Hand wash & towel dry",
      "Wheel faces & tire shine",
    ],
    fromPrice: 39,
  },
  {
    id: "interior",
    name: "Interior Deep Clean",
    short: "For family cars, rideshare, kids & pets.",
    features: [
      "Full vacuum (trunk included)",
      "Plastics, console & vents",
      "Seats & mats shampoo (light to medium)",
    ],
    fromPrice: 119,
  },
  {
    id: "full",
    name: "Full Detail",
    short: "Showroom package: interior + exterior & gloss protection.",
    features: [
      "Exterior decontamination & clay bar",
      "Machine polish (single-stage)",
      "Spray sealant / ceramic booster",
    ],
    fromPrice: 249,
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    short: "Long-term protection & insane gloss.",
    features: [
      "Multi-step paint correction (as needed)",
      "2–3 year ceramic coating",
      "Hydrophobic glass & trim treatment",
    ],
    fromPrice: 549,
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    label: "Gloss enhancement",
    description: "Before / after one-step machine polish & sealant.",
    image: "/assets/hero-car.jpg",
  },
  {
    id: 2,
    label: "Interior reset",
    description: "Full interior steam clean and protection.",
    image: "/assets/interior-detail.jpg",
  },
  {
    id: 3,
    label: "Ceramic shine",
    description: "Premium ceramic coating package.",
    image: "/assets/ceramic-coating.jpg",
  },
];
