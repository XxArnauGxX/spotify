// src/pages/UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/UserProfile.css';

function UserProfile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>No hay usuario autenticado.</p>;
  }

  return (
    <div className="user-profile">
      <h2>Perfil de Usuario</h2>
      <img
        className="profile-picture"
        src={`/assets/users/${user.imagen}`}
        alt={`${user.nombre}`}
      />
      <p><strong>Nombre:</strong> {user.nombre}</p>
      <p><strong>Correo:</strong> {user.correo}</p>
      <p><strong>Teléfono:</strong> {user.telefono}</p>
    </div>
  );
}

export default UserProfile;