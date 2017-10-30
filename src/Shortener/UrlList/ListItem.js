import React, { Component } from 'react';
import './UrlList.css';

export default class ListItem extends Component {

  render() {
    const shortLinkIdentifier = this.props.shortLinkIdentifier || 'no-short';
    const originalLink = this.props.originalLink || 'no-original-link';
    const visits = this.props.visits || 'no-visits';
    const lastVisited = this.props.lastVisited || 'no-last-visits';

    return (
      <li className="link-history-item">
        <div className="link">
          <div className="link-shorten url-body">
            <div id="short-link">
              shooooort.com/<span style={{color:'#EB4A42'}}>{shortLinkIdentifier}</span>
            </div>
            <div id="copy-message" >
              Click to copy this link
            </div>
          </div>
          <div className="link-original normal-text">
            {originalLink}
          </div>
        </div>
        <div className="visits table-headings">
          {visits}
        </div>
        <div className="last-visited table-headings">
          {lastVisited}
        </div>
      </li>
    );
  }
}
