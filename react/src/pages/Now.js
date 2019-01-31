import React, { Component } from 'react';
import { Grid, Col, Row } from "react-bootstrap";

export class Now extends Component {
	constructor(props) {
		super(props);
		this.state = ({redirect: false, initial: props.initial});
	}

	render() {

		let clss = (this.state.initial) ? "slide-in" : "";

		return (
			<Grid>
				<Row>
					<Col lg={11} xs={9} className={ `section container now ${clss} `} >
						<h3>What's up</h3>
						<Row>
							<Col lg={5} xs={12}>
								<p>
									Right now I'm sitting at my desk (not standing like the cool kids tell me) looking out into my snowy 
									mid-west USA surroundings. My blink-182 playlist is streaming in the background while I play air-drums, 
									air-guitar, and sing along.
								</p>
							</Col>
							<Col lg={5} xs={12} lgOffset={1}>
								<p>
									My current love has to be ReactJS. With my past several full-stack projects, I gravitated toward  
									the JavaScript side of things. I've come to really enjoy the complexity and elegance of it.
								</p>
							</Col>

							<Col xs={12}><div className="line-sep"></div></Col>

							<Col xs={12} lg={6}>
								<p>
								When I'm not banging on my keyboard, I can be found:
								</p>
								<div className="steve-air-guitar"></div>
								<div style={{display: "inline-block", verticalAlign: "top"}}>
									<ul className="list-brief">
										<li>spending time with family</li>
										<li>playing NES</li>
										<li>driving</li>
										<li>enjoying outside</li>
									</ul>
								</div>
							</Col>

							<Col xs={12} lgHidden><div className="line-sep" style={{ marginTop: "25px" }}></div></Col>

							<Col xs={12} lg={6}>
								<p>
									Thanks to Derek Sivers for <a href="https://twitter.com/NowNowNow" target="_blank" rel="noopener noreferrer" alt="@NowNowNow" title="@NowNowNow">@NowNowNow</a>
								</p>
							</Col>

						</Row>
					</Col>
				</Row>
			</Grid>
		);
	}
}
