import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CartCheckout extends Component {
	render() {
		return (
			<div className="cart-checkout">
				<button type="submit" className="cart-checkout--btn">Checkout</button>
				<a href="javascript:void(0)" title="Continue Shopping" className="cart-continue-shop--link">Continue Shopping</a>
				<p className="cart-checkout--text">Secure checkout. Shopping is always safe &amp; secure</p>
				<img src="assets/lock.jpg" alt="lock.jpg" title="Lock" className="cart-checkout--img" />
			</div>
		)
	}
}
