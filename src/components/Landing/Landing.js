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
          <h2>Learn Hiragana</h2>
          <p>Some Japanese stuff here! (lillllyyy)</p>
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