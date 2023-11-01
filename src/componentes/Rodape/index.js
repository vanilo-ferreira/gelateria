import React from "react";
import './style.css';

export default function Rodape() {
  return (
    <footer>
      <div className="limitar-secao rodape-informacoes">
        <figure className="logo-rodape">
          <img src="assets/logo.png" alt="Logo da Gelatreia" title="Logo da Gelateria" />
        </figure>
        <div className="rodape-texto">
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className="rodape-texto">
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (71) 3456-7890</p>
        </div>
        <div className="rodape-texto">
          <h3>HORÁRIO</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className="limitar-secao desenvolvedor">
        <p>Gelateria. Orgulhosamente desenvolvido por Vanilo Ferreira</p>
      </div>
    </footer>
  )
}