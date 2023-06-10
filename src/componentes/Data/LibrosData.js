import React, { useEffect, useState } from 'react';
import axios from 'axios';


const LibrosData = ({ setLibros }) => {
  const [loading, setLoading] = useState(true); //Manejo estado de carga
  const [error, setError] = useState(null); // Manejo de error

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await axios.get('https://anapioficeandfire.com/api/books');
        setLibros(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchLibros();
  }, [setLibros]);

  if (loading) {
    return (
      <div>
        <button className="bg-blue-500 text-white rounded-md py-2 px-4 flex items-center">
          <span className="mr-2">Cargando...</span>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </button>
      </div>
    )

  }

  if (error) {
    return (
      <div>Error al obtener el listado de libros: {error.message}</div>
    )
  }

  return null;
};

export default LibrosData;
