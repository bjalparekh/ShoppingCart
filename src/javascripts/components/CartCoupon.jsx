import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CartCoupon extends Component {
	render() {
		return (
			<div className="cart-coupon">
				<form action="post">
					<fieldset>
						<legend className="cart-coupon--text">Enter promotion code or gift card:</legend>
						<input type="text"  className="cart-coupon--input"/>
						<button className="btn btn-primary cart-coupon--btn">Apply</button>
					</fieldset>
				</form>
			</div>
		)
	}
}
