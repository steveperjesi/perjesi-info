import React, { Component } from 'react';

export class Footer extends Component {
	getYear() {
		let d = new Date();
		return d.getFullYear();
	}

	render() {
		let year = this.getYear();

		return (
			<div className="footer">
				&copy;{year} Steve Perjesi
			</div>
		);
	}
}