import "../styles/About.css";
import Card from "../components/Section/Card";


function About() {
  return (
    <div>
      <h1>About Us</h1>

 
      
      <div className="about-container">
             
            
      
            <div className="card-grid">
              <Card title="Vision" text="To be one of the leading research based insurance brokers in Ethiopia giving the best service possible by providing innovative solutions to ensure good protection and happiness that satisfy our customers" />
              <Card title="Mission" text="To deliver excellent service to our Customers by remaining focused to their needs by striving for continuous improvement. To operate our business through the shared values of Trust, Transparency, Devotion and High integrity. To give first class service to customers by attaching risks on time, following renewal cycle and arrangement prompt claims settlement." />
            
               
            </div>
            <div className="card-grid">
              <Card title="Leading Broker" text="One of the most competent and leading insurance brokers in the country handling Life, Non-life and Health Insurance Business." /> 
               <Card title="Team" text="Managed by a professional team of 8 members plus 10 support staff" /> 
               <Card title="Track Record" text="Excellent track record with over 150 corporate clients across all economic sectors." />
              
            </div>

            <h1>Our Philosophy</h1>
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
