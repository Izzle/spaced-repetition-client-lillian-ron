import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import IdleService from '../services/idle-service'

const UserContext = React.createContext({
  user: {},
  language: {},
  words: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLangWords: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
})

export default UserContext

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    const state = { user: {}, error: null }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
      }

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle)
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setLangWords = langWords => {
    this.setState({ 
        language: langWords.language,
        words: langWords.words
    })
  }

  setLanguage = language => {
    this.setState({ language })
  }

  setWords = words => {
    this.setState({ words })
  }

  setUser = user => {
    this.setState({ user })
  }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub,
    })
    IdleService.regiserIdleTimerResets()
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken()
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({})
  }

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({ idle: true })
  }

  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken()
        })
      })
      .catch(err => {
        this.setError(err)
      })
  }

  render() {
    const value = {
      user: this.state.user,
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLangWords: this.setLangWords,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
