import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table';
import ColumnFilter from './ColumnFilter';
import GlobalFilter from './GlobalFilter';
import LibrosTabla from './LibrosTabla';

const Libros = () => {
  const [libros, setLibros] = useState([]);

  const formatDate = (date) => {
    const options = { year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

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

  const columns = React.useMemo(
    () => [
      { Header: 'Título', accessor: 'name', Filter: ColumnFilter },
      { Header: 'Autor(es)', accessor: 'authors', Filter: ColumnFilter },
      { Header: 'Número de páginas', accessor: 'numberOfPages', Filter: ColumnFilter, disableFilters: true },
      { Header: 'Año de publicación', accessor: 'released', Cell: ({ value }) => formatDate(value), Filter: ColumnFilter, disableFilters: true },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data: libros },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className='container mx-auto px-10'>
      <h1 className='text-center text-indigo-900 text-3xl mt-8 font-bold'>Listado de Libros</h1>
      <GlobalFilter state={state} setGlobalFilter={setGlobalFilter} />
      <LibrosTabla
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        rows={rows}
        prepareRow={prepareRow}
      />
    </div>
  );
};

export default Libros;
