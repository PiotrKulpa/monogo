import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Aboutus from './components/Aboutus';
import NoMatch from './components/NoMatch';

class App extends Component {

  state = {
     defaultPosts: [],
     posts: [],
     msg: ''
   }

   pagination = () => {

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
        <div className="container-fluid">
          <nav>
            <Link to="/">Home</Link><span> | </span>
            <Link to="/about">About Us</Link>
          </nav>
        </div>
        <div className="App container">

          <Switch>
            <Route exact path="/" render={()=>(
               <div>
                 <Home
                   posts = {this.state.posts}
                   pag = {this.pagination}
                   />
               </div>
             )}/>
           <Route exact path="/posts/:id" render={()=>(
               <div>
                 <List
                   posts = {this.state.posts}
                   pag = {this.pagination}
                   />
               </div>
             )}/>
            <Route exact path="/about" component={Aboutus} />
            <Route component={NoMatch} />
          </Switch>

        </div>
        <div className="container-fluid footer">Footer</div>
      </div>
    );
  }
}

export default App;
