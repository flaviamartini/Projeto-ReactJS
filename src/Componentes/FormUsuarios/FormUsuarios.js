import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FormUsuarios.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormGroup, ControlLabel, FormControl, HelpBlock, ButtonToolbar, Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';


import axios from 'axios';

class FormUsuarios extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }


  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const users = {
      name: this.state.name
    };

    axios.post(`177.207.220.156:8080/v1/users`, { users })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }



  render() {
    return (
      <Grid container spacing={16}>
        <Grid xs justify="center"
          alignItems="center">
          <Card className="body-margem">
            <CardContent >
              <h1>Cadastro de Usuários</h1>
              <form onSubmit={this.handleSubmit} >
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Nome:</ControlLabel>
                  <FormControl
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </FormGroup>


                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Sobrenome:</ControlLabel>
                  <FormControl label="sobrenome"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Email:</ControlLabel>
                  <FormControl label="Email"
                    type="email"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </FormGroup>

                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Telefone:</ControlLabel>
                  <FormControl label="telefone"
                    type="number"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                </FormGroup>
              </form>
              <ButtonToolbar>
                <Button type="submit" bsStyle="primary">Salvar</Button>
              </ButtonToolbar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default FormUsuarios




