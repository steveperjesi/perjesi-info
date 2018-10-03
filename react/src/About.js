import React, { Component } from 'react';
import { TopNav } from './TopNav';
import './Base.css';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
      	<TopNav />
      	<header className="container welcome">
      	  <p>
            Welcome
          </p>
          This is the way we wash our clothes...
        </header>

        <header className="App-header">
          <p>
            Welcome
          </p>
          App-header
        </header>
      </div>
    );
  }
}

export default About;
