import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import googleLogo from '../images/google.svg';

class Login extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="login__container">
        <div className="login__button" onClick={this.props.authenticate}>
          <img className="login__button--icon" alt="Google logo" src={googleLogo} />

          <span className="login__button--content">
            Sign in
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
