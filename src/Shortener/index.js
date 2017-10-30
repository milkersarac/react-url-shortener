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
      // shortenedLinkList: sessionStorage.getItem('shortenedLinkList') ? JSON.parse(sessionStorage.getItem('shortenedLinkList')) : [],
    };

    this.populateShortenedLinkList = this.populateShortenedLinkList.bind(this);
    this.clearShortenedLinkList = this.clearShortenedLinkList.bind(this);
  }

  populateShortenedLinkList(linkData) {
    let tmpShortenedLinkList = this.state.shortenedLinkList.slice();
    tmpShortenedLinkList.push(linkData);
    console.log('Shortener, populateShortenedLinkList: ', tmpShortenedLinkList, linkData);
    this.setState({
      shortenedLinkList: tmpShortenedLinkList
    });

    // sessionStorage.setItem('shortenedLinkList', JSON.stringify(tmpShortenedLinkList));
  }

  clearShortenedLinkList() {
    console.log('Shortener, clearShortenedLinkList');
    this.setState({
      shortenedLinkList: []
    });

    // sessionStorage.setItem('shortenedLinkList', []);
  }

  render() {
    return (
      <div className="shortener-main">
        <LinkForm populateLinkList={this.populateShortenedLinkList}/>
        <MidInfoBar clearLinkList={this.clearShortenedLinkList}/>
        <UrlList shortenedLinkList={this.state.shortenedLinkList}/>
      </div>
    );
  }
}
