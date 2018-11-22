import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import List from './components/List';
import Aboutus from './components/Aboutus';

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
      <div className="App">
        <Route exact path="/" component={List} />
        <Route exact path="/about" component={Aboutus} />
      </div>
    );
  }
}

export default App;
