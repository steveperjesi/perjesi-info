import React, { Component } from 'react';
import { Col, Grid, Row } from "react-bootstrap";

export class About extends Component {
	constructor(props) {
		super(props);
		this.state = ({redirect: false, initial: props.initial});
	}

	render() {
		let clss = (this.state.initial) ? "slide-in" : "";

		return (
			<Grid>
				<Row>
					<Col lg={11} xs={12} className={ `section container about ${clss} `} >
						<h3>Intro</h3>
						<img src="https://s3.amazonaws.com/perjesi-info/perjesi-shades.jpg" alt="Steve wearing sunglasses" className="article-intro-image" />
						<p>
							While visiting a record store in the mid-1990s, I noticed a CD on display with an odd looking sticker on it.
							Turns out the sticker was referencing the band's World Wide Web address for the Internet. A pandoras box 
							opened up that would pave my passion for tech.
						</p>
						<p>
							My Commodore 64 (w/2400 baud modem) got me through my early childhood but had maxed out it's potential when it
							came to going online. A visit to my nearby Sears proved fruitful. My new Packard Bell consisted of a 
							486 with 4MB RAM, 500MB HDD, and a 1x CD-ROM. Once the second phone line was added, I have been online every 
							day since.
						</p>
						<p>
							I started learning as much as I could about the Internet and how it worked. I would FTP, telnet, gopher 
							my way into early development with Perl, HTML, and javascript. As the Internet grew, more efficient
							languages and concepts started to become more prevalent. PHP, MySQL, and jQuery became my core development
							tools as the Internet plateaued.
						</p>
						<p>
							Hello smartphones! The days of the html-parsed sites are over. Today's Internet demands scalablity and 
							reusable code. Data should be accessible from any medium regardless of UI. I would like to help
							us all get there.
						</p>

						<h3>Quotes I like</h3>

						<Col xs={6}>
							<blockquote>Thou shall not parse HTML</blockquote>
						</Col>
						<Col xs={6}>
							<blockquote>Code does what you tell it to do, not what you want it to do.</blockquote>
						</Col>
					</Col>
					}
				</Row>
			</Grid>
		);
	}
}

