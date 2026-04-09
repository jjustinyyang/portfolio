import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return ( 
    <section className="colorlib-education" id="education">
    <div className="colorlib-narrow-content">
        <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
            </div>
    </div>
    <div className="row">
        <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="collapsed">M.S. in Computer Science -- Sept 2025 - June 2026
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                                <p>Currently attending the University of California - San Diego (UCSD) for a Master's of Science in Computer Science.</p>
                                <ul>
                                    <li>GPA: 3.50</li>
                                    <li>Courses: Recommender Sys & Web Mining, Convex Optimization Algorithms, ML: Learning Algorithms, AI Agents, Unsupervised Learning, Computer Vision I etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> B.S. in Computer Science -- Sept 2022 - June 2025
                            </a>
                        </h4>
                    </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        <p>Obtained a Bachelor's of Science in Computer Science from the University of California - San Diego (UCSD).</p>
                        <ul>
                            <li>GPA: 3.85</li>
                            <li>Courses: Machine Learning, Deep Learning, Computer Vision, Recommender Systems, Database Systems, Parallel Computing, Operating Systems, Network Services etc.</li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    )
  }
}