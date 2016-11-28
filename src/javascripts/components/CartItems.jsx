import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import CartItem from './CartItem';

export default class CartItems extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<ul className="cart-items-header">
					<li className="cart-items-header--img">&nbsp;</li>
					<li className="cart-items-header--detail">&nbsp;</li>
					<li className="cart-items-header--size">SIZE</li>
					<li className="cart-items-header--qnty">QTY</li>
					<li className="cart-items-header--price">PRICE</li>
				</ul>
				<ul className="cart-list">
					{ this.props.products.map((product, index)=>
						<CartItem product={product} db={this.props.db} key={index} />
					)}
				</ul>
			</div>
		);
	}
}

CartItems.propTypes = {
  products: PropTypes.array.isRequired,
  db: PropTypes.object.isRequired
}

CartItems.defaultProps = {
	products: [],
	db: {},
};
