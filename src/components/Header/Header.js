import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='nav-right'>
        <span>
          {this.context.user.name}
        </span>
        <div>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'
            className='logout'>
            Logout
          </Link>
          <Link to='/dashboard' className='dashboard'>Dashboard</Link>
        </div>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='nav-right'>
        <Link to='/login' className='login'>Login</Link>
        {' '}
        <Link to='/register' className='reg'>Sign up</Link>
      </div>
    )
  }


  render() {
    return (
      <header>
        <nav>
            <h1 className='title-link'>
            <Link to='/'>
                ひらがな
            </Link>
            </h1>
            {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </header>
    );
  }
}

export default Header
