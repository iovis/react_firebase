import React, { Component, Fragment } from 'react';

import Header        from './Header';
import Login         from './Login';
import Retrospective from './Retrospective';

import base, { firebaseApp } from '../base';
import firebase from 'firebase';

import './App.css';

class App extends Component {
  state = {
    user: null
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = authData => {
    const user = authData.user.uid;
    this.setState({ user });
  }

  authenticate = () => {
    console.log('authenticate');

    const authProvider = new firebase.auth.GoogleAuthProvider();

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }

  render() {
    return (
      <div className="app">
        <Header />
        {
          (!this.state.user)
            ? <Login authenticate={this.authenticate} />
            : <Retrospective />
        }
      </div>
    );
  }
}

export default App;
