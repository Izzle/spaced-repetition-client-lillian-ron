import config from '../config'
import TokenService from './token-service'

const LangService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`,{
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getLanguageHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },
  postGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ guess })
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(err => Promise.reject(err))
        : res.json()
    )
  }
}

export default LangService