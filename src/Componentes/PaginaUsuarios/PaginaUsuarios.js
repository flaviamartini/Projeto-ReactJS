import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './PaginaUsuarios.css'
import ListarUsuarios from '../ListarUsuarios/ListarUsuarios';
import FormUsuarios from '../FormUsuarios/FormUsuarios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



class PaginaUsuarios extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="PaginaUsuarios">
                <div>
                    <FormUsuarios />
                </div>
                <div>
                    <ListarUsuarios />
                </div>
            </div>
        );
    }
}

PaginaUsuarios.propTypes = {}

PaginaUsuarios.defaultProps = {}

export default PaginaUsuarios
