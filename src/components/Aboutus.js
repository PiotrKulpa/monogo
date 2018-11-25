import React, { Component } from 'react';
import './Aboutus.css';

/**
 * Class representing Aboutus component.
 * @extends React.Component
 */
class Aboutus extends Component {

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="Aboutus">
        <h1 className="home-slogan">about us</h1>
        <div className="home-subslogan">
          <p>ARE YOU IN THE MARKET WITH US?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin enim et accumsan lobortis. Pellentesque ac enim velit. Nullam condimentum sagittis nulla non posuere. Sed placerat finibus auctor. Fusce quam arcu, porta et pretium non, fermentum in dui. Proin at tortor ut eros vulputate venenatis sit amet in tellus. Nullam elementum nec purus nec sagittis. Nulla sagittis dignissim porttitor. Suspendisse lacinia enim nec diam euismod gravida. Proin elementum felis tellus, sed sollicitudin arcu euismod at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin enim et accumsan lobortis. Pellentesque ac enim velit. Nullam condimentum sagittis nulla non posuere. Sed placerat finibus auctor. Fusce quam arcu, porta et pretium non, fermentum in dui. Proin at tortor ut eros vulputate venenatis sit amet in tellus. Nullam elementum nec purus nec sagittis. Nulla sagittis dignissim porttitor. Suspendisse lacinia enim nec diam euismod gravida. Proin elementum felis tellus, sed sollicitudin arcu euismod at.</p>
        </div>
      </div>
    );
  }
}

/** @module Aboutus */
export default Aboutus;
