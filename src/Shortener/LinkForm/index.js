import React, { Component } from 'react';
import './LinkForm.css';

export default class LinkForm extends Component {

  constructor(props) {
    super(props);

    this.shortenLink = this.shortenLink.bind(this);
  }

  shortenLink(event) {
    event.preventDefault();
    console.log('link shortened: ', this._linkToShorten.value);
  }

  render() {
    return (
      <div className="url-form">
        <form onSubmit={this.shortenLink}>
          <input className="url-input normal-text"
            ref={(a) => this._linkToShorten = a}
            placeholder="Paste the link you want to shorten here">
          </input>
          <button className="shorten-button normal-text"
            type="submit">
            Shorten this link
          </button>
        </form>
      </div>
    );
  }
}
