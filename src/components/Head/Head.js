import React, { Component } from 'react'
import './Head.css';

export class Head extends Component {
    //rconst
    constructor(props) {
        super(props)
        this.state = {
             mensaje:"Espero que te diviertas",
             seccion:"Seccion: "+this.props.seccion
        }
    }
    render() {
        return (
            <header>
                <h1>{this.props.titulo}</h1>
                <img src="./media/pelican.png" alt="pelicano"/>
                {/* <p>{this.state.mensaje} !! -- {this.props.dato}</p>
                <h3>{this.state.seccion}</h3> */}

<div></div>
            </header>
        )
    }
}

export default Head

