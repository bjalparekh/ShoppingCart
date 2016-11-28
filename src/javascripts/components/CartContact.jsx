import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class CartContact extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
					<p><strong>Need help<br />or have questions?</strong></p>
					<p>Call Customer Service at<br />1-800-555-555</p>
					<p><a href="#">Chat with one of<br />our stylists</a></p>
					<p><a href="#">See return<br />&amp; exchange policies</a></p>
			</div>
		);
	}
}
