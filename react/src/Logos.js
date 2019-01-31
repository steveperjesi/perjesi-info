import React, { Component } from "react";
import { capitalizeFirstLetter } from "./utils/Strings";

export class Go extends Component {
	constructor(props) {
		super(props);
		this.state = ({color: props.color, sizePercentage: props.sizePercentage});
	}

	render() {

		let width = 85 * ((this.state.sizePercentage || 69) / 100),
			height = 35 * ((this.state.sizePercentage || 69) / 100),
		    color = capitalizeFirstLetter(this.state.color || "white"),
		    src = "https://s3.amazonaws.com/perjesi-info/img/Go-Logo_"+color+"_sm.png";

		return (
			<img src={src} style={{width: width, height: height}} />
		);

	}
}