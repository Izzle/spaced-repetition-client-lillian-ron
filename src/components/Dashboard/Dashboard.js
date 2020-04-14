import React, {Component} from 'react';
import Button from '../Button/Button';
import './Dashboard.css';

export default class Dashboard extends Component{

    state = { error: null}

    render() {
        const { error } = this.state
        return(
            <section>
                <div role='alert'>
                 {error && <p>{error}</p>}
                </div>

                <div className="main-card">
                    <h1>Learn LANGUAGE-NAME-HERE!</h1>
                    <p>Learning through spaced repetition will help you remember for good! To get started log in or sign up がんばれ！</p>
                
                    <Button type='submit' className='log-in-button'>
                      Start Practicing
                    </Button>

                    <div className="">
                    
                    </div>
                </div>


            </section>
        );
    }
}