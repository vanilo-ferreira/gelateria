import React from 'react';

import Topo from "../../componentes/Topo/";
import Rodape from "../../componentes/Rodape/";

import "./style.css";

export default function Sobre() {
    return (
        <div>
            <Topo />
            <section className='sobre'>
                <div className="secao-sobre-container">
                    <h1 className='titulo-sobre'>A GELATERIA</h1>
                </div>
            </section>
            <section className='sobre-nos'>
                <div className='texto-sobre-nos'>
                    <h2>Sobre Nós</h2>
                    <h3>Nós simplismente amamos sorvete!</h3>
                    <p>
                        Somos uma empresa apaixonada pelo que faz.
                        Colocamos amor em cada sorvete produzido.
                        Fazemos o melhor sorvete para os nossos clientes
                        e gostamos de receber elogios.
                        Estamos operando desde 2019 com as melhores
                        matérias-primas para a produção final do sorvete.
                        Vendemos tanto para o varejo como para o atacado.
                    </p>
                    <p>
                        Nossos clientes podem compraros nossos sorvetes e degustar
                        na nosssa  loja ou levar para sua residência e aproveitar junto com a familia.
                        Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais.
                        Para contratar os nossos serviços, basta entarr em contato conosco. Iremos proporcionar o melhor atendimento e os
                        melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </div>
            </section>
            <section className='imagens-sobre'>
                <div>
                    <img className="imagem" src="assets/sobre-image.jpg" alt="Amigos reunidos tomando um sorvete" title="Amigos tomando sorvete" />
                    <img className="imagem" src="assets/sorveteria.jpg" alt="Geleteria" title="Geleteria" />
                </div>
            </section>

            <Rodape />
        </div>
    )
}