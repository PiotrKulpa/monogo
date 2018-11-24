import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

class Pagination extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="Pagination">
        {/* Pagination */}
        <div>

          <Link onClick={(e) => {this.props.pag(1)}} to="/posts/1">1</Link>
          <Link onClick={(e) => {this.props.pag(2)}} to="/posts/2">2</Link>
          <Link onClick={(e) => {this.props.pag(3)}} to="/posts/3">3</Link>

        </div>
      </div>
    );
  }
}

export default Pagination;
