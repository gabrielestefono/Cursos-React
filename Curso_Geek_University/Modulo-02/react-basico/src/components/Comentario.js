import React from 'react';
import './comentario.css'

// JSX

const Comentario = props => 
    <div className="comentario">
        <h2> {props.nome} </h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
    </div>

export default Comentario;