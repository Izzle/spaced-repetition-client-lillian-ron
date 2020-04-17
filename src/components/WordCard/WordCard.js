import React from 'react';
import Word from '../Word/Word';
import { Input } from '../Form/Form';
import Button from '../Button/Button';
import LangService from '../../services/lang-service';
import UserContext from '../../contexts/UserContext';

export default class WordCard extends React.Component {

  static contextType = UserContext

  state = { error: null}

  handleGuessSubmit(e) {
    e.preventDefault()
    
    let guess = e.target.guess.value

    this.context.setGuess(guess)
    console.log(this.context.guess)
    LangService.postGuess({
        guess: guess
      })
        .then(res => {
          console.log(res)
            guess = ''
           this.context.setAnswerResponse(res)
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
  }

  renderTotalScore() {
    let totalScore 
    if(this.context.currentWord) {
        totalScore = <h3>Total score is: {this.context.currentWord.totalScore}</h3> 
    } else {
        totalScore = <h3>Total score is: Loading...</h3>
    }
    return totalScore
  }

    render(){
      const { currentWord } = this.context
      const { error } = this.state
    return(
      <>
      <h2>What's this character?</h2>

      <div role='alert'>
        {error && <p>{error}</p>}
      </div>
      
      <section className="word-card">
          <Word 
          original={currentWord.nextWord}
          corrCount={currentWord.wordCorrectCount}
          incorrCount={currentWord.wordIncorrectCount}
          />
      </section>

      <form className="learn-guess-form" onSubmit={e => this.handleGuessSubmit(e)}>
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

      {this.renderTotalScore()}
  </>
    )
  }
}  
