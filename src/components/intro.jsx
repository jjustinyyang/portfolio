import React, { Component } from 'react'
import './intro.css'

export default class Introduction extends Component {
  render() {
    return (
        
      <div className = 'whole'>
        <div className = 'image'>
        </div>
        <div className = 'text'>
          <h1>Hi! <br /> <br />I'm Justin</h1>
            <p><a className="cv" href="https://drive.google.com/file/d/1StEMCFEG-6KSDqmlHpTvVjOxAmHowTdf/view?usp=sharing" target="_blank" rel="noopener noreferrer">VIEW CV<i className="icon-download4" /></a></p>
        </div>
      </div>
    )        
  }
}
