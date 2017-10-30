import React, { Component } from 'react';
import './UrlList.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
            <CopyToClipboard text={'shooooort.com/' + shortLinkIdentifier}>
              <div id="short-link"
                onClick={() => console.log('short link clicked')}>
                shooooort.com/<span style={{color:'#EB4A42'}}>{shortLinkIdentifier}</span>
              </div>
            </CopyToClipboard>
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
