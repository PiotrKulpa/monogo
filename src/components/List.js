import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

class List extends Component {

  componentDidMount() {
    //TODO: add url params support
      console.log(this.props.pagprops.match.params.id);
  }

  render() {
    return (
      <div className="List">
        <h1>List component</h1>
          {/* Render posts */}
          {!this.props.posts.length === 0 ? <p>Sorry, didn't found any Post</p> : this.props.posts.map((el) =>
            <div key={el.id}>
              <h2>{el.id}</h2>
              <h1>{el.title}</h1>
              <div dangerouslySetInnerHTML={{__html: el.body}} />
            </div>
            )}


      </div>
    );
  }
}

export default List;
