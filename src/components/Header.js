import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import icon from '../images/rubicon_icon.png';
import './Header.css';

class Header extends Component {
  static propTypes = {
    user: PropTypes.string,
    logout: PropTypes.func.isRequired
  };

  renderColumns() {
    return (
      <Fragment>
        <a className="header__logout" onClick={this.props.logout}>Log Out</a>

        <div className="header__columns">
          <h2>The Good</h2>
          <h2>The Bad</h2>
          <h2>The What?</h2>
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <div className="header">
        <h1 className="header__title">
          <img src={icon} className="header__icon" alt="RubiconMD icon"/>
          RubiconMD Retro
        </h1>

        { this.props.user && this.renderColumns() }
      </div>
    );
  }
}

export default Header;
