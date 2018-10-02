import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ListarUsuarios.css'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';



export default class ListarUsuarios extends React.Component {
  state = {
    id: '',
    users: []
  }


  deletar() {
    axios.delete(`177.207.220.156:8080/v1/users/2${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  componentDidMount() {
    axios.get(`http://177.207.220.156:8080/v1/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
        console.log("RESPOSTA RECEBIDA: ", res);
      })
      .catch((err) => {
        console.log("LOG DE ERRO: ", err);
      })
  }



  renderUsersList() {
    return this.state.users.map((users) => {
      return (
        <div key={users.id}>
          <Grid container spacing={16}>
            <Grid xs 
              >
              <List >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className="texto-lista">
                  <Table Responsive >
           
              <tr>
            
              <td >{users.id} </td>
              <td>{users.name} </td>
              <td>{users.lastName} </td>
              <td>{users.email} </td>
              <td>{users.phone} </td>
              </tr>
              </Table>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Editar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#3f51b5" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={this.deletar}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <h1>Usuários Cadastrados</h1>
            <Table>
           
              <tr>
            <td>{ this.renderUsersList() }</td>
            </tr>
                     </Table>
          </CardContent>
        </Card>

        {/* {this.state.users.map(users => <li>{users.name}</li>)}  */}
      </div>
    )
  }
}
