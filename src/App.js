import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Aboutus from './components/Aboutus';
import NoMatch from './components/NoMatch';
import Pagination from './components/Pagination';

/**
 * Class representing main component.
 * @extends React.Component
 */
class App extends Component {

  /**
   * Parameter id from url posts.
   */
  paramId = 1;

  /**
   * If true riderect to NoMatch component.
   */
  redirect = false;

  resetRedirect = () => {
    this.redirect = false
  }

  /**
   * Get url parameters and set paramId.
   */
  getParam = (e) => {
    //e < 4 ? this.paramId = e : this.paramId = 1;
    if(e < 4) {
      this.paramId = e
    } else {
      this.redirect = true;
    }
  }

  /**
   * @property {object}  this.state           - The default values for state.
   * @property {array}   state.defaultPosts   - The array of default posts.
   * @property {array}  state.latestPosts    - The array of latest posts.
   * @property {array}  state.posts          - The array of posts to manipulate for view.
   * @property {boolean}  state.goToPosts    - The boolean for check if search input is focused.
   */
  state = {
     defaultPosts: [],
     latestPosts: [],
     posts: [],
     goToPosts: false
   }

   /**
    * Set focus on search and go to /posts/1 .
    */
  onFocus() {
    this.setState({
      goToPosts: true
    });
  }

  /**
   * Unset focus on search input.
   */
  onBlur() {
    this.setState({
      goToPosts: false
    });
  }

  /**
   * Search post by title.
   */
 searchPost(e) {
     if (e.target.value.length > 0) {
       this.setState({
         posts: this.state.defaultPosts.filter((el) => el.title.toLowerCase().includes(e.target.value.toLowerCase()))
       });
     } else {
       this.setState({
         posts: this.state.defaultPosts.slice(0,5)
       });
     }
   }

 /**
  * Change posts range when pagination button is clicked.
  */
  pagination = (id) => {
     let maxRange = 5 * id;
     let minRange = maxRange - 5;

     this.setState({
       posts: this.state.defaultPosts.slice(minRange, maxRange)
     })
   }

 /**
  * Update posts library when data is fetched.
  */
  componentDidMount() {
    let maxRange = 5 * this.paramId;
    let minRange = maxRange - 5;

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((json) => {
      this.setState({
        defaultPosts: json,
        posts: json.slice(minRange, maxRange),
        latestPosts: json.slice(0, 5)
      });
    });
  }

  /**
   * Render view of main component.
   */
  render() {
    return (
      <div>

        <div className="container-fluid app-header">
          <p className="slogan pt-2">MONOGO APP ...</p>
          <input className="search"
            onChange={(e) => this.searchPost(e)}
            onFocus={() => this.onFocus()}
            onBlur={() => this.onBlur()}
            placeholder="search post" />
          <div className="row align-items-center app-menu">
            <div className="col-sm-1"><img src={require("./images/logo.jpg")} alt="logo" /></div>

          <nav className="app-navigation col-sm-10 ml-1">
              <NavLink exact activeClassName="active-menu" to="/">Home</NavLink>
              <NavLink activeClassName="active-menu" to="/posts/1">Posts</NavLink>
              <NavLink activeClassName="active-menu" to="/about">About Us</NavLink>
            </nav>

          </div>
          <div className="app-line"></div>
        </div>
        <div className="App container">

          <Switch>
            <Route exact path="/" render={()=>(
              this.state.goToPosts ? <Redirect to="/posts/1" /> :
               <div>
                   <Home
                     posts = {this.state.latestPosts}
                     />
               </div>
             )}/>
           <Route exact path="/posts/:id" render={(props)=>(
              this.redirect ?
              <Redirect to="/not-found" /> :
              <div>
                 <List
                   defPosts = {this.state.defaultPosts}
                   posts = {this.state.posts}
                   pagprops = {props}
                   pag = {this.pagination}
                   getParam = {this.getParam}
                   />
                   <Pagination
                     pag = {this.pagination}
                     />
               </div>

             )}/>
            <Route exact path="/about" component={Aboutus} />
            <Route render={() => (
                <NoMatch
                  resetParam={this.getParam}
                  resetRedirect={this.resetRedirect}
                  />
              )} />
          </Switch>

        </div>
        <div className="container-fluid app-footer pt-5">
          <div className="row align-items-center">
            <div className="col-sm-1"><img src={require("./images/logo.jpg")} alt="logo" /></div>
            <div className="footer-data col-sm-12 col-md-5 ml-1 font_small">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin enim et accumsan lobortis. Pellentesque ac enim velit. Nullam condimentum sagittis nulla non posuere. Sed placerat finibus auctor. Fusce quam arcu, porta et pretium non, fermentum in dui. Proin at tortor ut eros vulputate venenatis sit amet in tellus. Nullam elementum nec purus nec sagittis. Nulla sagittis dignissim porttitor. Suspendisse lacinia enim nec diam euismod gravida. Proin elementum felis tellus, sed sollicitudin arcu euismod at.</p>
               <p>Sed sollicitudin arcu euismod at.</p>
            </div>
            <div className="footer-data col-sm-12 col-md-5 font_small text-right">
              <p>Copyright © PIOTR KULPA 2018</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/** @module App */
export default App;
