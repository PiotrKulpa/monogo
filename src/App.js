import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import List from './components/List';
import Aboutus from './components/Aboutus';

class App extends Component {
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
