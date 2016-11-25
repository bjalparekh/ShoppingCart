import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CartPriceTotals extends Component {
	render() {
		return (
			<div className="cart-totals">
				<dl className="cart-totals-row">
					<dt className="cart-totals-col">Subtotal</dt>
					<dd className="cart-totals-col cart-totals-col--price"><sup>&#36;</sup>37.00</dd>
					<dt className="cart-totals-col"><span>Promotion code</span><span>JF 10 applied</span></dt>
					<dd className="cart-totals-col cart-totals-col--price"><sup>&#36;</sup>-7.00</dd>
					<dt className="cart-totals-col"><span>Estimated shipping<sup>*</sup></span><p>You qualify for free shipping because your order is over $50<sup>*</sup></p></dt>
					<dd className="cart-totals-col">Free</dd>
					<dt className="cart-totals-col"><span>Estimated total</span><p>Tax will be applied during checkout</p></dt>
					<dd className="cart-totals-col cart-totals-col--price"><sup>&#36;</sup>30.00</dd>
				</dl>
			</div>
		)
	}
}
