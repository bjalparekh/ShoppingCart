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
					<li className="cart-items-header--img" key={1}>&nbsp;</li>
					<li className="cart-items-header--detail" key={2}>&nbsp;</li>
					<li className="cart-items-header--size" key={3}>SIZE</li>
					<li className="cart-items-header--qnty" key={4}>QTY</li>
					<li className="cart-items-header--price" key={5}>PRICE</li>
				</ul>
				<ul className="cart-list">
					{ this.props.products.map((product, index)=>
						<CartItem product={product} db={this.props.db} index={index} />
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
