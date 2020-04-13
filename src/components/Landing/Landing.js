import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

import './Landing.css'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  render() {
    const { error } = this.state
    return (
      <section> 
        
         <div role='alert'>
          {error && <p>{error}</p>}
        </div>

        <div className="title-card">
          <h1>Learn Hiragana the better way!</h1>
          <p>Learning through spaced repetition will help you remember for good! To get started log in or sign up がんばれ！</p>
        </div>

        <div className="login-buttons">
          <Link to="/register" className="sign">Sign up</Link>
          <Link to="/login" className="log">Log in</Link>
        </div>
      </section>
    )
  }
}

export default LoginForm