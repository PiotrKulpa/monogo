import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Pagination.css';

class Pagination extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="Pagination">
        {/* Pagination */}
        <div>

          <NavLink activeClassName="active-route" onClick={(e) => {this.props.pag(1)}} to="/posts/1">1</NavLink>
          <NavLink activeClassName="active-route" onClick={(e) => {this.props.pag(2)}} to="/posts/2">2</NavLink>
          <NavLink activeClassName="active-route" onClick={(e) => {this.props.pag(3)}} to="/posts/3">3</NavLink>

        </div>
      </div>
    );
  }
}

export default Pagination;
