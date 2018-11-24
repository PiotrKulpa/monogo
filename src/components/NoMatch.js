import React, { Component } from 'react';
import './NoMatch.css';

class NoMatch extends Component {
  render() {
    return (
      <div className="NoMatch">
        <h1 className="home-slogan">not found ;(</h1>
        <div className="home-subslogan">
          <p className="font_small">are you sure what you are looking for?</p>
          <p>We're sorry but there is no such site</p>
        </div>
      </div>
    );
  }
}

export default NoMatch;
