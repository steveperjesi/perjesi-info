import React, { Component } from "react";
import { DropdownButton, Navbar, Grid, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "./utils/Strings";
import "./Base.css";
import "./TopNav.css";

let menu_links = [], nav_links = [];

export class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = ({page: props.page, closeMenu: false});
	}

	componentWillMount() {
		let activeLink = (match, location) => {
			return (match && match.path.replace("\\", "") === location.pathname) ? true : false;
		};

		let navigation_links = (this.props._base && this.props._base.menuLinks) ? this.props._base.menuLinks : null;

		if (!navigation_links) return;

		navigation_links.sort(function(a, b) {
			if (a.order < b.order) return -1;
			if (a.order > b.order) return 1;
			return 0;
		});

		for (let i = 0; i < navigation_links.length; i++) {
			let name = navigation_links[i].name,
				path = navigation_links[i].path,
				key = (i+1).toString();

			let jsx = (<NavLink to={path} activeClassName="navbar-active" isActive={activeLink}>{name}</NavLink>),
				li = (<li key={key}>{jsx}</li>);

			// Large, across-the-top menu for standard screen size
			nav_links.push(li);

			// Small, hamburger menu for mobile screen sizes
			menu_links.push(li);
		}

	}

	componentWillReceiveProps(nextProps) {
		// Update the page heading and hide the mobile DropdownButton
		this.setState({page: nextProps.page, closeMenu: true});
	}

	displayName(name) {

		let idx = this.props._base.menuLinks.findIndex((d, i) => {
			let pg = d.path.replace("/", "");
			if (name === "home" || pg === name) return true;
			return false;
		});

		// Page exists
		if (idx > -1) {
			name = (name === "home") ? "welcome" : name;
			name = (name === "under-the-hood") ? "under/hood" : name;
			return capitalizeFirstLetter(name);
		}
		return "Uh oh";

	}

	render() {

		let page = this.displayName(this.state.page),
		    key = "mobile-menu-"+Date.now();	// Need to update the key so the menu gets a new component instance vs update

		return (
			<Grid>
				<Row>
					<Col lg={12} className="welcome">
						<Col lg={12}>
							<Row>
								<Col smHidden mdHidden lgHidden xs={1} style={{right: "17px"}} >
									<DropdownButton bsStyle="default" title="|||" key={key} id="dropdown-navbar-top" noCaret className="rotate-90 button-inverse dropdown-text">
										<ul>{menu_links}</ul>
									</DropdownButton>
						      	</Col>
						      	<Col smHidden mdHidden lgHidden xs={10} className="page-title-heading">
									<span>{page}</span>
								</Col>
						      	<Col xsHidden lg={12}>
							  		<Navbar className="topnav">
						  				<ul>{nav_links}</ul>
									</Navbar>
								</Col>

					      	</Row>
						</Col>
					</Col>
				</Row>
			</Grid>
		);
	}
}
