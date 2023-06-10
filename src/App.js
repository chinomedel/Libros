import React from "react";
import Navbar from "./componentes/Navbar/Navbar";
import Navbarresponsive from "./componentes/Navbar/Navbarresponsive";
import Libros from "./componentes/ReactTable/Libros";
import FormularioLibros from "./componentes/Formularios/FormularioLibros";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Button } from "./stories/Button";



function App() {
  return (
    <div>
      <Navbarresponsive />
      <Button label="Ingresar" primary={true}/>
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
