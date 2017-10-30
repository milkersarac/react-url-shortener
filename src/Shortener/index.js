import React, { Component } from 'react';
import './Shortener.css';

import LinkForm from './LinkForm';
import MidInfoBar from './MidInfoBar';
import UrlList from './UrlList';

export default class Shortener extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shortenedLinkList: [],
    };

    this.populateShortenedLinkList = this.populateShortenedLinkList.bind(this);
  }

  populateShortenedLinkList(linkData) {
    let tmpShortenedLinkList = this.state.shortenedLinkList.slice();
    tmpShortenedLinkList.push(linkData);
    console.log('Shortener, populateShortenedLinkList: ', tmpShortenedLinkList, linkData);
    this.setState({
      shortenedLinkList: tmpShortenedLinkList
    });
  }

  render() {
    return (
      <div className="shortener-main">
        <LinkForm populateLinkList={this.populateShortenedLinkList}/>
        <MidInfoBar />
        <UrlList shortenedLinkList={this.state.shortenedLinkList}/>
      </div>
    );
  }
}
