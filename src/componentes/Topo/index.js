import React from "react";
import { Link } from "react-router-dom";

export default function Topo() {
  return (
    <header>
      <div>
        <figure>
          <img src="assets/logo.png" alt="Logo da Gelatreia" title="Logo da Gelateria" />
        </figure>
        
        <nav>
          <Link href="#home">Home</Link>
          <Link href="#sabores">Sabores</Link>
          <Link href="#sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}