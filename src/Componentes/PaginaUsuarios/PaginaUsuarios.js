import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './PaginaUsuarios.css'
import ListarUsuarios from '../ListarUsuarios/ListarUsuarios';

class PaginaUsuarios extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="PaginaUsuarios">
            <card>aqui vai o componente InputUsuarios</card>
            <card><ListarUsuarios/></card>
            </div>
        );
    }
}

PaginaUsuarios.propTypes = {}

PaginaUsuarios.defaultProps = {}

export default PaginaUsuarios
