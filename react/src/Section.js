import React, { Component } from 'react';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Fun } from "./pages/Fun";
import { Now } from "./pages/Now";
import './Animate.css';

let views = [];

export class Section extends Component {
	constructor(props) {
		super(props);
		this.state = ({name: props.name});
	}

	updateViews(name) {
		if (views.findIndex(function(d) { return (d === name); } ) < 0) {
			setTimeout(function() {
				views.push(name);
			});
		}
	}

	render() {
		let name = this.state.name;

		this.updateViews(name);

		let initial_view = true;
		let idx = views.findIndex(function(d) { return (d === name); } );
		if (idx > -1) {
			// Visitor been here before?
			initial_view = false;
		}

		switch (name) {
			case "home":
				return <Home initial={initial_view} _base={this.props._base} />;
			case "about":
				return <About initial={initial_view} _base={this.props._base} />;
			case "skills":
				return <Skills initial={initial_view} _base={this.props._base} />;
			case "fun":
				return <Fun initial={initial_view} _base={this.props._base} />;
			case "now":
				return <Now initial={initial_view} _base={this.props._base} />;
			default:
				// We shouldn't even get here
				return <div>404</div>;
		}
		
	}
}
