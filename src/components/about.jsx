import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I’m a computer science student who enjoys building things that blend strong technical foundations with real-world impact! I’m especially interested in areas like machine learning, systems, and software engineering, and I enjoy tackling problems that require both analytical thinking and creativity. </p>
                    <p>In my free time, I like staying active by playing basketball and in the kitchen cooking new recipes! I also recently fostered a cat named JJ, which was a fun and rewarding experience! </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1" style={{marginBottom: '0px'}}>
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>AI & Machine Learning Systems </h3>
                    <p>I’ve built AI-driven systems using large language models, retrieval, and prompt engineering. This includes LLM-powered test generation, logistics analytics assistants, and an AI tutoring platform. My work primarily uses Python, PyTorch, OpenAI APIs, scikit-learn, and REST APIs.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3" style={{marginBottom: '0px'}}>
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Backend & Full-Stack Web Development </h3>
                    <p>I’ve developed full-stack applications that connect backend services, databases, and user interfaces. This includes real-time data visualization, API integration, and scalable backend logic for production systems. I’ve worked with JavaScript, PHP, SQL/MySQL, REST APIs, and data visualization tools.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5" style={{marginBottom: '0px'}}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Systems & Software Engineering</h3>
                    <p>I’ve worked on systems-focused software engineering projects emphasizing automation, performance, and reliability. This includes building automated test frameworks and reusable infrastructure for large teams. My technical toolkit includes Python, C++, Linux, Git, gRPC, and Protocol Buffers.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}