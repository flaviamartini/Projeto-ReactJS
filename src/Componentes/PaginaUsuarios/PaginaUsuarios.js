import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './PaginaUsuarios.css'
import ListarUsuarios from '../ListarUsuarios/ListarUsuarios';
import FormUsuarios from '../FormUsuarios/FormUsuarios';



class PaginaUsuarios extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="PaginaUsuarios">
            <FormUsuarios/>
            <ListarUsuarios/>
            </div>
        );
    }
}

PaginaUsuarios.propTypes = {}

PaginaUsuarios.defaultProps = {}

export default PaginaUsuarios
