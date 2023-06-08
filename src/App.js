import React from "react";
import Navbar from "./componentes/Navbar/Navbar";
import Navbarresponsive from "./componentes/Navbar/Navbarresponsive";
import Libros from "./componentes/ReactTable/Libros";


function App() {
  return (
    <div>
      <Navbarresponsive/>
      <Libros/>
      
    </div>
  );
}

export default App;
