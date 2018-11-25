import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

/**
 * Class representing List component.
 * @extends React.Component
 */
class List extends Component {

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="List">
        <h1>All posts</h1>
          {/* Render posts */}
          {!this.props.posts.length === 0 ? <p>Sorry, didn't found any Post</p> : this.props.posts.map((el) =>
            <div key={el.id} className="list-single-post">
              <h2>{el.id}</h2>
              <h1>{el.title}</h1>
              <div dangerouslySetInnerHTML={{__html: el.body}} />
              <p className="app-line"></p>
            </div>
            )}
      </div>
    );
  }
}

/** @module List */
export default List;
