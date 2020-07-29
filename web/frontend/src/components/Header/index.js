import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './index.css';
import {useHistory} from 'react-router-dom';

import api from '../../services/app.js';

const customStyles = {
    content : {

    }
  };
  const registerStyles = {
    content : {
  
    }
  };
  Modal.setAppElement('#root')

    function Header(){
        var subtitle;
        const [modalIsOpen,setIsOpen] = React.useState(false);
        const [registerIsOpen,regIsOpen] = React.useState(false);
        
        const [registerFullname, setRegisterFullname] = React.useState('');
        const [registerEmail, setRegisterEmail] = React.useState('');
        const [registerPassword, setRegisterPassword] = React.useState('');
        const [registerPhone, setRegisterPhone] = React.useState('');
        const [registerType, setRegisterType] = React.useState('');
        const [registerCity, setRegisterCity] = React.useState('');

        const [loginEmail, setLoginEmail] = React.useState('');
        const [loginPassword, setLoginPassword] = React.useState('');

        const history = useHistory();

        async function handleAddUser(e){
            e.preventDefault();
            const data = {
                'name':registerFullname,
                'email':registerEmail,
                'password':registerPassword,
                'tel':registerPhone,
                'type':registerType,
                'city':registerCity

            };

            try{
                await api.post('/cadastro', data);
                history.push('./explorar');
            }catch(err){
                alert('Erro no cadastro de dados');
            }
        }
        async function handleLoginUser(e){
            e.preventDefault();

            try{
                const resposta = await api.post('./login', {'email':loginEmail, 'password': loginPassword});
                localStorage.setItem('id', resposta.data.id);
                localStorage.setItem('name', resposta.data.name);
                localStorage.setItem('city', resposta.data.city);
                
                var nameUser = localStorage.getItem('name');
                alert("Bem vindo "+  nameUser);
                history.push ('./explorar');
            }catch(err){
                alert('Erro no login');
            }
        }
        function openModal() {
          setIsOpen(true);
        }

       
        function closeModal(){
          setIsOpen(false);
        }
        function openRegister() {
          regIsOpen(true);
        }

       
        function closeRegister(){
          regIsOpen(false);
        }
        return(
            <>
        <header>
            
            <a href="/"><img src={require('./img/Travelguide.png')} alt="Logo" /></a>
            <nav> 
                <ul>
                <div><li><a href="/about">Sobre</a></li></div>
                    <li><a href="/explorar">Usuários</a></li>
                    <li><a onClick={openModal} id="myBtn" className="fundo">Login</a></li>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                    <div className="flex">
                        <div className="style">
                            <span class="close" onClick={closeModal}>&times;</span>

                            <h1 class="bemVindo">Seja Bem Vindo </h1>
                            <p class="faca">Faça seu login e aproveite muitas novidades</p>
                            <section class="login">
                                <form onSubmit={handleLoginUser}>
                                        <input class="log" type="email" placeholder="Login" value={loginEmail} onChange={e=>setLoginEmail(e.target.value)}/>
                                        <input class="log" type="password" placeholder="Password" value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/>
                                        <button type="submit" class="botaolog">Entrar</button>
                                    <div>
                                        <a class="senha">Esqueceu sua senha?</a>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>


        </Modal>
        <Modal
                        isOpen={registerIsOpen}
                        onRequestClose={closeRegister}
                        style={registerStyles}
                        contentLabel="Example Modal"
                    >
                    <div className="flex"> 
                        <div>

                            <span class="close" onClick={closeRegister}>&times;</span>

                            <h1 class="bemVindo">Seja Bem Vindo </h1>
                            <p class="faca">Faça seu cadastro e aproveite muitas novidades</p>
                            <section class="login">
                                <form onSubmit={handleAddUser}>
                                        <input class="log" type="text" placeholder="Digite seu nome" value={registerFullname} onChange={e =>setRegisterFullname(e.target.value)} />
                                        <input class="log" type="password" placeholder="Digite sua senha" value={registerPassword} onChange={e =>setRegisterPassword(e.target.value)}/>
                                        <input class="log" type="tel" placeholder="Digite seu telefone"value={registerPhone} onChange={e =>setRegisterPhone(e.target.value)}/>
                                        <input class="log" type="email" placeholder="Digite seu Email" value={registerEmail} onChange={e =>setRegisterEmail(e.target.value)}/>
                                        <input type="text" placeholder="Digite 1 ou 0, 1 para turista, e 0 para guia" value={registerType} onChange={e=> setRegisterType(e.target.value)} />
                                        <input class="log" type="text" placeholder="Digite sua cidade" value={registerCity} onChange={e =>setRegisterCity(e.target.value)}/>
                                        <input type="submit" class="botaolog" value="Entrar"/>
                                </form>
                            </section>
                        </div>
                    </div>

        </Modal>
                    
                    <li className="cadastro"><a onClick={openRegister} className="cadastroa">Cadastre-se</a></li>
                </ul>
            </nav>       
        </header>
        </>
        );
    }
    ReactDOM.render(<Header />, document.getElementById('root'));
    export default Header;