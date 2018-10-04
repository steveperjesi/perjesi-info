import React, { Component } from 'react';
import './Base.css';
import './App.css';

// const containers = ["home", "about", "work", "fun"];

export class Container extends Component {
	constructor(props) {
		super(props);
		this.state = ({name: this.props.name});
		console.log('Container constructor', this.props);
	}

	render() {
		let name = this.state.name;
		console.log('render', name);
		switch (name) {
			case "home":
				return <Home />;
			case "about":
				return <About />;
			case "work":
				return <Work />;
			case "fun":
				return <Fun />;
			default:
				return <div></div>;
		}
		
	}
}

class Home extends Component {
	render() {
		return (
			<div className="container welcome">
				<h1>Welcome!</h1>
				<div className="space"></div>
				<p>It's nice to see you!</p>
			</div>
		);
	}
}

class About extends Component {
	render() {
		return (
			<div className="container about">
				<h2>About.</h2>
				<p>Seasoned-journyman coder. That sums it up.</p>
			</div>
		);
	}
}

class Work extends Component {
	render() {
		return (
			<div className="container work">
				<h2>Work.</h2>
				<p>Here are something I have been working on...</p>
			</div>
		);
	}
}

class Fun extends Component {
	render() {
		return (
			<div className="container fun">
				<h2>Fun.</h2>
				<p>When my brain needs a rest, I enjoy this...</p>
			</div>
		);
	}
}
