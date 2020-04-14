import React, {Component} from 'react';
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
        let title
        if(language) {
            title = <h2>Learn {language.name}</h2>
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

                    <div className="practice-button-container">
                        <Button onClick={null} className='practice-button'>
                        Start Practicing
                        </Button>
                    </div>
                    <p>Whats next to pratice:</p>
                    <div className="word-card">
                        {words.map((word, idx )=> {
                            return <DashboardWord
                                key={idx}
                                original={word.original}
                                corrCount={word.correct_count}
                                incorrCount={word.incorrect_count}
                                word={word}
                            />
                        })}
                    </div>
                </div>


            </section>
        );
    }
}