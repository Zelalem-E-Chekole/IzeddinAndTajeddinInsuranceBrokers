import "../styles/About.css";
import Card2 from "../components/Section/Card2";
import Card from "../components/Section/Card";

import vision_image from "../assets/vision.JPG";
import mission_image from "../assets/mission.JPG";
import value_image from "../assets/CoreValues3.PNG";



function About() {
  return (
    <div>
      <h1>ABOUT US</h1>

      <h3>Izeddin and Tajeddin, Insurance Brokers licensed by the National Bank of Ethiopia, have been delivering reliable insurance brokerage and consultancy services for over 20 years. Our expert team offers customized solutions in Property, Liability, Auto, Life, Travel, Marine, Health, pecuinary, Engineering and more, ensuring comprehensive coverage and efficient claim settlement services.</h3>
    

      <div className="about-container">
             
            
      
            <div className="card-grid">
              <Card2  >
                <h2>Vision</h2> 
                <img src={vision_image} alt="Card" className="card-image" />
                <h3>To be one of the leading research based insurance brokers in Ethiopia giving the best service possible by providing innovative solutions to ensure good protection and happiness that satisfy our clients.</h3>
              </Card2>
              <Card2>
                <h2>Mission</h2>
                <img src={mission_image} alt="Card" className="card-image" />
                <h3>To deliver excellent service to our clients by remaining focused to their needs by striving for continuous improvement. To operate our business through the shared values of Trust, Transparency, Devotion and High integrity. To give first class service to clients by attaching risks on time, following renewal cycle and arrangement prompt claims settlement.</h3>
              </Card2>
              <Card2>
                <h2>Core Values</h2> 
                <img src={value_image} alt="Card" className="card-image" />
                <h3>Our commitment to excellence, integrity, and customer satisfaction drive us to become a premier insurance and reinsurance broker in Ethiopia adn Africa.</h3>   
              </Card2>        
               
            </div>
            <div className="card-grid">
              <Card title="Leading Broker" text="One of the most competent and leading insurance brokers in the country handling Life, Non-life and Health Insurance Business." /> 
               <Card title="Team" text="Managed by a professional team of 8 members plus 10 support staff" /> 
               <Card title="Track Record" text="Excellent track record with over 150 corporate clients across all economic sectors." />
              
            </div>

            <h2 style={{ backgroundColor: "yellow"}}>Our Philosophy</h2>
               <div className="card-grid">
              <Card title="Satisfying Clients" text="To work towards an utmost satisfaction of clients by taking care and meeting their interest at all times." />
               <Card title="Innovation" text="Flexibility in approach to innovate and to continuously deliver value added service by becoming more than getting the policies issued." />
              <Card title="Contineous Improvement" text="To work continuously to improve knowledge, attitude, and experience in delivering very good service to be most competent in the industry." />
              <Card title="Giving the best Service" text="To become the best service provider as an outsourced fruitful partner to our clients." />
            </div>
         
    </div>
    </div>
  );
}

export default About;
