import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Pagination.css';

/**
 * Class representing Pagination component.
 * @extends React.Component
 */
class Pagination extends Component {

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="Pagination">
        {/* Static pagination */}
        {/* To render automatic pagination we need number of pagination elements: */}
        {/* Math.ceil(defaultPosts.length / range)  */}
        <div>
          <NavLink activeClassName="active-route" onClick={(e) => {this.props.pag(1)}} to="/posts/1">1</NavLink>
          <NavLink activeClassName="active-route" onClick={(e) => {this.props.pag(2)}} to="/posts/2">2</NavLink>
          <NavLink activeClassName="active-route" onClick={(e) => {this.props.pag(3)}} to="/posts/3">3</NavLink>
        </div>
      </div>
    );
  }
}

/** @module Pagination */
export default Pagination;
