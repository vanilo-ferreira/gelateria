import React from "react";

import Topo from "../../componentes/Topo/";
import Rodape from "../../componentes/Rodape/";


export default function Home() {
  return (
    <div>
      <Topo />

      <main>

        <section className="secao-banner">
          <div>
            <h1>SORVETERIA ARTESANAL</h1>
          </div>
        </section>

        <section className="secao-sabores">
          <div className="sabores-imagem">
            <figure>
              <img src="assets/banner-sabores.jpg" alt="Sabores de sorvetes distintos" title="Sorvetes distintos" />
            </figure>
          </div>
          <div className="sabores-texto">
            <h2>NOSSOS SABORES</h2>
            <span>Novos e deliciosos!</span>

            <p>Sorvete bom é aquele feito com os melhores ingredientes!
              Aqui na gelateria todos os nossos produtos são naturais,
              à base de frutas e sem nenhum conservante!
              Também temos opções sem lactose e sem açúcar.
              Venha conhecer e perceber que tem como o sorvete ser delicioso e
              saudável ao mesmo tempo!
            </p>
          </div>
        </section>

        <section className="secao-eventos">
          <div className="sabores-texto">
            <h2>NOSSOS EVENTOS</h2>
            <span>Delicias com sorvete!</span>

            <p>Mais do que uma sorveteria, uma extensão da sua casa!
              Estamos aqui prontinhos para te atender e oferecer os melhores eventos
              com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
            </p>
          </div>
          <div className="sabores-imagem">
            <figure>
              <img src="assets/eventos-image.jpg" alt="Imagem de evento na Gelateria" title="Imagem de evento na Gelateria" />
            </figure>
          </div>
        </section>

        <section className="secao-sobre">
          <div className="sabores-imagem">
            <figure>
              <img src="assets/sobre-image.jpg" alt="Sabores de sorvetes distintos" title="Sorvetes distintos" />
            </figure>
          </div>
          <div className="sabores-texto">
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>

            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos
              há anos no mercado produzindo o que tem de melhor para o nosso cliente
              e você não pode ficar de fora dessa. Venha nos fazer uma visita e 
              aproveite o melhoe atendimento e o melhor sorvete da cidade.
            </p>
          </div>
        </section>

      </main>

      <Rodape />
    </div>
  )
}