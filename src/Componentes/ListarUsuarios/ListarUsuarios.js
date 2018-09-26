import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ListarUsuarios.css'
import axios from 'axios'

export default class ListarUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const usuarios = res.data;
        this.setState({ usuarios });
        console.log("RESPOSTA RECEBIDA: ", res);
      })
      .catch((err) => {
        console.log("LOG DE ERRO: ", err);
      })
  }

  render() {
    return (
      <ul>
        { this.state.usuarios.map(usuario => <li>{usuario.title}</li>)}
      </ul>
    )
  }
}