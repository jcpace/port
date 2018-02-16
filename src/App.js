import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className='navigation'>
        <a href="/about/">about</a> |
        <a href="/work/">work</a> |
        <a href="/contact/">contact</a> 
      </nav>
       <p className='name'>Joshua Pace</p>
       <Footer />
      </div>
    );
  }
}

export default App;
