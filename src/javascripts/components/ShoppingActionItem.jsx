import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ShoppingActionList extends Component {
	render() {
		return (
			<li>{this.props.action}</li>
		);
	}
}
