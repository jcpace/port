import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header / >
       <p className='name'>Joshua Pace</p>
       <Footer />
      </div>
    );
  }
}

export default App;
