import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <h1>List component</h1>
          {/* Render posts */}
          {!this.props.posts.length === 0 ? <p>Sorry, didn't found any Post</p> : this.props.posts.map((el) =>
            <div key={el.id}>
              <h1>{el.title}</h1>
              <div dangerouslySetInnerHTML={{__html: el.body}} />
            </div>
            )}
          {/* Pagination */}
          <div>
            <Link to="/">1</Link><span> | </span>
            <Link to="/2">2</Link><span> | </span>
            <Link to="/3">3</Link>
          </div>
      </div>
    );
  }
}

export default List;
