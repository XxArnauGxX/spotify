// src/pages/Home.js
import React, { useMemo } from "react";
import "../styles/Home.css";
import artistasData from "../assets/cantantes/artistas.json";
import cancionesData from "../assets/cantantes/canciones.json";

function Home() {
  const topArtistas = useMemo(() => artistasData.slice(0, 5), []);
  const topCanciones = useMemo(() => cancionesData.slice(0, 5), []);

  return (
    <div className="home">
      {/* Sección Hero */}
      <section className="hero">
        <h1>Bienvenido a Reactify</h1>
        <p>Descubre los mejores artistas y canciones del momento</p>
      </section>

      {/* Top Artistas */}
      <section className="top-artistas">
        <h2>Top Artistas</h2>
        <div className="contenedor-artistas">
          {topArtistas.map((artista) => (
            <div className="tarjeta-artista" key={artista.id}>
              <div className="imagen-container">
                <img src={`/assets/fotosCantantes/${artista.imagen}`} alt={artista.nombre} />
              </div>
              <h3>{artista.nombre}</h3>
              <p>{artista.genero}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Canciones */}
      <section className="top-canciones">
        <h2>Top Canciones</h2>
        <div className="contenedor-canciones">
          {topCanciones.map((cancion) => (
            <div className="tarjeta-cancion" key={cancion.id}>
              <div className="imagen-container">
                <img src={`/assets/fotosCanciones/${cancion.imagen}`} alt={cancion.titulo} />
              </div>
              <h3>{cancion.titulo}</h3>
              <p>
                <strong>Artista:</strong>{" "}
                {artistasData.find((artista) => artista.id === cancion.artista_id)?.nombre || "Desconocido"}
              </p>
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