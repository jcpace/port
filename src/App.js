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
        <br/><br/><br/><br/><br/>
        <div className='name'>Joshua Pace
          <div className="hiddentext"><p>I am a full stack web developer; I learn something new everyday. I hope you do too.</p></div>
        </div>
        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
  <About />
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

  <Projects />
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <Footer />
        {/* <div class="fancy-cursor" style="transform: translate(-50%, -50%) translate(562px, 600px);"></div>
        <div class="fancy-cursor__orb" style="transform: translate(-50%, -50%) translate(562px, 600px);"></div> */}
      </div>
    );
  }
}

export default App;
