import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Word from '../Word/Word';
import LangService from '../../services/lang-service';
import UserContext from '../../contexts/UserContext';


export default class Dashboard extends Component{

    static contextType = UserContext;

    state = { error: null}

    componentDidMount() {
        LangService.getLanguage()
          .then(res => this.context.setLangWords(res))
          .catch(res => {
              this.setState({ error: res.error })
          });
    }

    render() {
        const { error } = this.state
        const { language } = this.context
        const { words = [] } = this.context
        let title, totalScore
        if(language) {
            title = <h2>Learn {language.name}</h2>
            totalScore= <h3>Total correct answers: {language.total_score}</h3>
        } else {
           title = <p> loading </p>
        }
        
        return(
            <section>
                <div role='alert'>
                 {error && <p>{error}</p>}
                </div>

                <div className="main-card">
                    {title}
                    <p>ひらがなを習おう!</p>

                    <div className="practice-Link-container">
                        <Link to='/learn' className='practice-Link'>
                            Start Practicing
                        </Link>
                    </div>
                    {totalScore}
                    <div className="word-card">
                      <h3>Whats next to practice:</h3>
                      <ul className="word-list">
                        {words.map((word, idx )=> {
                            return <li><Word
                                key={idx}
                                original={word.original}
                                corrCount={word.correct_count}
                                incorrCount={word.incorrect_count}
                            /></li>
                        })}
                        </ul>
                    </div>
                </div>


            </section>
        );
    }
}