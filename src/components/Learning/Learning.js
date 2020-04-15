import React, { Component } from 'react';
import './Learning.css';
import Word from '../Word/Word';
import { Input } from '../Form/Form';
import Button from '../Button/Button';

export default class Learning extends Component{

    state = { error: null}

    componentDidMount(){}
    // do conditional rendering like Logout buttons

    // original={word.original} word.original -> nextWord
    // corrCount={word.correct_count} word.correct_count -> wordCorrectCount
    // incorrCount={word.incorrect_count} word.incorrect_count -> wordIncorrectCount
    render() {
        const { error } = this.state

        return(<section>
            <div role='alert'>
                 {error && <p>{error}</p>}
            </div>

            <div className="main-card">
                <h2>What's this character?</h2>
                
                <section className="word-card">
                    <Word 
                    original={'JAPANESE WORD'}
                    corrCount={'100000000dfsdf0'}
                    incorrCount={'102031203130'}
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
                     {/* use <Button/> and <Input /> */}
                </form>
                <h4>Total correct answers: {'4234423'}</h4>
            </div>
        </section>);
    }
}