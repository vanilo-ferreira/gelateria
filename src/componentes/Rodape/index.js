import React from "react";

export default function Rodape() {
  return (
    <footer>
      <div>
        <figure>
          <img src="assets/logo.png" alt="Logo da Gelatreia" title="Logo da Gelateria" />
        </figure>
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (71) 3456-7890</p>
        </div>
        <div>
          <h3>HORÁRIO</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div>
        <p>Gelateria. Orgulhosamente desenvolvido por Vanilo Ferreira</p>
      </div>
    </footer>
  )
}