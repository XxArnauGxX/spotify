// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar el envío del formulario
    console.log('Formulario de contacto enviado:', { nombre, correo, asunto, mensaje });
    alert('¡Mensaje enviado exitosamente!');
    // Reiniciar los campos del formulario
    setNombre('');
    setCorreo('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit} aria-label="Formulario de Contacto">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          placeholder="Tu nombre"
        />

        <label htmlFor="correo">Correo Electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
          placeholder="tuemail@example.com"
        />

        <label htmlFor="asunto">Asunto:</label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          required
          placeholder="Asunto de tu mensaje"
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;