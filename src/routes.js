import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import clientes from './pages/clientes';
import produtos from './pages/produtos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/clientes" component= {clientes}/>
                <Route path="/produtos" component= {produtos}/>
                
            </Switch>
        </BrowserRouter>
    );
}

