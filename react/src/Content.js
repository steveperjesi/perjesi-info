import React, { Component } from 'react';
import { Section } from "./Section";
import { Switch, Route } from "react-router-dom";
import { ErrorPage } from "./partials/ErrorPage";
import { camelize, capitalizeFirstLetter } from "./utils/Strings";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-133572509-1');

export class Content extends Component {
	constructor(props) {
		super(props);
		this.state = ({page: props.page});
		this.LoadPage = this.LoadPage.bind(this);
		this.NoMatch = this.NoMatch.bind(this);
	}

	LoadPage({match}) {
		let name = match && match.path.replace("\\", "").replace("/", "");
		if (name === "") name = "home";

		document.title = capitalizeFirstLetter(this.props.page);
		ReactGA.pageview(window.location.hash);

		return <Section name={camelize(name)} _base={this.props._base} />;
	}

	NoMatch({match}) {
		return <ErrorPage page={this.props.page} />;
	}

	render() {
		let key = "key-"+Date.now();	// Need to update the key so the menu gets a new component instance vs update

		return (
			<div style={{paddingBottom: "50px"}} key={key} >
			  	<Switch>
					<Route path="/" component={this.LoadPage} exact/>
					<Route path="/about" component={this.LoadPage} />
					<Route path="/skills" component={this.LoadPage} />
					<Route path="/fun" component={this.LoadPage} />
					<Route path="/now" component={this.LoadPage} />
					<Route component={this.NoMatch} />
			  	</Switch>
			</div>
		);
	}
}
