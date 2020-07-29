import React from 'react';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import '../explore/index.css';


import Header from '../../components/Header';
import api from '../../services/app';

function Explore() {
    const[users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        async function loadUsers(){
            const resposta = await api('./usuarios');
            setUsers(resposta.data);
        }
        loadUsers();
    })
    return (
<>
    <Header/>
    <div id="divbuscar">
    <input type="text" placeholder="Pesquisar" id="buscar"/>
    </div>
    <div className="f">
        
        {users.map(user =>(
        <div class="guia" key={user.id}>
                <div class="guiaicon"><img src={require('../../components/Header/img/guia.png')} alt="guia"/></div>
                <div class="dados">
                    <p>{user.name}</p>
                    <span>{user.city}</span>
                    <p class="telefone">{user.tel}</p>
                </div>
            </div>
            ))}
            {users.map(user =>(
            <div class="turista" style={{alignItems:'center'}} key={user.id}>
                <img src={require('../../components/Header/img/turista.png')} alt="turista"/>
                <div class="dados" >
                    
                    <p>{user.name}</p>
                    <span>{user.city}</span>
                    <p class="telefone">{user.tel}</p>
                </div>
            </div> 
            
                ))}
    </div>
        
</>
);
}
    export default Explore;