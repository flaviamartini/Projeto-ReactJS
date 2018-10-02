import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ListarUsuarios.css'
import axios from 'axios'
import { Table,Button } from 'react-bootstrap'


export default class ListarUsuarios extends React.Component {
  state = {
   users: []
  }

  componentDidMount() {
    axios.get(`http://177.207.220.156:8080/v1/users`)
      .then(res => {
        const users = res.data;
        this.setState({users });
        console.log("RESPOSTA RECEBIDA: ", res);
      })
      .catch((err) => {
        console.log("LOG DE ERRO: ", err);
      })
  }

  renderUsersList() {
    return this.state.users.map((users) => {
      return (
        <tr key={users.id}>
          <td>{users.id}</td>
          <td>{users.name}</td>
          <td>{users.lastName}</td>
          <td>{users.email}</td>
          <td>{users.phone}</td>
          <Button bsStyle="info">Editar</Button>
          <Button bsStyle="danger">Excluir</Button>
        </tr>
      )
    })
  }


  render() {
    return (
      <div>
        
<Table responsive>
  <thead>
    <tr>
      <th>id</th>
      <th>Nome</th>
      <th>Sobrenome</th>
      <th>Email</th>
      <th>Telefone</th>
    </tr>
  </thead>
  <tbody>
  { this.renderUsersList() }
  </tbody>
</Table>;

        {/* {this.state.users.map(users => <li>{users.name}</li>)}  */}
      </div> 
    )
  }
}