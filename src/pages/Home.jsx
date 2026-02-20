import Card from "../components/Section/Card";
import "../styles/Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Izeddin & Tajeddin Insurance Brokers</h1>
          <p>
            Protecting what matters most with trusted insurance solutions 
            tailored to your needs.
          </p>
          <div className="hero-buttons">
            <Link to="/Contact"><button className="primary-btn">Contact Us</button></Link>
            <Link to="/About"><button className="secondary-btn">Learn More</button></Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Our Insurance Services</h2>
        <div className="card-grid">
          <Card
            title="Auto Insurance"
            text="Comprehensive and affordable coverage to keep you safe on the road."
          />
          <Card
            title="Home Insurance"
            text="Protect your home and valuables against unexpected damages."
          />
          <Card
            title="Health Insurance"
            text="Flexible health plans designed to support you and your family."
          />
          <Card
            title="Business Insurance"
            text="Customized policies to protect your business and employees."
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div>
            <h3>✔ Trusted Advisors</h3>
            <p>Years of experience helping clients find the right coverage.</p>
          </div>
          <div>
            <h3>✔ Competitive Rates</h3>
            <p>We compare multiple insurers to find you the best deal.</p>
          </div>
          <div>
            <h3>✔ Personalized Service</h3>
            <p>Every client receives tailored insurance solutions.</p>
          </div>
          <div>
            <h3>✔ Fast Claims Support</h3>
            <p>We stand by your side during the claims process.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-content">
          <h2>About Izeddin & Tajeddin</h2>
          <p>
            Izeddin & Tajeddin Insurance Brokers is dedicated to providing 
            reliable insurance solutions with integrity and professionalism.
            We work closely with top insurance providers to ensure our clients 
            receive the best coverage options available.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2>How It Works</h2>
        <div className="process-steps">
          <div className="step">
            <span>1</span>
            <h3>Consultation</h3>
            <p>We understand your needs and goals.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Comparison</h3>
            <p>We compare multiple insurers for the best options.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Protection</h3>
            <p>You choose your plan and stay protected.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              "Some testimonial. Excellent service and very professional team. They helped me find
              the perfect insurance plan."
            </p>
            <h4>- Name</h4>
          </div>
          <div className="testimonial">
            <p>
              "Some testimonial. Highly recommended! Fast response and great pricing."
            </p>
            <h4>- Name</h4>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Ready to Get Protected?</h2>
        <p>Contact us today for a personalized insurance quote.</p>
         <Link to="/Contact"><button className="primary-btn">Contact Us</button></Link>
      </section>


    </div>
  );
}

export default Home;
