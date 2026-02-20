import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/Navbar.css" 
import logo from "../../assets/logo.JPG";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Izeddin and Tajeddin Insurance Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          {/* <li>
            <Link to="/quote" className="quote-btn" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </li> */}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
