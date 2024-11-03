// src/pages/Register.js
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import usuariosData from '../assets/users/Usuarios.json';
import '../styles/Register.css';

function Register() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [imagen, setImagen] = useState(null);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('usuarios')) || usuariosData;
    const existingUser = existingUsers.find((u) => u.correo === correo);
    if (existingUser) {
      alert('El correo ya está registrado');
      return;
    }
    const newUser = {
      id: existingUsers.length + 1,
      nombre,
      correo,
      contraseña,
      telefono,
      imagen: imagen ? imagen.name : 'default-profile.png',
    };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('usuarios', JSON.stringify(updatedUsers));
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    alert('Registro exitoso');
    history.push('/perfil');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Puedes implementar la lógica para guardar la imagen en el servidor o usar FileReader
      setImagen(file);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;