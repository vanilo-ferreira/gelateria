import React from "react";
import { Link } from "react-router-dom";

import './style.css';

export default function Topo() {
  return (
    <header className="topo topo-position">
      <div className="limitar-secao topo">
        <img className="imagem-topo" src="assets/logo.png" alt="Logo da Gelatreia" title="Logo da Gelateria" />

        <nav>
          <Link to="/" className="link-topo">Home</Link>
          <Link to="/sabores" className="link-topo">Sabores</Link>
          <Link to="/sobre" className="link-topo">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}