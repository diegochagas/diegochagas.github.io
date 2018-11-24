import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Education from './components/education';
import Work from './components/work';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

ReactGA.initialize('UA-90463903-1');
ReactGA.pageview(window.location.pathname + window.location.search)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Skills/>
        <Education/>
        <Work/>
        <Portfolio/>
        <Contact/>
        <Resume/>
        <Footer/>
      </div>
    );
  }
}

export default App;
