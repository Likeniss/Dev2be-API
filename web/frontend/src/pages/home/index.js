import React from 'react';
import '../home/index.css';

import Header from '../../components/Header';

function Home() {

    return (
        <>
            <Header />
            <div class="bottompage">
                <div class="textleft">
                    <h1>DEIXE-SE GUIAR</h1>


                    <p>Selecione a cidade que você vai <br />
                        visitar ou guiar alguém, e curta a<br />
                        experiência de conhecer novas <br />
                        pessoas e criar memórias <br />
                        incríveis!
                </p>
                </div>
                <div class="imgright">
                    <a href="/about"><img src={require('../../components/Header/img/fundo.png')} alt="logo" /></a>
                </div>
            </div>
        </>
    );

}
export default Home;

