import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import CartItem from './CartItem';

export default class CartItems extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ul>
				{ this.props.products.map((product)=>
					<CartItem product={product} db={this.props.db} />
				)}
			</ul>
		);
	}
}

CartItems.propTypes = {
  products: PropTypes.Array.isRequired,
  db: PropTypes.Object.isRequired
}
