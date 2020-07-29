import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Explore from './pages/explore';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>   
            <Route path='/' exact component={Home}/>
            <Route path='/explorar' component={Explore}/>
            <Route path='/about' component={About}/>

                

            </Switch>
        </BrowserRouter>
    )
} 