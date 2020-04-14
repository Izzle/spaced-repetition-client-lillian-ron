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
          .then(console.log)
          .catch(console.log);
    }

    render() {
        const { error } = this.state
        return(
            <section>
                <div role='alert'>
                 {error && <p>{error}</p>}
                </div>

                <div className="main-card">
                    <h1>Learn LANGUAGE-NAME-HERE!</h1>
                    <p>ひらがなを習おう!</p>

                    <div className="practice-button-container">
                        <Button onClick={null} className='practice-button'>
                        Start Practicing
                        </Button>
                    </div>
                    <p>Whats next to pratice:</p>
                    <div className="word-card">
                        <DashboardWord />
                        <DashboardWord />
                        <DashboardWord />
                    </div>
                </div>


            </section>
        );
    }
}