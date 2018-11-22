import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import List from './components/List';
import Aboutus from './components/Aboutus';
import NoMatch from './components/NoMatch';

class App extends Component {

  state = {
     defaultPosts: [],
     posts: [],
     msg: ''
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
        <div className="container-fluid">Nav</div>
        <div className="App container">
          <Switch>
            <Route exact path="/" render={()=>(
               <div>
                 <List
                   posts = {this.state.posts}
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
