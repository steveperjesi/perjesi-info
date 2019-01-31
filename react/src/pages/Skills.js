import React, { Component } from 'react';
import { Grid, Col, Row, Badge, Well } from "react-bootstrap";
import { library as faLib } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

faLib.add( faDatabase, faServer, faJsSquare );

// TODO: Youtube videos, edit, crop etc
// TODO: Create contact form
// TODO: Create tests (contact form, missing routes, etc)

export class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = ({redirect: false, initial: props.initial});
		// this.handleClick = this.handleClick.bind(this);
	}

	render() {

		let clss = (this.state.initial) ? "slide-in" : "";

		return (
			<Grid>
				<Row>
					<Col lg={11} xs={9} className={ `section container skills ${clss} `} >
						<h3>Experience</h3>
						<p>During my span as a software engineer, I've needed to wear many hats. From setting up database replication to 
						creating specific style sheets for non-standard browsers.</p>

						<Row>
							<Col xs={6} className="text-center">
								<Well className="font-weight-normal border-thin">
									<div>
										<FontAwesomeIcon icon="server" className="text-primary icon-large"  />
										<span style={{paddingLeft: "5px", "fontSize": "20px"}}>Backend</span>
									</div>
									<Badge>Nginx</Badge>
									<Badge>Go</Badge>
									<Badge>NodeJS</Badge>
									<Badge>PHP</Badge>
									<Badge>Perl</Badge>
								</Well>
							</Col>
							<Col xs={6} className="text-center">
								<Well className="font-weight-normal border-thin">
									<div>
										<FontAwesomeIcon icon={["fab", "js-square"]} className="text-success" />
										<span style={{paddingLeft: "5px", "fontSize": "20px"}}>Frontend</span>
									</div>
									<Badge>JavaScript</Badge>
									<Badge>AngularJS</Badge>
									<Badge>ReactJS</Badge>
									<Badge>CSS3</Badge>
									<Badge>jQuery</Badge>
								</Well>
							</Col>
							<Col xs={6} className="text-center">
								<Well className="font-weight-normal border-thin">
									<div>
										<FontAwesomeIcon icon="database" className="text-info" />
										<span style={{paddingLeft: "5px", "fontSize": "20px"}}>Database</span>
									</div>
									<Badge>MySQL</Badge>
									<Badge>MariaDB</Badge>
									<Badge>MongoDB</Badge>
									<Badge>PostgreSQL</Badge>
								</Well>
							</Col>
							<Col xs={6} className="text-center">
								<Well className="font-weight-normal border-thin">
									<div>
										<FontAwesomeIcon icon={faWrench} className="text-default" />
										<span style={{paddingLeft: "5px", "fontSize": "20px"}}>Dev Tools</span>
									</div>
									<Badge>Sublime</Badge>
									<Badge>Postman</Badge>
									<Badge>Slack</Badge>
									<Badge>Git</Badge>
									<Badge>AWS</Badge>
									<Badge>ViM</Badge>
								</Well>
							</Col>
						</Row>
						<Row><Col xs={12}>&nbsp;</Col></Row>
						<Row>
							<Col xs={2} lg={1}>
								<img src="https://s3.amazonaws.com/perjesi-info/smoking-grill-sm.gif" alt="smoking grill" className="article-intro-image skills-grill" />
							</Col>
							<Col xs={10}>
								<p>
									My skills also stretch beyond banging on a keyboard. I'm an avid charcoal griller and smoker of pork, 
									chicken, and brisket.
								</p>
							</Col>	
						</Row>
					</Col>
				</Row>
			</Grid>
		);
	}
}
