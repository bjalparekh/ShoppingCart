import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CartFooter extends Component {
	render() {
		return (
			<footer className="cart-footer">
				<p className="cart-footer--text"><a href="javascript:void(0)" title="Sign In">Sign in</a> to save your cart and have access to your items on mobile, tablet, and desktop.</p>
			</footer>
		)
	}
}
