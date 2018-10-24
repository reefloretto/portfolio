import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="content">
            <div id="arabic" className="item">
              ريف لوريتو
            </div>
          </div>
        </div>
        <div className="body">
          <div className="row project-title">
            <a
              href="http://aida.reefloretto.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              voices of aida
            </a>
            <div className="year">2018</div>
          </div>
          <div className="row project-description">
            <p>
              During the summer of 2018, I volunteered in the Aida refugee camp
              in Bethlehem, Palestine for five weeks. I taught music at the
              local UNRWA elementary school and helped with miscellaneous tasks
              at the camp's youth center. This project is an attempt to capture
              a snapshot, a moment-in-time, of 47 children from the camp.
            </p>
          </div>
          <div className="row project-title">
            <a
              href="http://boston.reefloretto.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              voices of boston
            </a>
            <div className="year">2018</div>
          </div>
          <div className="row project-description">
            <p>
              This project is an experimental one that uses field audio I
              recorded at various locations throughout Boston. Each blue marker,
              when clicked, reveals an audio clip recorded at that specific
              latitude-longitude position. I consider this a proof-of-concept
              for a larger question I'd like to pursue one day: What does home{" "}
              <em>sound</em> like?
            </p>
          </div>
          <div className="row project-title">
            <a
              href="http://dmoz.reefloretto.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              dmoz
            </a>
            <div className="year">2018</div>
          </div>
          <div className="row project-description">
            <p>
              This is a simple project I created to showcase my musical
              works-in-progress. No titles, no dates (although there's an
              unstated ordering from most-recent to least), no mixing/mastering.
              Just raw ideas, in musical form.
            </p>
          </div>
          <div className="row project-title">
            <a
              href="http://blackbox.reefloretto.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              blackbox
            </a>
            <div className="year">2017</div>
          </div>
          <div className="row project-description">
            <p>
              This is a project I worked on with two friends during the fall of
              2017 at a hackathon. It is a simple "black box" you record audio
              into; it then randomly presents you with an audio clip recorded by
              someone, somewhere in the world. Another experiment involving
              audio, curiosity, and the web.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
