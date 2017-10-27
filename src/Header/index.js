import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="app-title">Shooooort</h1>
        <h2 className="app-subtitle">The link shortener with a long name</h2>
      </header>
    );
  }
}
