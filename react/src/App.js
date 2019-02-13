import React, { Component } from 'react';
import { TopNav } from './TopNav';
import { Content } from './Content';
import { Footer } from './Footer';
import { withRouter } from 'react-router-dom';
import './App.css';
import './Base.css';

const _base = {
	user: {
		firstName: "Steve",
		lastName: "Perjesi",
		fullName: function() {
			return this.firstName+" "+this.lastName;
		},
	},
	menuLinks: [
		// Note: also add these to the routes in Content page
		{id: 1, name: "Home", path: "/", order: 1},
		{id: 3, name: "About", path: "/about", order: 2},
		{id: 4, name: "Skills", path: "/skills", order: 3},
		{id: 2, name: "Fun", path: "/fun", order: 4},
		{id: 5, name: "Now", path: "/now", order: 5}
	],
	socialMediaLinks: [
		{id: 1, name: "github", url: "https://github.com/steveperjesi", order: 1},
		{id: 4, name: "stack-overflow", url: "https://stackoverflow.com/users/6167037/sperjesi", order: 2},
		// {id: 3, name: "youtube", url: "https://www.youtube.com/oops", order: 3},
		{id: 2, name: "hackerrank", url: "https://www.hackerrank.com/steve127", order: 4},
		{id: 5, name: "linkedin", url: "https://www.linkedin.com/in/sperjesi/", order: 5},
	],
};

const filterPage = function(page) {
	page = page && page.replace("/", "");
	return (page && page.length > 0) ? page : "home";
}

export class App extends Component {
	constructor(props) {
		super(props);
		let page = filterPage(props.location && props.location.pathname);
		this.state = ({page: page});
	}

	componentWillReceiveProps(nextProps) {
		let page = filterPage(nextProps.location && nextProps.location.pathname);
		this.setState({page: page});
	}

	render() {
		let page = (this.state.page);

		return (
			<div className="App">
				<TopNav page={page} _base={_base} />
				<Content page={page} _base={_base} />
				<Footer _base={_base} />
			</div>
		);
	}
}

export default withRouter(App);	// withRouter needed to use this.props.location
