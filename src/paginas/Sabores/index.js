import React from "react";
import "./style.css";

import Topo from "../../componentes/Topo/";
import Rodape from "../../componentes/Rodape/";

export default function Sabores() {
  return (
    <div>
      <Topo />
      <main>
        <section className="secao-banner-sabores">
          <div>
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>
        <section className="secao-cardapio">
          <div>
            <h2>SABORES DE SORVETE</h2>
            <div className="box-cards">
              <div className="card-sorvete">
                <figure>
                  <img src="assets/sabor-oreo.png" alt="" title="" />
                  <figcaption>Sorvete de Oreo</figcaption>
                </figure>
                <p>Delicioso sorvete sabor Oreo.
                  Uma explosão de sabor.</p>
              </div>
              <div className="card-sorvete">
                <figure>
                  <img src="assets/sabor-pistache.png" alt="" title="" />
                  <figcaption>Sorvete de Pistache</figcaption>
                </figure>
                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
              </div>
              <div className="card-sorvete">
                <figure>
                  <img src="assets/sabor-cookies-avela.png" alt="" title="" />
                  <figcaption>Sorvete de Cookies & Avelã</figcaption>
                </figure>
                <p>
                  O nosso melhor sorvete.
                  Você vai adorrar o sabor
                </p>
              </div>
              <div className="card-sorvete">
                <figure>
                  <img src="assets/sabor-kiwi.png" alt="" title="" />
                  <figcaption>Sorvete de Kiwi</figcaption>
                </figure>
                <p>
                  Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
                </p>
              </div>
              <div className="card-sorvete">
                <figure>
                  <img src="assets/sabor-morango.png" alt="" title="" />
                  <figcaption>Sorvete de Morango</figcaption>
                </figure>
                <p>
                  Sorvete de morango gourmet. Tradicional e saboroso.
                </p>
              </div>
              <div className="card-sorvete">
                <figure>
                  <img src="assets/sabor-limao.png" alt="" title="" />
                  <figcaption>Sorvete de Limão Siciliano</figcaption>
                </figure>
                <p>
                  O incrível sorvete gourmet de limão siciliano vai te encontar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  )
}