import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="logo app-title">
          Shooooort
        </div>
        <div className="normal-text app-subtitle">
          The link shortener with a long name
        </div>
      </header>
    );
  }
}
