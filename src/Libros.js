import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Libros = () => {
  const [Libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await axios.get('https://anapioficeandfire.com/api/books');
        setLibros(response.data);
      } catch (error) {
        console.log('Error al obtener el listado de libros:', error);
      }
    };

    fetchLibros();
  }, []);

  return (
    <div>
      <h1>Listado de Libros</h1>
      {Libros.map((libro) => (
        <div key={libro.url}>
          <h2>Título: {libro.name}</h2>
          <p>Autor(es): {libro.authors.join(', ')}</p>
          <p>Número de páginas: {libro.numberOfPages}</p>
          <p>Año de publicación: {libro.released}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Libros;
