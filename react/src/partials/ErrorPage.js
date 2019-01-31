import React, { Component } from 'react';
import { Grid, Col, Row, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export class ErrorPage extends Component {
	constructor(props) {
		super(props);
		this.state = ({page: props.page, redirect: false});
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('handleClick');
		this.setState({redirect: true});
	}

	render() {

		if (this.state.redirect) {
			return <Redirect push to="/" />;
		}

		let pageName = this.state.page,
			button = (<Button bsStyle="warning" onClick={this.handleClick} type="button">Home</Button>);

		return (
			<Grid>
				<Row>
					<Col lg={11} xs={9} className={ `section container fun text-center` } >
						<h3>404 Not Found</h3>
						<p style={{textAlign: "center"}}>The page &quot;{pageName}&quot; does not exist.</p>
						<Row>
							<Col xs={12} className="text-center">
								<div className="whatd-you-do">
									<img src="https://s3.amazonaws.com/perjesi-info/whatd_you_do.gif" alt="What'd you do?" />
								</div>
							</Col>
							<Col lgHidden mdHidden smHidden xs={12} className="text-center" style={{paddingTop: "10px"}}>
								{button}
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		);
	}
}