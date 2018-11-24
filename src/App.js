import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Aboutus from './components/Aboutus';
import NoMatch from './components/NoMatch';
import Pagination from './components/Pagination';

class App extends Component {


  state = {
     defaultPosts: [],
     posts: [],
     msg: ''
   }


   /**
  * Search post by title.
  */
 searchPost(e) {
console.log(this.state.defaultPosts);
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

   pagination = (id) => {
     let maxRange = 5 * id;
     let minRange = maxRange - 5;

     this.setState({
       posts: this.state.defaultPosts.slice(minRange, maxRange)
     })
   }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((json) => {
      this.setState({
        defaultPosts: json,
        posts: json.slice(0, 5)
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid app-header">
          <p className="slogan pt-2">WHEN YOU ENTER INTO ANY NEW AREA OF SCIENCE...</p>
          <input className="search mt-5 mr-5" onChange={(e) => this.searchPost(e)} />
          <div className="row align-items-center app-menu">
            <div className="col-sm-1"><img src={require("./images/logo.jpg")} /></div>
            <nav className="app-navigation col-sm-10 ml-1">
              <Link to="/">Home</Link>
              <Link to="/posts/1">Posts</Link>
              <Link to="/about">About Us</Link>
            </nav>
          </div>

          <div className="app-line"></div>

        </div>
        <div className="App container">

          <Switch>
            <Route exact path="/" render={()=>(
               <div>
                 <Home
                   posts = {this.state.posts}
                   />
               </div>
             )}/>
           <Route exact path="/posts/:id" render={(props)=>(
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
            <Route component={NoMatch} />
          </Switch>

        </div>


        <div className="container-fluid app-footer">Footer</div>
      </div>
    );
  }
}

export default App;
