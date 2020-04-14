import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Dashboard.css';
import DashboardWord from '../DashboardWord/DashboardWord';
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
            totalScore= <h4>Total correct answers: {language.total_score}</h4>
            console.log(language)
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
                            return <DashboardWord
                                key={idx}
                                original={word.original}
                                corrCount={word.correct_count}
                                incorrCount={word.incorrect_count}
                                word={word}
                            />
                        })}
                        </ul>
                    </div>
                </div>


            </section>
        );
    }
}