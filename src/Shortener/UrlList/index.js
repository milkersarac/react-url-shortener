import React, { Component } from 'react';
import './UrlList.css';

function ListItem(props) {
  const shortLinkIdentifier = props.shortLinkIdentifier || 'no-short';

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
          SUB-LINKasdfasdfasdfasdfasfdasdasdfasdgdkflgjlkfjghlm,bcmqwerweutoipweurt[ieryuti]
        </div>
      </div>
      <div className="visits table-headings">
        VISITS
      </div>
      <div className="last-visited table-headings">
        LAST VISITED
      </div>
    </li>
  )
}

export default class UrlList extends Component {

  render() {
    return (
      <div className="link-list-container">
        <div className="link-list-header">
          <div className="link-header table-headings">
            LINK
          </div>
          <div className="visits-header table-headings">
            VISITS
          </div>
          <div className="last-visited-header table-headings">
            LAST VISITED
          </div>
        </div>

        <ul className="link-history">

          <ListItem />
          <ListItem shortLinkIdentifier="another-short-link"/>

          <li className="link-history-item">
            <div className="link">
              <div className="link-shorten url-body">
                <div id="short-link">
                  shooooort.com/<span style={{color:'#EB4A42'}}>fnb655</span>
                </div>
                <div id="copy-message" >
                  Click to copy this link
                </div>
              </div>
              <div className="link-original normal-text">
                SUB-LINKasdfasdfasdfasdfasfdasdasdfasdgdkflgjlkfjghlm,bcmqwerweutoipweurt[ieryuti]
              </div>
            </div>
            <div className="visits table-headings">
              VISITS
            </div>
            <div className="last-visited table-headings">
              LAST VISITED
            </div>
          </li>


          <li className="link-history-item">
            <div className="link-header table-headings">
              LINK
            </div>
            <div className="visits-header table-headings">
              VISITS
            </div>
            <div className="last-visited-header table-headings">
              LAST VISITED
            </div>
          </li>

        </ul>

      </div>
    );
  }
}
