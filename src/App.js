import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListarUsuarios from './Componentes/ListarUsuarios/ListarUsuarios';
import PaginaUsuarios from './Componentes/PaginaUsuarios/PaginaUsuarios';

import { Card, CardContent, Tab, Tabs, AppBar, TabContainer, Menu } from '../node_modules/@material-ui/core';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Tabs >
            <Tab label="Usuários" />
            <Tab label="Instrumentos" />
          </Tabs>
        </AppBar>
        <PaginaUsuarios />
      </div>
    );
  }
}

export default App;
