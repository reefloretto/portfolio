import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="content">
            <div className="item">REEF LORETTO</div>
            <div id="arabic" className="item">
              ريف لوريتو
            </div>
          </div>
        </div>
        <div className="body">
          <div className="row">
            <div className="group-title">PROJECTS</div>
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
          <div className="row project-title">
            <a>voices of boston</a>
            <div className="year">2018</div>
          </div>
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
        </div>
      </div>
    );
  }
}

export default App;
