import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='name'>Joshua Pace
          <div className="hiddentext"><p>I am a full stack web developer; I learn something new everyday. I hope you do too.</p></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
