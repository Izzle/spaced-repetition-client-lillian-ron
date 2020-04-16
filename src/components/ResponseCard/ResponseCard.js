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
    console.log(this.context.answerResponse)
    console.log(this.context.currentWord)
    //do another get
  }

  render(){
    const { currentWord } = this.context
    const { error } = this.state
    return(
      <>
      <h2>Response</h2>

      <div role='alert'>
        {error && <p>{error}</p>}
      </div>
      
      <section className="word-card">
        <p>response ResponseCard</p>
      </section>

        <button onClick={e => this.handleNextClick(e)}>
          Next
        </button>
  </>
    )
  }
}  
