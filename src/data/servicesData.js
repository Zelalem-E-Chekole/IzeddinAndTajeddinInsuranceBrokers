// src/data/servicesData.js

import fire_image from "../assets/fire.JPG";
import engineering_image from "../assets/engineering_insurance.JPG";
import finance_image from "../assets/finance_insurance.jpg";
import group_image from "../assets/group_personal_accident.JPG";
import life_image from "../assets/life&health.JPG";
import marine_image from "../assets/marine.JPG";
import car_image from "../assets/car_accident.JPG";

const servicesData = [
  {
    id: "property-insurance",
    title: "PROPERTY INSURANCE",
    image: fire_image,
    shortDescription:
      "Protect your property and valuables against unexpected damages.",
    details: [
      "Fire with allied perils & H.H Comprehensive",
      "Earth Quake, Storm, Floods, Strike Riots, Explosion",
      "Burglary & All Risks",
      "Plate Glass",
      "Commercial vehicle insurance",
      "Private passenger car insurance",
    ],
  },

  {
    id: "engineering-insurance",
    title: "ENGINEERING INSURANCE",
    image: engineering_image,
    shortDescription:
      "Coverage solutions for construction and machinery risks.",
    details: [
      "Construction All Risks (CAR)",
      "Erection All Risk (EAR)",
      "Contractor Plant & Machinery (CPM)",
      "Machinery Breakdown",
      "Boiler Insurance",
      "Electronic Equipment Insurance",
    ],
  },

  {
    id: "financial-insurance",
    title: "FINANCIAL INSURANCE",
    image: finance_image,
    shortDescription:
      "Protect businesses against financial and operational risks.",
    details: [
      "Business Interruption",
      "Fidelity Guarantee",
      "Money Insurance",
      "Bid Bonds",
      "Performance Bonds",
      "Advance Payment Bonds",
      "Customs Bonds",
    ],
  },

  {
    id: "liability-insurance",
    title: "LIABILITY INSURANCE",
    image: group_image,
    shortDescription:
      "Comprehensive liability protection for individuals and businesses.",
    details: [
      "Personal Injury & Property Damage",
      "Product Liability",
      "Carriers Liability",
      "Professional Indemnity",
      "Bailee's Liability",
      "Motor Third Party Liability",
    ],
  },

  {
    id: "life-health-insurance",
    title: "LIFE & HEALTH INSURANCE",
    image: life_image,
    shortDescription:
      "Health and life coverage solutions for individuals and groups.",
    details: [
      "Group Personal Accident",
      "Workmen's Compensation",
      "Life Assurance",
      "Health Insurance",
    ],
  },

  {
    id: "marine-insurance",
    title: "MARINE INSURANCE",
    image: marine_image,
    shortDescription:
      "Coverage for cargo, hull, and transit risks.",
    details: [
      "Marine Cargo Insurance",
      "Marine Hull Insurance",
      "Inland Transit Insurance",
      "Political Violence & Terrorism",
    ],
  },

  {
    id: "motor-insurance",
    title: "MOTOR INSURANCE",
    image: car_image,
    shortDescription:
      "Affordable and reliable vehicle insurance coverage.",
    details: [
      "Private Vehicle Insurance",
      "Commercial Vehicle Insurance",
      "Third Party Coverage",
      "Comprehensive Motor Coverage",
    ],
  },
];

export default servicesData;