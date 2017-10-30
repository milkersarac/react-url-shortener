import React, { Component } from 'react';
import './UrlList.css';
import ListItem from './ListItem';


export default class UrlList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      linkList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('UrlList, cwrp: ', this.props, nextProps);
    let tmpLinkList = [];

    for (let i = 0; i < nextProps.shortenedLinkList.length; i++) {
      let tmpLinkItem = nextProps.shortenedLinkList[i];
      tmpLinkList.push(
        <ListItem key={tmpLinkItem.shortcode}
          shortLinkIdentifier={tmpLinkItem.shortcode}
          originalLink={tmpLinkItem.originalLink}
          visits={tmpLinkItem.visits}
          lastVisited={tmpLinkItem.lastVisited}
        />
      )
    }

    this.setState({
      linkList: tmpLinkList
    });

  }



  handleCopy(e) {
    console.log('handle copy clicked');
    e.preventDefault();
    e.clipboardData.setData('text/plain', 'Hello, world!');
  }

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

          {this.state.linkList.reverse()}

        </ul>

      </div>
    );
  }
}
