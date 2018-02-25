import React, { Component } from 'react';
import icon from '../images/rubicon_icon.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">
          <img src={icon} className="header__icon" alt="RubiconMD icon"/>
          RubiconMD Retro
        </h1>

        <div className="header__columns">
          <h2>The Good</h2>
          <h2>The Bad</h2>
          <h2>The What?</h2>
        </div>
      </div>
    );
  }
}

export default Header;
