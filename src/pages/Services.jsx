//import ServiceCard from "../components/sections/ServiceCard";
import "../styles/Services.css";
import Card from "../components/Section/Card";
import Card2 from "../components/Section/Card2";
import aircraft_image from "../assets/aircraft_insurance.JPG";
import car_image from "../assets/car_accident.JPG";
import engineering_image from "../assets/engineering_insurance.JPG";
import finance_image from "../assets/finance_insurance.jpg";
import fire_image from "../assets/fire.JPG";
import group_image from "../assets/group_personal_accident.JPG";
import life_image from "../assets/life&health.JPG";
import marine_image from "../assets/marine.JPG";


function Services() {
 
  return (
    <div className="services-page">
      <div className="services">
        <h1>OUR INSURANCE SERVICES</h1>
        

         <div className="services-container">

          <div className="card-grid">
          <Card2 title="Property Insurance">
            
            <ul>
              <img src={fire_image} alt="Card" className="card-image" />
              <li>Fire with allied perils & H.H Comprehensive </li>
              <p>Earth Quake, Storm, Tempts, Floods, Strike Riots, MD, Explosion, Spontaneous combustion, aerial drops, Impact damage, Bursting of pipes, Subsistance</p>
              <li>Bulglary & All Risks</li>
              <li>Plate Glass</li>
              <li>Motor Insurance for;</li>
              <p>commercial vehicles of tankers, trucks & trailers;</p>
              <p>private motor for all types of passagenger cars</p>
              
            </ul>
          </Card2>

          <Card2 title="Engineering Insurance">
            <img src={engineering_image} alt="Card" className="card-image" />
            <ul>             
              <li>Construction All Risks (CAR) </li>
              <li>Erection All Risk (EAR)</li>
              <li>Contractor Plant & Machinery (CPM)</li>
              <li>Machinery Breakdown/MBD</li>
              <li>Machinery Insurance for Boilers</li>
              <li>Electronic Equipment Insurance</li>
              <li>Machinery (CPM) Insurance</li>
            </ul>
          </Card2>

          <Card2 title="Financial Matters">
            <img src={finance_image} alt="Card" className="card-image" />
            <ul>
              <li>Pecuniary Insurance for </li>
              <li>Business Interruption</li>
              <li>Fidelity Guarantee</li>
              <li>Money Insurance</li>
              <li>Bonds 
                <ul>
                  <li>Bid Bonds,</li>
                  <li>Performance Bond,</li>
                  <li>Advance Payment Bond,</li>
                  <li>Customs Bond.</li>
                </ul>
              </li>
            </ul>
          </Card2>

          <Card2 title="Liability Insurance">
            <img src={group_image} alt="Card" className="card-image" />
           <p>General Public Liability against</p>
           
            <ul>
              <li>Personal Injury & Property damage </li>
              <li>Product Liability</li>
              <li>Carriers Liability</li>
              <li>Professional Indemnity</li>
              <li>Bailee's Liability</li>
              <li>Motor Third Party Liability for personal injury and property damage</li>
            </ul>
          </Card2>

          <Card2 title="Life & Health Insurance">
            <img src={life_image} alt="Card" className="card-image" />
            
            <ul>
              <li>Group Personal Accident (GPA) [death, disability]</li>
              <li>Workmen's Compensation [death, disability, Medical & salary]</li>
              <li>Life Assurance (Natural death)</li>
              <li>Health Insurance (Medical bill refund)</li>
            </ul>
          </Card2>

          <Card2 title="Marine Insurance">
            <img src={marine_image} alt="Card" className="card-image" />
            <ul>             
              
              <li>marine cargo and hull,</li>
              <li>Inland Transit with BSG (Bandits, shifta & Buerilla) </li>
              <li>Political Violence & Terrorism(PVT)</li>
            </ul>
          </Card2>

          
          

           </div>
            <h2 style={{ backgroundColor: "yellow"}}>Approach in Carrying Out Our Services</h2>
           <div className="card-grid">
            
              <Card2 title="Analyze">
                <ul>
                  <li>Rigorous analysis of risk exposures to propose appropriate cover solutions</li>
                  <li>Dissemination of information to stakeholders on new government rules and regulation as well as that of NBE directives</li>
                </ul>
              </Card2>
              <Card2 title="Design Cover for Placement">
                <ul>
                  <li>Proposing of tailor made solutions to respective clients.</li>
                  <li>Placement of risks with reputed and specialized insurers that are of good financial standing</li>
                </ul>
              </Card2>
              <Card2 title="Ongoing Support">
                <ul>
                  <li>Soliciting premium offer whenever necessary to get meaningful premium saving</li>
                  <li>Effective and efficient claims handling for prompt settlement</li>
                  <li>Suggestion on Technical Advice on Complex Risks for better coverage</li>
                </ul>
              </Card2>
           </div>

           <h2 style={{ backgroundColor: "yellow"}}>Advantages of using our expertise</h2>
           <ul className="custom-list">
            <li>Meaningful premiums savings will be made</li>
            <li>Timely placement of risks will be guaranteed</li>
            <li>Reviewing policies and endorsements for proper values in line with prevailing inflation in the country</li>
            <li>Claims or grievances will be settled faster and in a more fairly way without much delay</li>
            <li>Absorb all insurance headaches of the client enabling them to focus on their main duties</li>
            <li>Your insurance matters will be handled professionally to the best of your advantage, giving you a peaceful mind and adequate financial security</li>
           </ul>
         </div>
      </div>

</div>
  );
}

export default Services;
