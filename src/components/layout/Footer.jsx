import { Link } from "react-router-dom";
import "../../styles/Footer.css"
import logo from "../../assets/logo.JPG";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          {/* Logo */}
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Izeddin and Tajeddin Insurance Logo" />
                    </Link>
                  </div>
          
          <p>OUR MOTO IS "RELIABLE PROTECTION FOR THE PUBLIC WITH QUALITY SERVICE!"</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Insurance Services</h3>
          <ul>
            <li>Auto Insurance</li>
            <li>Health Insurance</li>
            <li>Life Insurance</li>
            <li>Business Insurance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: itmibc@gmail.com</p>
          <p>Phone: +251 (116) 298-203</p>
          <p>Address:  Sami Building 6th floor, Imperial, Addis Ababa</p>
        </div>
  
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Izu and Taju Insurance Brokers. All rights reserved.</p>
      </div> 
    </footer>
  );
}

export default Footer;
 