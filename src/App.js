import './App.css';
import React, { Component } from 'react';
import Timeline from './components/timeline';
import Sidebar from './components/sidebar';
import Education from './components/education';
import About from './components/about';
import Intro from './components/intro';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
        <Sidebar></Sidebar> 
          <div id="colorlib-main">
            <Intro></Intro>
            <About></About> 
            <Education></Education>
            <Timeline></Timeline>
            
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
