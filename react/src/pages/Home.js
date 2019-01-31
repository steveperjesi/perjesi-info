import React, { Component } from 'react';
import { Button, Col, Grid, Popover, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import './../Animate.css';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = ({redirect: false, initial: props.initial});
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({redirect: true});
	}

	createButton(label, className) {
		return (<Button bsStyle="info" bsSize="large" className={className} onClick={this.handleClick} type="button">{label}</Button>);
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push to="/about" />;
		}

		let clss_top = (this.state.initial) ? "slide-in" : "",
			clss_button = (this.state.initial) ? "space" : "nospace",
			clss_steve = (this.state.initial) ? "zoomin-spin" : "";

		let name = (this.props._base && this.props._base.user && this.props._base.user.firstName) ? this.props._base.user.firstName : "Me",
			shades = (<div className={ `steve-shades ${clss_steve} `} style={{display: "inline-block"}}></div>),
			label = "Get to know "+name,
			lg_button = this.createButton(label, clss_button),
			sm_button = this.createButton(label);

		return (
			<Grid>
				<Row>
					<Col lg={11} xs={9} className={ `section container welcome ${clss_top} `} >
						<h2>Meet {name}!!</h2>
					
						<Col lgHidden mdHidden smHidden xs={12} className="text-center">
							{shades}
						</Col>
						<Col xsHidden lg={5} md={5} sm={6} className="text-right">
							{shades}
						</Col>

						<Col lgHidden mdHidden smHidden xs={12} className="text-center" style={{paddingTop: "35px"}}>
							{sm_button}
						</Col>

						<Col xsHidden lg={7} md={7} sm={6} className="text-center">
							<Popover id="welcome-bubble" placement="right" style={{maxWidth: "350px"}}>
								<h1>Hi there!</h1>
								<div style={{display: "flex"}}>{lg_button}</div>
							</Popover>
						</Col>

						<Col xs={12} style={{color: "#fff"}} className="text-center text-3d">
							<h3>* Responsive Mode Enabled *</h3>
							<h4>(Just like me, looks great on any device!)</h4>
						</Col>

					</Col>

				</Row>
			</Grid>
		);
	}
}

