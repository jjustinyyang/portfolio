import React, { Component } from 'react'
import './intro.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img"/>
              <h1 id="colorlib-logo"><a href="index.html">Justin Yang</a></h1>
              <span className="email"><i className="icon-mail"></i> juy021@ucsd.edu </span>
              <span className="phone"><i className="icon-phone"></i> <small>(858)442-2837 <br/></small></span>
              <span className="location"><i className="icon-location"></i> <small>La Jolla, San Diego </small></span>
              <div>
                <br/>
              </div>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">Home</li>
                  <li>About</li>
                  <li>Education</li>
                  <li>Timeline</li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/-justin-yang/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/jjustinyyang/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
             
            </div>
          </aside>
        </div>
      </div>
    )
  }
}