import React, { Component } from 'react';

import { library as faLib } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Grid, Col, Row } from "react-bootstrap";
import { UnderTheHood } from "./pages/UnderTheHood";

faLib.add( fab );

let footer_links = [];

export class Footer extends Component {
	getYear() {
		let d = new Date();
		return d.getFullYear();
	}

	componentWillMount() {
		let navigation_links = (this.props._base && this.props._base.socialMediaLinks) ? this.props._base.socialMediaLinks : null;

		if (!navigation_links) return;

		navigation_links.sort(function(a, b) {
			if (a.order < b.order) return -1;
			if (a.order > b.order) return 1;
			return 0;
		});

		let last_key;
		for (let i = 0; i < navigation_links.length; i++) {
			let name = navigation_links[i].name,
				url = navigation_links[i].url,
				key = (i+1).toString();

			let jsx = (<a href={url} key={key} target="_blank" rel="noopener noreferrer" title={name} ><FontAwesomeIcon icon={["fab", name]} /></a>);

			footer_links.push(jsx);
			last_key = key;
		}

		footer_links.push(<UnderTheHood key={last_key+1} label="Hood" />);
	}

	displayName() {
		return (this.props._base && this.props._base.user && this.props._base.user.firstName) ? this.props._base.user.fullName() : "Me";
	}

	render() {
		let year = this.getYear(),
		    name = this.displayName(),
		    copyright = "1995-"+year+" "+name;

		return (
			<div className="footer">
				<Grid>
					<Row>
						<Col xs={12} sm={12} md={12} lgHidden className="text-center">
							<div>&copy;{copyright}</div>
							<Navbar className="footer-nav">
				  				{footer_links}
							</Navbar>
						</Col>

						<Col lg={6} xsHidden className="text-right">
							<div className="copyright">&copy;{copyright}</div>
						</Col>
						<Col lg={6} xsHidden className="text-left">
							<Navbar className="footer-nav">
				  				{footer_links}
							</Navbar>
						</Col>

					</Row>
				</Grid>
			</div>
		);
	}
}