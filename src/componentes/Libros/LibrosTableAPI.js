import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Es la llamada a la API y muestra los libros con uan Tabla tradicional
const LibrosTableAPI = () => {
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
      <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Autor(es)</th>
              <th>Páginas</th>
              <th>Año publicación</th>
            </tr>
          </thead>
          <tbody>
          {Libros.map((libro) => (
            <tr>
              <td>{libro.key}</td>
              <td>{libro.name}</td>
              <td>{libro.authors.join(', ')}</td>
              <td>{libro.numberOfPages}</td>
              <td>{libro.released}</td>
            </tr>
          ))};
          </tbody>
      </table>
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

export default LibrosTableAPI;
