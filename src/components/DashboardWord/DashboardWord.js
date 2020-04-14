import React from 'react';
import './DashboardWord.css';

export default function DashboardWord(props) {

    return(
        <div>
            <p>{props.original}</p>
            <p>Times right: {props.corrCount} Times wrong: {props.incorrCount}</p>
        </div>
    );
}  
