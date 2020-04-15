import React from 'react';
import './Word.css';

export default function Word(props) {

    return(
        <>
            <h4>{props.original}</h4>
            <div>
                <p className='p-correct-word'>Times right: {props.corrCount}</p><p className='p-incorrect-word'>Times wrong: {props.incorrCount}</p>
            </div>
        </>
    );
}  
