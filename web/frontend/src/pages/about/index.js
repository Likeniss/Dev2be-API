import React from 'react';
import '../about/index.css';
import Header from '../../components/Header';


function About() {
    return (
        <>
            <Header />
            <main>
                <p> Nós acreditamos que podemos fazer um mundo melhor através de uma<br />
        plataforma que conecta pessoas e histórias, oferecendo o serviço de guia<br />
         turístico e contribuindo para uma experiência de intercâmbio cultural.</p>
            </main>
            <section>
                <footer>
                    <div>
                        <img src={require('../../components/Header/img/mapa.png')} alt="" /><p>Presente em 200 cidades</p>
                    </div>
                    <div>
                        <img src={require('../../components/Header/img/conexoes.png')} alt="" /><p>+40 mil conexões</p>
                    </div>
                    <div>
                        <img src={require('../../components/Header/img/membros.png')} alt="" /><p>5 mil <br />membros</p>
                    </div>
                </footer>
            </section>
        </>
    );
}
export default About;