import React from 'react';
// import { Link } from 'react-router-dom'
import LangService from '../../services/lang-service';
import UserContext from '../../contexts/UserContext';

export default class ResponseCard extends React.Component {

  static contextType = UserContext

  state = { error: null}

  handleNextClick(e) {
    e.preventDefault()
    this.context.clearAnswerResponse()
    LangService.getLanguageHead()
      .then(this.context.setCurrentWord)
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  renderTotalScore() {
    let totalScore 
    if(this.context.answerResponse) {
        totalScore = <h3>Total score is: {this.context.answerResponse.totalScore}</h3> 
    } else {
        totalScore = <h3>Total score is: Loading...</h3>
    }
    return totalScore
  }


  render(){
    const { error } = this.state

    let content
    if(this.context.answerResponse){
      if(this.context.answerResponse.isCorrect === true) {
        content = (
          <>
            <h2>せいかい! You got it right!</h2>
            <section className="word-card">
              <p>The right translation for {this.context.answerResponse.nextWord} was {this.context.answerResponse.answer} and you chose {this.context.guess}!</p>
            </section>
          </>
        )
      } else if(this.context.answerResponse.isCorrect === false){
        content = (
          <>
            <h2>ちがう...　Not quite!</h2>
            <section className="word-card">
              <p>The right translation for {this.context.answerResponse.nextWord} was {this.context.answerResponse.answer} and you chose {this.context.guess}!</p>
            </section>
          </>
        )
      }
    } else {
      content = <h2>Loading...</h2>
    }

    return(
      <>
      <div role='alert'>
        {error && <p>{error}</p>}
      </div>
      
      {content}

      <button className="next-button" onClick={e => this.handleNextClick(e)}>
        Next
      </button>

      {this.renderTotalScore()}
  </>
    )
  }
}  
