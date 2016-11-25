import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CartHeader extends Component {
	render() {
		return (
			<header className="cart-header">
				<h2 className="cart-header--heading">Your shopping bag</h2>
			</header>
		)
	}
}
