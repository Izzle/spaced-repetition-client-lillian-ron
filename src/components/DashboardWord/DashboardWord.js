import React from 'react';
import './DashboardWord.css';

export default function DashboardWord(props) {

    return(
        <li>
            <h4>{props.original}</h4>
            <p><span clasName='span-correct-word'>Times right: {props.corrCount}</span><span className='span-incorrect-word'>Times wrong: {props.incorrCount}</span></p>
        </li>
    );
}  
