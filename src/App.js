import React from "react";
import Navbar from "./componentes/Navbar/Navbar";
import Navbarresponsive from "./componentes/Navbar/Navbarresponsive";
import Libros from "./componentes/ReactTable/Libros";
import FormularioLibros from "./componentes/Formularios/ForumularioLibros";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Navbarresponsive />
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/ingresarLibro" element={<FormularioLibros />} />
          <Route exact path="/" element={<Libros />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
