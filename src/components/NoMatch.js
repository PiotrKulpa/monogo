import React, { Component } from 'react';
import './NoMatch.css';

/**
 * Class representing NoMatch component.
 * @extends React.Component
 */
class NoMatch extends Component {

  /**
   * Reset redirect to false to prevent always loading not found.
   */
  componentDidMount() {
    this.props.resetRedirect();
  }

  /**
   * Render view of this component.
   */
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

/** @module NoMatch */
export default NoMatch;
