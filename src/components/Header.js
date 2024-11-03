// src/components/Header.js
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import logo from '../assets/logo/Reactify-logo.png';
import '../styles/Header.css';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    history.push('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/buscar-artistas">Buscar Artistas</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className="user-section">
        {user ? (
          <>
            <Link to="/perfil">
              <img
                className="foto-perfil"
                src={`/assets/users/${user.imagen}`}
                alt="Foto de Perfil"
              />
            </Link>
            <button onClick={handleLogout} className="logout-button"><strong>Cerrar Sesión</strong></button>
          </>
        ) : (
          <Link to="/login">
            <img
              className="foto-perfil"
              src="/assets/users/logoUser.jpg"
              alt="Iniciar Sesión"
            />
          </Link>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;