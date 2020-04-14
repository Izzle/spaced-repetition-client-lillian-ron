import React from 'react';
import './DashboardWord.css';

export default function DashboardWord(props) {

    return(
        <li>
            <h4>{props.original}</h4>
            <p><p className='p-correct-word'>Times right: {props.corrCount}</p><p className='p-incorrect-word'>Times wrong: {props.incorrCount}</p></p>
        </li>
    );
}  
