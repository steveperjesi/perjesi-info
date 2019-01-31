import React, { Component } from 'react';
import { Grid, Col, Row } from "react-bootstrap";
import { Button, Glyphicon } from "react-bootstrap";

let clips = [ 
		[ "https://s3.amazonaws.com/perjesi-info/tv/lions-clip.gif" ],
		[ "https://s3.amazonaws.com/perjesi-info/tv/redwings-clip.gif" ],
		[ "https://s3.amazonaws.com/perjesi-info/tv/nes-punchout.gif" ],
		[ "https://s3.amazonaws.com/perjesi-info/tv/empire-clip.gif" ],
		[ "https://s3.amazonaws.com/perjesi-info/tv/nes-tecmobowl.gif" ],
		[ "https://s3.amazonaws.com/perjesi-info/tv/southhaven-lighthouse.gif" ],
	],
	fuzz = "https://s3.amazonaws.com/perjesi-info/tv/static.gif";

export class Fun extends Component {
	constructor(props) {
		super(props);
		this.state = ({redirect: false, initial: props.initial, clipIdx: null, fuzz: false});
		this.randomClip = this.randomClip.bind(this);
		this.clipUp = this.clipUp.bind(this);
		this.clipDown = this.clipDown.bind(this);
	}

	updateClip(idx) {
		this.setState({fuzz: true});

		setTimeout(function() {
			this.setState({fuzz: false, clipIdx: idx});
		}.bind(this), 200);	// 200 ms of static
	}

	randomClip() {
		this.updateClip(Math.floor(Math.random() * clips.length));
	}

	clipDown() {
		let idx = this.state.clipIdx, 
			down = idx - 1;

		if (typeof clips[down] === "undefined") {
			this.updateClip(clips.length - 1);
		} else {
			this.updateClip(down);
		}
	}

	clipUp() {
		let idx = this.state.clipIdx,
			up = idx + 1;

		if (typeof clips[up] === "undefined") {
			this.updateClip(0);
		} else {
			this.updateClip(up);
		}
	}

	componentDidMount() {
		// Uncomment this if we want to pre-load the GIFs
		// for (let i = 0; i < clips.length; i++) {
			// let img = new Image();
			// img.src = clips[i];
		// }

		// Let's only load the static/fuzz gif
		let img = new Image();
		img.src = fuzz;

		this.randomClip();
	}

	render() {

		let clss = (this.state.initial) ? "slide-in" : "",
			idx = this.state.clipIdx,
			url = (this.state.fuzz) ? fuzz : clips[idx];

		return (
			<Grid>
				<Row>
					<Col lg={11} xs={9} className={ `section container fun ${clss} `} >
						<h3>Burnout Prevention</h3>
						<Row>
							<Col lg={5} xs={12}>
								<p>Every now and again my brain needs a rest. When not spending time with family and friends, I will
								be found enjoying many different activities.</p>
							</Col>
							<Col lg={6} xs={12} xsOffset={1}>
								<div className="clip-bg-container pull-left" style={{ backgroundImage: "url("+url+")" }}>
									<div className="tv-screen">
										<div className="television-retro"></div>
									</div>
								</div>
								<div className="text-center">
									<Button disabled={true}>Ch {idx + 1}</Button>
									<div>
										<Button onClick={this.clipUp}><Glyphicon glyph="triangle-top" /></Button>
									</div>
									<div>
										<Button onClick={this.clipDown}><Glyphicon glyph="triangle-bottom" /></Button>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		);
	}
}