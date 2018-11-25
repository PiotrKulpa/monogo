import React, { Component } from 'react';
import './Home.css';

/**
 * Class representing Home component.
 * @extends React.Component
 */
class Home extends Component {

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="Home">
        <h1 className="home-slogan">monogo</h1>
        <div className="home-subslogan">
          <p className="font_small">01 AUGUST 2018</p>
          <p>ARE YOU IN THE MARKET FOR A COMPUTER?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin enim et accumsan lobortis.</p>
        </div>
        <div className="home-latest">
          <h3>Latest news</h3>
          <div className="last-post-container">
          {/* Render last posts */}
          {!this.props.posts.length === 0 ? <p>Sorry, didn't found any Post</p> : this.props.posts.map((el) =>
            <div key={el.id} className="" >
              <div className="last-post">
                <img src={require(`../images/last_${el.id}.jpg`)} alt="last post" />
                <h1>{el.id}</h1>
                <h1>{el.title}</h1>
                <div dangerouslySetInnerHTML={{__html: el.body}} />
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

/** @module Home */
export default Home;
