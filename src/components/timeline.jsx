import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" id="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>General Atomics Aeronautical Systems  -- Software Engineer Intern <span> June 2025 - Aug 2025 (San Diego, CA)</span></h2>
                        <p>Spearheaded LLM-powered pipelines for automated test script generation, applying retrieval and prompt engineering to
                            improve accuracy, coverage, and code quality across hundreds of flight system tests. Drove contributions of reusable modules to a centralized testing knowledge base, enabling effective LLM retrieval of
                            domain-specific logic and standardizing workflows for 30+ engineers. Owned development of automated test suites for embedded flight and ground control systems using the internal Python
                            framework, cutting manual scripting effort by 40%+ and accelerating regression testing cycles.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Tag-N-Trac -- Software Engineer Intern <span> June 2024 - Aug 2024 (San Diego, CA)</span></h2>
                        <p>Launched an AI assistant using OpenAI’s Assistant API to process natural language queries on the logistics dashboard. Integrated backend services with internal APIs for asset tracking, sensor data, alerting, and report generation, supporting
                           10,000+ shipments monitored globally. Engineered assistant instances to extract query parameters and deliver structured, analytical responses, streamlining daily workflows for supply chain analysts.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>UCSD CSE Early Research Scholars Program -- Software Researcher <span> Sept 2023 - June 2024 (San Diego, CA)</span></h2>
                        <p>Developed and led Proofessor, an AI tutor leveraging GPT-4 and prompt engineering to guide students in constructing informal proofs in Discrete Math, used by 20+ undergraduates in pilot studies.
                          Designed multi-turn interactions with tailored feedback via OpenAI’s API and Python. Integrated Lean 4 automatic formalization and verification, bridging informal reasoning with formal proof systems.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Hermes Epitek  -- Software Engineer Intern <span> July 2023 - Aug 2023 (Taiwan)</span></h2>
                        <p>
                          Built and deployed a web app to visualize factory alarm data using JavaScript, PHP, and Chart.js, giving engineers real-time 
                          visibility into 1,000+ alarms per day. Streamlined frontend-backend communication by integrating MySQL via APIs to enable dynamic filtering and queries.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Triton Robotics -- Embedded Systems Developer <span> Sept 2022 - Oct 2023 (San Diego, CA)</span></h2>
                        <p>Triton Robotics is a student organization participating in RoboMaster, an international robotics competition. I work to code an STM-32 nucleo board to control motors, sensors, and actuators allowing for robot movement. 
                        My past project worked on developing Mutex threading in order to more efficiently print to console while simultaneously running robot code without damaging data. Currently, I am working on creating a centralized turret class
                        capable of managing and operating all functionality of shooting and aiming for numerous different robots. Throughout these projects, I have mainly utilized C++ and Mbed OS within a Linux environment to implement different functionalities.
                        </p> 
                        <a href="https://github.com/Triton-Robotics/TR-mbed">Check out our codebase!</a>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>UCSD Chancellor's Associates Scholarship Program (CASP) -- Graduate Advisor <span> Sept 2025 - Present (San Diego, CA)</span></h2>
                        <p>
                          Led workshops and weekly learning communities, coordinated CASP retention initiatives, and supported academically at-risk
                          students through individualized advising sessions. Collaborated with a team of 15+ advisors to design programming that fostered community and academic success for 200+ scholarship recipients.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}