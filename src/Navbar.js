import React from "react"

export default function Navbar(){

    return(
        <div className="w-full h-20 flex justify-between items-center px-8 text-black">
            <h1 className="text-3xl font-bold">Libros</h1>
            <ul className="flex items-center">
                <li className="px-4"><a href="">Inicio</a></li>
                <li className="px-4"><a href="">Ingresar libro</a></li>
            </ul>
        </div>
    );
}