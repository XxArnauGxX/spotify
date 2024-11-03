import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import artistasData from "../assets/cantantes/artistas.json";
import cancionesData from "../assets/cantantes/canciones.json";

function Home() {
  const [artistas, setArtistas] = useState([]);
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    // Tomamos los primeros 5 artistas y canciones
    setArtistas(artistasData.slice(0, 5));
    setCanciones(cancionesData.slice(0, 5));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido a Reactify</h1>
        <p>Disfruta de tu música favorita al instante en Reactify.</p>
      </section>

      <section className="top-artistas">
        <h2>Top Artistas</h2>
        <div className="contenedor-artistas">
          {artistas.map((artista) => (
            <div key={artista.id} className="tarjeta-artista">
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
          {canciones.map((cancion) => {
            const artista = artistasData.find((a) => a.id === cancion.artista_id);
            return (
              <div key={cancion.id} className="tarjeta-cancion">
                <h3>{cancion.titulo}</h3>
                <p>{artista ? artista.nombre : "Desconocido"}</p>
                <p>{cancion.album}</p>
                <p>{cancion.duracion}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;