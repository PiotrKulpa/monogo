import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

class Home extends Component {

  componentDidMount() {
    //console.log(props.match.params.id);
  }

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
              <Link to="/posts/1">1</Link><span> | </span>
              <Link to="/posts/2">2</Link><span> | </span>
              <Link to="/posts/3">3</Link>
            </div>
      </div>
    );
  }
}

export default Home;
