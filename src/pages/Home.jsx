import Card2 from "../components/Section/Card2";
import "../styles/Home.css";
import { Link } from "react-router-dom";

import aircraft_image from "../assets/aircraft_insurance.JPG";
import car_image from "../assets/car_accident.JPG";
import engineering_image from "../assets/engineering_insurance.JPG";
import finance_image from "../assets/finance_insurance.jpg";
import fire_image from "../assets/fire.JPG";
import group_image from "../assets/group_personal_accident.JPG";
import life_image from "../assets/life&health.JPG";
import marine_image from "../assets/marine.JPG";


function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>IZU & TAJU INSURANCE BROKERS</h1>
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
        <h2 style={{ backgroundColor: 'yellow'}}>OUR INSURANCE SERVICES</h2>
        <div className="card-grid">
          <Card2 title="MOTOR INSURANCE">
            <img src={car_image} alt="Card" className="card-image" />
            <p>Comprehensive and affordable coverage to keep you safe on the road.</p>
           
          </Card2>
          <Card2 title="PROPERTY INSURANCE">
            <img src={fire_image} alt="Card" className="card-image" />
            <p>Protect your home and valuables against unexpected damages.</p>
           
          </Card2>
          <Card2 title="HEALTH INSURANCE">
            <img src={life_image} alt="Card" className="card-image" />
            <p>Flexible health plans designed to support you and your family.</p>
           
          </Card2>
          <Card2 title="BUSINESS INSURANCE">
            <img src={finance_image} alt="Card" className="card-image" />
            <p>Customized policies to protect your business and employees.</p>
           
          </Card2>

          
          
        </div>
        <div className="hero-buttons">
            <Link to="/Services"><button className="primary-btn">LEARN MORE</button></Link>
          </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2 style={{ backgroundColor: 'yellow'}}>WHY CHOOSE US?</h2>
        <div className="why-grid">
          <div className="small-card" >  
            <h3>✔ Trusted Advisors</h3>
            <p>Years of experience helping clients find the right coverage.</p>
          </div>
          <div className="small-card">
            <h3>✔ Competitive Rates</h3>
            <p>We compare multiple insurers to find you the best deal.</p>
          </div>
          <div className="small-card">
            <h3>✔ Personalized Service</h3>
            <p>Every client receives tailored insurance solutions.</p>
          </div>
          <div className="small-card">
            <h3>✔ Fast Claims Support</h3>
            <p>We stand by your side during the claims process.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-content">
          <h2 style={{ backgroundColor: "yellow"}}>ABOUT IZU & TAJU</h2>
          <p>
            IZU & TAJU INSURANCE BROKERS (ITIB) is dedicated to providing 
            reliable insurance solutions with integrity and professionalism.
            We work closely with top insurance providers to ensure our clients 
            receive the best coverage options available.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <h2 style={{ backgroundColor: "yellow"}}>HOW IT WORKS</h2>
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
        <h2 style={{ backgroundColor: "yellow"}}>WHAT OUR CLIENTS SAY</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              "Testify that they have a long standing excellent business relationship with IZU & TAJU"
            </p>
            
          </div>
          <div className="testimonial">
            <p>
              "Acknowledge that the broking firm has superior professional excellence and capacity, headed by seasoned management."
            </p>
           
          </div>
          <div className="testimonial">
            <p>
              "Confirm that clients dealing with IZU & TAJU are in good hands."
            </p>
           
          </div>
          <div className="testimonial">
            <p>
              "Ascertain the firm's high reputation towards fulfilling its clients needs and supporting the insurance industry in general."
            </p>
           
          </div>
          <div className="testimonial">
            <p>
              "Recognize IZU & TAJU for their consistent integrity, transparency, and dedication to protecting clients’ interests."
            </p>
           
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>READY TO GET PROTECTED?</h2>
        <p>Contact us today for a personalized insurance quote.</p>
         <Link to="/Contact"><button className="primary-btn">Contact Us</button></Link>
      </section>


    </div>
  );
}

export default Home;
