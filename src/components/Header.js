import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo/Reactify-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Buscar</li>
          <li>Perfil</li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <img
        className="foto-perfil"
        src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
        alt="Foto-perfil"
      />
    </header>
  );
}

export default Header;