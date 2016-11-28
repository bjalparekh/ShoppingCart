import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CartCheckout extends Component {
	render() {
		return (
			<div className="cart-checkout">
				<div className="cart-checkout-action">
					<button type="submit" className="btn btn-primary cart-checkout--btn">Checkout</button>
					<a href="javascript:void(0)" title="Continue Shopping" className="cart-checkout--link">Continue Shopping</a>
				</div>
				<div className="cart-checkout-text">
					<p className="cart-checkout--text">Secure checkout. Shopping is always safe &amp; secure</p>
					<img src="./dist/images/lock.jpg" alt="Secure checkout" title="Lock" className="cart-checkout--img" />
				</div>
			</div>
		)
	}
}
