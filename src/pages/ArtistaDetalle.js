import React from 'react';
import { useParams } from 'react-router-dom';
import artistasData from '../assets/cantantes/artistas.json';
import cancionesData from '../assets/cantantes/canciones.json';
import '../styles/ArtistaDetalle.css';


function ArtistaDetalle() {
  const { id } = useParams();
  const artista = artistasData.find(a => a.id === parseInt(id));

  const cancionesArtista = cancionesData.filter(cancion => cancion.artista_id === artista.id);

  if (!artista) {
    return <p>Artista no encontrado.</p>;
  }

  return (
    <div className="artista-detalle">
      <h2>{artista.nombre}</h2>
      <img src={artista.imagen} alt={artista.nombre} className="artista-imagen" />
      <p><strong>Género:</strong> {artista.genero}</p>
      <p><strong>Descripción:</strong> {artista.descripcion}</p>

      <h3>Canciones</h3>
      <div className="canciones-lista">
        {cancionesArtista.map(cancion => (
          <div key={cancion.id} className="cancion-item">
            <p>{cancion.titulo} - {cancion.duracion}</p>
            <audio controls>
              <source src={`/assets/fotosCanciones/${cancion.imagen}`} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistaDetalle;