import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CartCoupon extends Component {
	render() {
		return (
			<div className="cart-coupon">
				<form action="post" id="coupon">
					<fieldset>
						<legend className="cart-coupon--text">Enter promotion code<br /> or gift card:</legend>
						<div className="cart-coupon-action">
							<label htmlFor="couponcode" className="sr">Coupon code</label>
							<input type="text"  className="cart-coupon--input" id="couponcode" />
							<button className="btn btn-secondary cart-coupon--btn">Apply</button>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}
