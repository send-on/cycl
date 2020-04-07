import React from 'react';
// import {
//   connectHits,
//   Configure
// } from 'react-instantsearch-dom';

import './App.css';

class Hit extends React.Component<Props> {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="hit-container flex-grid">
        <div className="hit-left-container col-3">
          <div className="hit-header flex-grid">
            <div className="hit-type col-3">
              {this.props.hit.stars}
            </div>
            <div className="hit-reviews col-1">
              {this.props.hit.review_count} Reviews
            </div>
          </div>
          <div className="hit-title">
            {this.props.hit.name}
          </div>
          <div className="hit-description">
            {this.props.hit.city}, {this.props.hit.zipcode}
          </div>
          {/* <div className="hit-price">
            {this.props.hit.price_formatted}
          </div> */}
        </div>
        <div className="hit-right-container col-2">
          {/* <img style={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', float: 'right' }} src={this.props.hit.thumbnail_url} alt="https://prosteps.cloudimg.io/s/resizeinbox/210x210/https://tilroy.s3-eu-west-1.amazonaws.com/154/product/picture_not_available.jpg" /> */}
          <img style={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', float: 'right' }} src='https://tilroy.s3-eu-west-1.amazonaws.com/154/product/picture_not_available.jpg' alt="https://tilroy.s3-eu-west-1.amazonaws.com/154/product/picture_not_available.jpg" />
        </div>
      </div>
    );
  }
}

export default Hit;
