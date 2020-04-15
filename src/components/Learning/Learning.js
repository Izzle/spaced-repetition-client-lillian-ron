import React, { Component } from 'react';
import './Learning.css';
import Word from '../Word/Word';
import { Input } from '../Form/Form';
import Button from '../Button/Button';
import LangService from '../../services/lang-service';
import UserContext from '../../contexts/UserContext';

export default class Learning extends Component{

    static contextType = UserContext

    state = { error: null}

    componentDidMount(){
        LangService.getNextWord()
          .then(this.context.setCurrentWord)
          .catch(res => {
            this.setState({ error: res.error })
          })
    }
    // do conditional rendering like Logout buttons

    // original={word.original} word.original -> nextWord
    // corrCount={word.correct_count} word.correct_count -> wordCorrectCount
    // incorrCount={word.incorrect_count} word.incorrect_count -> wordIncorrectCount
    // 

    renderGuessForm() {
        const { currentWord } = this.context
        let content 
        if(currentWord) {
            content = (<>
            <h2>What's this character?</h2>
            
            <section className="word-card">
                <Word 
                original={currentWord.nextWord}
                corrCount={currentWord.wordCorrectCount}
                incorrCount={currentWord.wordIncorrectCount}
                />
            </section>

            <form className="learn-guess-form">
                <Input 
                  id='learn-guess-input'
                  name='guess'
                  type='text'
                  placeholder=' Answer'
                  required
                  />
                <Button type='submit' className='learn-button'>
                    Submit Answer
                </Button>
                 
            </form>
            <h3>Total correct answers: {currentWord.totalScore}</h3>
            </>)
        } else {
            content = <p> loading... </p>
        }
        return content
    }

    render() {
        const { error } = this.state

        return(<section>
            <div role='alert'>
                 {error && <p>{error}</p>}
            </div>

            <div className="main-card">
            {this.renderGuessForm()}
            </div>
            
        </section>);
    }
}