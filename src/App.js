import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Projects from './components/projects';
import Header from './components/header';
import About from './components/about';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='name'>Joshua Pace
          <div className="hiddentext"><p>I am a full stack web developer; I learn something new everyday. I hope you do too.</p></div>
        </div>
        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="item" data-aos="zoom-in">Lorem ipsum dolor amet copper mug hashtag neutra fashion axe chicharrones DIY affogato. Sriracha four dollar toast gochujang, kale chips chartreuse umami direct trade.</div>
  <About />
  <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
