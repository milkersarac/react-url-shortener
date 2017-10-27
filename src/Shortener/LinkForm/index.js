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
          <input ref={(a) => this._linkToShorten = a}
            placeholder="Paste the link you want to shorten here">
          </input>
          <button type="submit">Shorten this link </button>
        </form>
      </div>
    );
  }
}
