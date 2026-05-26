import { useParams } from "react-router-dom";
import "../styles/ServiceDetail.css";

import aircraft_image from "../assets/aircraft_insurance.JPG";
import car_image from "../assets/car_accident.JPG";
import engineering_image from "../assets/engineering_insurance.JPG";
import finance_image from "../assets/finance_insurance.jpg";
import fire_image from "../assets/fire.JPG";
import group_image from "../assets/group_personal_accident.JPG";
import life_image from "../assets/life&health.JPG";
import marine_image from "../assets/marine.JPG";

function ServiceDetail() {

  const { serviceId } = useParams();

  const services = {
    motor: {
      title: "MOTOR INSURANCE",
      image: car_image,
      description:
        "Our motor insurance provides comprehensive protection against accidents, theft, fire, and third-party liabilities. We help individuals and businesses secure reliable vehicle coverage with affordable premiums.",
      benefits: [
        "Comprehensive vehicle protection",
        "Third-party liability coverage",
        "Accident and theft compensation",
        "Fast claims support",
      ],
    },

    property: {
      title: "PROPERTY INSURANCE",
      image: fire_image,
      description:
        "Protect your home, office, and valuable property against unexpected events such as fire, theft, floods, and natural disasters.",
      benefits: [
        "Home and office protection",
        "Fire and flood coverage",
        "Theft protection",
        "Affordable premiums",
      ],
    },

    health: {
      title: "HEALTH INSURANCE",
      image: life_image,
      description:
        "Flexible health insurance solutions for individuals, families, and organizations. Access quality healthcare while reducing medical expenses.",
      benefits: [
        "Hospital coverage",
        "Emergency treatment",
        "Family health plans",
        "Access to quality healthcare",
      ],
    },

    business: {
      title: "BUSINESS INSURANCE",
      image: finance_image,
      description:
        "Protect your company, employees, and assets with customized business insurance solutions designed for modern enterprises.",
      benefits: [
        "Employee protection",
        "Asset coverage",
        "Business continuity support",
        "Professional liability protection",
      ],
    },

    marine: {
      title: "MARINE INSURANCE",
      image: marine_image,
      description:
        "Coverage for cargo, vessels, and transportation risks during marine operations and international trade.",
      benefits: [
        "Cargo protection",
        "Marine liability coverage",
        "Import/export protection",
        "Transit risk management",
      ],
    },

    aircraft: {
      title: "AIRCRAFT INSURANCE",
      image: aircraft_image,
      description:
        "Comprehensive aviation insurance solutions for aircraft owners, operators, and aviation businesses.",
      benefits: [
        "Aircraft damage protection",
        "Passenger liability coverage",
        "Aviation risk management",
        "Operational security",
      ],
    },

    engineering: {
      title: "ENGINEERING INSURANCE",
      image: engineering_image,
      description:
        "Protect engineering projects, construction sites, and heavy machinery against operational and accidental risks.",
      benefits: [
        "Construction project coverage",
        "Machinery protection",
        "Equipment insurance",
        "Contractor liability protection",
      ],
    },

    group: {
      title: "GROUP PERSONAL ACCIDENT",
      image: group_image,
      description:
        "Financial protection for employees and groups against accidental injuries, disability, and loss of income.",
      benefits: [
        "Employee accident protection",
        "Disability compensation",
        "Medical expense support",
        "Group coverage plans",
      ],
    },
  };

  const service = services[serviceId];

  if (!service) {
    return <h2 className="not-found">Service Not Found</h2>;
  }

  return (
    <div className="service-detail">

      <div className="service-hero">
        <img src={service.image} alt={service.title} />
      </div>

      <div className="service-content">
        <h1>{service.title}</h1>

        <p className="description">
          {service.description}
        </p>

        <h2>Key Benefits</h2>

        <ul>
          {service.benefits.map((benefit, index) => (
            <li key={index}>✔ {benefit}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ServiceDetail;