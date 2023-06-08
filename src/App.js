import React from "react";
import Navbar from "./componentes/Navbar/Navbar";
import Navbarresponsive from "./componentes/Navbar/Navbarresponsive";
import Libros from "./componentes/Libros/Libros";
import Reacttable from "./componentes/Reacttable/Reacttable";

function App() {
  return (
    <div>
      <Navbarresponsive/>
      <Reacttable/>
      
    </div>
  );
}

export default App;
