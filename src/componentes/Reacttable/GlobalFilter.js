import React from 'react';

const GlobalFilter = ({ state, setGlobalFilter }) => {
  return (
    <input
      type='text'
      placeholder='Buscar...'
      value={state.globalFilter || ''}
      onChange={(e) => setGlobalFilter(e.target.value)}
      className='border border-gray-300 rounded px-4 py-2 mb-4'
    />
  );
};

export default GlobalFilter;
