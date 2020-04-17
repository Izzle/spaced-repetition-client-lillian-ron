import React, { Component } from 'react';
import './Learning.css';
import WordCard from '../WordCard/WordCard';
import ResponseCard from '../ResponseCard/ResponseCard';
import LangService from '../../services/lang-service';
import UserContext from '../../contexts/UserContext';

export default class Learning extends Component{

    static contextType = UserContext

    state = { error: null }

    componentDidMount(){
        LangService.getLanguageHead()
          .then(this.context.setCurrentWord)
          .catch(res => {
            this.setState({ error: res.error })
          })
    }

    renderWordCard() {
        const { currentWord } = this.context
        let wordCard
        if(currentWord) {
            wordCard = (
                <WordCard />
            )
        } else {
            wordCard = <p>Loading... </p>
        }
        return wordCard
    }

    renderResponseCard() {
        const { answerResponse } = this.context

        let responseCard 
        if(answerResponse !== null){
            responseCard = <ResponseCard />
        } else {
            responseCard = <p>Loading response...</p>
        }
        return responseCard
    }

    render() {
        const { error } = this.state

        let content
        if(!this.context.answerResponse) {
            content = this.renderWordCard()
        } else {
            content = this.renderResponseCard()
        } 


        return(<section>
            <div role='alert'>
                 {error && <p>{error}</p>}
            </div>

            <div className="main-card">
            {content}
            
            </div>
            
        </section>);
    }
}