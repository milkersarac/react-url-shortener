import React, { Component } from 'react';
import './LinkForm.css';
import axios from 'axios';

export default class LinkForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      doesPlaceholderAppear: true,
    }

    this.shortenLink = this.shortenLink.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
  }

  shortenLink(event) {
    event.preventDefault();

    let linkToShorten = this._linkToShorten.value;
    if (!this.state.doesPlaceholderAppear){
      // console.log('link shortened: ', linkToShorten, this.props);
      axios.post('/shorten',
                { url: linkToShorten, shortcode: null })
        .then((response) => {
          console.log('shorten successfully: ', response);
          let linkData = {
            shortcode: response.data.shortcode,
            visits: 1,
            lastVisited: Date.now(),
            originalLink: linkToShorten
          }
          this.props.populateLinkList(linkData);
        }
      );

      this._linkToShorten.value = '';
      this.onTextInputChange();
    }
    else {
      console.log('button disabled!');
    }
  }

  onTextInputChange() {
    // console.log('onTextInputChange: ', this._linkToShorten.value);
    if (this._linkToShorten.value.length > 0) {
      this.setState({
        doesPlaceholderAppear: false
      });
    }
    else {
      this.setState({
        doesPlaceholderAppear: true
      });
    }
  }

  render() {
    return (
      <div className="url-form">
        <form onSubmit={this.shortenLink}>
          <input className="url-input normal-text"
            ref={(a) => this._linkToShorten = a}
            onChange={() => this.onTextInputChange()}
            placeholder="Paste the link you want to shorten here">
          </input>
          <button className={(this.state.doesPlaceholderAppear ? 'shorten-button-disabled' : 'shorten-button') + " normal-text"}
            type="submit">
            Shorten this link
          </button>
        </form>
      </div>
    );
  }
}
