import React from "react";
import { 
  MailOutline, 
  LocalPostOffice,
  Phone, 
  LocationOn, 
  Facebook, 
  Twitter, 
  Instagram 
} from "@mui/icons-material";
import "../styles/Contact.css"; 

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      
      {/* Contact Info */}
      <div className="contact-info">
        <p className="contact-item">
          <MailOutline className="contact-icon" /> Email: itmibc@gmail.com
        </p>
        <p className="contact-item">
          <LocalPostOffice className="contact-icon" /> Mail: 30208 Addis Ababa, Ethiopia
        </p>
        <p className="contact-item">
          <Phone className="contact-icon" /> Phone: +251 116 298 203
        </p>
        <p className="contact-item">
          <LocationOn className="contact-icon" /> Address: Sami Building around former Imperial Hotel,123 Main Street, Addid Ababa, Ethiopia
        </p>
        


<div className="map-container">
  <iframe
    title="Company Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6823181498803!2d38.79875457567443!3d9.00135098941982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e00292c9b7%3A0xb4e416d417339c8e!2zU2FtaSBCdWlsZGluZyB8IEdlcmppIHwg4Yiz4YiaIOGIheGKleGMuyB8IOGMiOGIreGMgiwgQWRkaXMgQWJhYmE!5e0!3m2!1sam!2set!4v1771239840059!5m2!1sam!2set" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"

 className="map-iframe"
    
  ></iframe>
</div>


</div>

      {/* Social Media */}
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="social-icon facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="social-icon twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="social-icon instagram" />
        </a>
      </div>
    </div>
  );
}

export default Contact;

