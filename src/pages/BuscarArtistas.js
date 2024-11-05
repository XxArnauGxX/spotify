// src/pages/BuscarArtistas.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import artistasData from '../assets/cantantes/artistas.json';
import '../styles/BuscarArtistas.css';

function BuscarArtistas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [artistsPerPage] = useState(10);

  // Filtrar artistas según el término de búsqueda
  const filteredArtists = artistasData.filter(artista =>
    artista.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular índices para la paginación
  const indexOfLastArtist = currentPage * artistsPerPage;
  const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
  const currentArtists = filteredArtists.slice(indexOfFirstArtist, indexOfLastArtist);
  const totalPages = Math.ceil(filteredArtists.length / artistsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="buscar-artistas">
      <h2>Buscar Artistas</h2>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="artist-list">
        {currentArtists.map(artista => (
          <div key={artista.id} className="artist-card">
            <Link to={`/artista/${artista.id}`}>
              <img src={artista.imagen} alt={artista.nombre} />
              <h3>{artista.nombre}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BuscarArtistas;