import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class CartPriceTotals extends Component {
	constructor(props) {
		super(props);
	}

	_calculateSubtotal(priceDetails) {
		let subTotal = priceDetails.reduce(function(a, b){
			let price = a.price + b.price
			return { price: price }
		}, { price: 0 })
		return subTotal.price
	}

	_getDiscountPrice(priceDetails) {
		let numberOfItems = this._getNoOfItems(priceDetails)
		let subTotal = this._calculateSubtotal(priceDetails)
		let percentage = this._getDiscountPercentage(numberOfItems);
		return (subTotal*percentage)/100;
	}

	_getDiscountPercentage(numberOfItems) {
		switch(numberOfItems) {
			case 0: case 1: case 2:
				return 0;
			case 3:
				return 5;
			case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
				return 10;
			default:
				return 25;
		}
	}

	_getEstimatedTotal(priceDetails) {
		let total = this._calculateSubtotal(priceDetails) - this._getDiscountPrice(priceDetails)
		return total
	}

	_getNoOfItems(priceDetails) {
		let numberOfItems = priceDetails.reduce(function(a, b){
			let quantity = a.quantity + b.quantity
			return { quantity: quantity }
		}, { quantity: 0 })
		return numberOfItems.quantity
	}

	render() {
		return (
			<div className="cart-totals">
				<dl className="cart-totals-row">
					<dt className="cart-totals-col cart-totals-col__name">Subtotal</dt>
					<dd className="cart-totals-col cart-totals-col__price"><sup>&#36;</sup>{this._calculateSubtotal(this.props.priceDetails)}</dd>
					<dt className="cart-totals-col cart-totals-col__name"><span>Promotion code</span><span>JF 10 applied</span></dt>
					<dd className="cart-totals-col cart-totals-col__price"><sup>&#36;</sup>-{this._getDiscountPrice(this.props.priceDetails)}</dd>
					<dt className="cart-totals-col cart-totals-col__name"><span>Estimated shipping<sup>*</sup></span><p>You qualify for free shipping because your order is over $50<sup>*</sup></p></dt>
					<dd className="cart-totals-col cart-totals-col__shipping">Free</dd>
					<dt className="cart-totals-col cart-totals-col__name cart-totals-col__border"><span>Estimated total</span><p>Tax will be applied during checkout</p></dt>
					<dd className="cart-totals-col cart-totals-col__price cart-totals-col__border"><sup>&#36;</sup>{this._getEstimatedTotal(this.props.priceDetails)}</dd>
				</dl>
			</div>
		)
	}
}

CartPriceTotals.propTypes = {
  products: PropTypes.array.isRequired,
  db: PropTypes.object.isRequired
}

CartPriceTotals.defaultProps = {
	products: [],
	db: {},
};
