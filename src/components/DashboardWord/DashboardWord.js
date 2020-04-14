import React from 'react';
import './DashboardWord.css';

export default function DashboardWord(props) {

    return(
        <div>
            <p>Japanese word here</p>
           <p>{`Times right: NUM_RIGHT Times wrong: NUM_WRONG`}</p>
        </div>
    );
} 