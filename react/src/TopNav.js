import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import './Base.css';
import './TopNav.css';

export class TopNav extends Component {
  render() {
    return (
      <div className="topnav">
      	<span>
      		<Button bsStyle="primary">
      			<FontAwesomeIcon icon={faBars} />
      		</Button>
      	</span>
      	<ul>
      		<li><a href="http://www.perjesi.com">Home</a></li>
      		<li><a href="http://www.perjesi.com">About</a></li>
      		<li><a href="http://www.perjesi.com">Contact</a></li>
  		</ul>
      </div>
    );
  }
}
