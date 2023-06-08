import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LibrosData = ({ setLibros }) => {
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
  }, [setLibros]);

  return null;
};

export default LibrosData;
