import React, { Component } from 'react';
import { Button, Modal } from "react-bootstrap";
import { library as faLib } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

faLib.add( fab, faExternalLinkAlt );

export class UnderTheHood extends Component {
	constructor(props) {
		super(props);
		this.state = ({ showModal: false });
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	getLabel() {
		return this.props.label;
	}

	createLink(label) {
		return (
			<div className="hood-open-icon" title="under the hood" onClick={this.open}></div>
		);
	}

	render() {
		let link = this.createLink();

		return (
			<span>
				{link}
				<div className="static-modal">
					<Modal show={this.state.showModal} onHide={this.close}>
						<Modal.Header closeButton>
							<Modal.Title>Under the Hood</Modal.Title>
						</Modal.Header>
						<Modal.Body>

							<h2>How it's made</h2>

							<ul>This site is running...
								<li>
									<FontAwesomeIcon icon={["fab", "digital-ocean"]} />
									DigitalOcean Ubuntu droplet
									<span>
										<a href="https://m.do.co/c/7ec80cd2ac19" rel="noopener noreferrer" target="_blank" title="Visit DigitalOcean" alt="Visit DigitalOcean">
											<FontAwesomeIcon icon={["fas", "external-link-alt"]}></FontAwesomeIcon>
										</a>
									</span>
								</li>
								<li>
									<FontAwesomeIcon icon={["fab", "node"]} />
									NodeJS behind Nginx.
								</li>
								<li>
									<FontAwesomeIcon icon={["fab", "react"]} />
									ReactJS <span> v{React.version} </span>
									using Facebook's <b>react-app</b>
									<span>
										<a href="https://github.com/facebook/create-react-app" rel="noopener noreferrer" target="_blank" title="Visit repository" alt="Visit repository">
											<FontAwesomeIcon icon={["fas", "external-link-alt"]}></FontAwesomeIcon>
										</a>
									</span>
								</li>
								<li>
									<div className="bootstrap-react-icon"></div>
									<span>Bootstrap for react </span>
									<span>
										<a href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank" title="Visit Bootstrap" alt="Visit Bootstrap">
											<FontAwesomeIcon icon={["fas", "external-link-alt"]}></FontAwesomeIcon>
										</a>
									</span>
								</li>
								<li>
									<FontAwesomeIcon icon={["fab", "github"]} />
									<span>Github is home to my code </span>
									<span>
										<a href="https://github.com/steveperjesi/perjesi-info" rel="noopener noreferrer" target="_blank" title="Visit this repository" alt="Visit this repository">
											<FontAwesomeIcon icon={["fas", "external-link-alt"]}></FontAwesomeIcon>
										</a>
									</span>
								</li>
								<li>
									<FontAwesomeIcon icon={["fab", "fort-awesome"]} />
									<span>Fort Awesome icons </span>
									<span>
										<a href="https://fortawesome.com/" rel="noopener noreferrer" target="_blank" title="Visit Fort Awesome" alt="Visit Fort Awesome">
											<FontAwesomeIcon icon={["fas", "external-link-alt"]}></FontAwesomeIcon>
										</a>
									</span>
								</li>
							</ul>

							<h2>Thank you</h2>

							<ul>
								<li>Background image "Starry Night Sky" from <a href="http://fullhdwallpaper.org/starry-night-sky-55244.html" rel="noopener noreferrer" target="_blank">FullHDWallpaper.org</a></li>
								<li>Icon "Hood Open" made by <a href="https://www.freepik.com" rel="noopener noreferrer" target="_blank">freepik.com</a> from <a href="https://www.flaticon.com/" rel="noopener noreferrer" target="_blank">flaticon.com</a></li>
								<li>React/Bootstrap taken from <a href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank">React-Bootstrap</a> and converted to svg</li>
							</ul>

						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.close}>Close</Button>
						</Modal.Footer>

					</Modal>
				</div>
			</span>
		);
	}
}

