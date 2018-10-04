import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "./Container";
import "./Base.css";
import "./TopNav.css";

export class TopNav extends Component {
	render() {
		return (
			<div className="topnav">
		      	<span className="hidden">
		      		<Button bsStyle="primary">
		      			<FontAwesomeIcon icon={faBars} />
		      		</Button>
		      	</span>

		      	<Router>
		      		<div>
				  		<Navbar>
				  			<Nav>
				  				<NavItem eventKey={1}>
				  					<Link to="/">Home</Link>
				  				</NavItem>
				  				<NavItem eventKey={2}>
				  					<Link to="/about">About</Link>
				  				</NavItem>
				  				<NavItem eventKey={3}>
				  					<Link to="/work">Work</Link>
				  				</NavItem>
				  				<NavItem eventKey={4}>
				  					<Link to="/fun">Fun</Link>
				  				</NavItem>
				  			</Nav>
						</Navbar>

						<RouteDestinations />
						
					</div>
				</Router>
			</div>
		);
	}
}

const RouteDestinations = () => {
	return (
		<div>
			<Route exact path="/" component={Load} />
			<Route path="/about" component={Load} />
			<Route path="/work" component={Load} />
			<Route path="/fun" component={Load} />
		</div>
	);
}

const Load = ({match}) => {
	let name = match.path.replace("/", "");
	if (name === "") name = "home";
	return <Container name={name} />;
}

