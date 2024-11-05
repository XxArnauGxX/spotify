// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import usuariosData from '../assets/users/usuarios.json';
import '../styles/Login.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('usuarios')) || usuariosData;
    const user = storedUsers.find(
      (u) => u.correo === correo && u.contraseña === contraseña
    );
    if (user) {
      setUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      history.push('/perfil');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin} aria-label="Formulario de Iniciar Sesión">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
          aria-label="Correo Electrónico"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
          aria-label="Contraseña"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;