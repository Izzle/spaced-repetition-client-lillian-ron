import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <React.Fragment>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </React.Fragment>
    );
  }
}

export default RegistrationRoute
