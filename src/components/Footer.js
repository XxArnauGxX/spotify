import React from "react";
import "../styles/Footer.css";
import Facebook from "../assets/logo/facebook.png";
import Instagram from "../assets/logo/instagram.png";
import LinkedIn from "../assets/logo/linkedin.png";
import Twitter from "../assets/logo/twitter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Reactify</h4>
          <p>
            Reactify es una aplicación de música que te permite disfrutar de tus
            canciones favoritas al instante.
          </p>
        </div>
        <div className="footer-section">
          <h4>Explorar</h4>
          <ul>
            <li>
              <a href="#">Cantantes</a>
            </li>
            <li>
              <a href="#">Playlists</a>
            </li>
            <li>
              <a href="#">Géneros</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Soporte</h4>
          <ul>
            <li className="contact-info">Teléfono: 123-456-789</li>
            <li className="contact-info">Correo: reactify@outlook.com</li>
            <li>
              <a href="#">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Conéctate con nosotros</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/?locale=ca_ES">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://x.com/home?lang=ca">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Reactify. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;