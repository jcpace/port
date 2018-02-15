import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className='navigation'>
        <a href="/html/">work</a> |
        <a href="/css/">about</a> |
        <a href="/js/">contact</a> |
      </nav>
       <p className='name'>Joshua Pace</p>
      </div>
    );
  }
}

export default App;
