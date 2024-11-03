// src/pages/Home.js
import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import artistasData from "../assets/cantantes/artistas.json";
import cancionesData from "../assets/cantantes/canciones.json";

function Home() {
  const [artistas, setArtistas] = useState([]);
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    // Limitar a 5 artistas
    setArtistas(artistasData.slice(0, 5));
    // Limitar a 5 canciones
    setCanciones(cancionesData.slice(0, 5));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a Reactify</h1>
        <p>Descubre los mejores artistas y canciones del momento</p>
      </section>

      <section className="top-artistas">
        <h2>Top Artistas</h2>
        <div className="contenedor-artistas">
          {artistas.map((artista) => (
            <div className="tarjeta-artista" key={artista.id}>
              <div className="imagen-container">
                <img src={artista.imagen} alt={artista.nombre} />
              </div>
              <h3>{artista.nombre}</h3>
              <p>{artista.genero}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="top-canciones">
        <h2>Top Canciones</h2>
        <div className="contenedor-canciones">
          {canciones.map((cancion) => (
            <div className="tarjeta-cancion" key={cancion.id}>
              <div className="imagen-container">
                <img src={`/assets/cantantes/${cancion.imagen}`} alt={cancion.titulo} />
              </div>
              <h3>{cancion.titulo}</h3>
              <p>{cancion.artista}</p>
              <p className="duracion-album">
                <strong>Duración:</strong> {cancion.duracion} | <strong>Álbum:</strong> {cancion.album}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;