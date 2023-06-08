import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table';
import ColumnFilter from './ColumnFilter';



const Libros = () => {
  const [libros, setLibros] = useState([]);

  const data = React.useMemo(() => libros, [libros]);

  const formatDate = (date) => {
    const options = { year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const [tituloFilter, setTituloFilter] = useState('');

  const columns = React.useMemo(
    () => [
      { Header: 'Título', accessor: 'name', Filter: ColumnFilter,},
      { Header: 'Autor(es)', accessor: 'authors', Filter: ColumnFilter, },
      { Header: 'Número de páginas', accessor: 'numberOfPages', Filter: ColumnFilter, disableFilters : true },
      { Header: 'Año de publicación', accessor: 'released', Cell: ({ value }) => formatDate(value),Filter: ColumnFilter, disableFilters : true  },
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
    setFilter,
  } = useTable(
    { columns, data:libros,  },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

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
    <div className='container mx-auto px-10'>
      <h1 className='text-center text-indigo-900 text-3xl mt-8 font-bold'>Listado de Libros</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={state.globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className='border border-gray-300 rounded px-4 py-2 mb-4'
      />
      <table {...getTableProps()} className='border border-slate-400 w-full'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} 
                className='border border-slate-300 bg-indigo-700 text-white h-10'>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                  </span>
                  <div>
                   {column.canFilter ? column.render('Filter'):null}
                  </div>
                  
                  
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} 
                  className='border border-slate-300 text-center h-10'>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Libros;
