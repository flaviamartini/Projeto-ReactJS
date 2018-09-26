import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListarUsuarios from './Componentes/ListarUsuarios/ListarUsuarios';
import PaginaUsuarios from './Componentes/PaginaUsuarios/PaginaUsuarios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <PaginaUsuarios/>
      </div>
    );
  }
}

export default App;
