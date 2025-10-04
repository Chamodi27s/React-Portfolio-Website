import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebookF, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - Logo/Name */}
        <div className="footer-brand">
          <h2>🌐 Chamodi Sandeepani</h2>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Middle - Contact Details */}
        <div className="footer-contact">
          <p><FaEnvelope /> Email: sandeepanichamodi611@gmail.com</p>
          <p><FaPhone /> Phone: +94 72 041 7529</p>
          <p><FaWhatsapp /> WhatsApp: +94 77 904 0583</p>
          <p><FaMapMarkerAlt /> Location: Colombo, Sri Lanka</p>
        </div>

        {/* Right side - Socials */}
        <div className="footer-socials">
          <a href="mailto:sandeepanichamodi611@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Chamodi27s" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chamodi-sandeepani-7929a6297/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100089976047108" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/94779040583" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
