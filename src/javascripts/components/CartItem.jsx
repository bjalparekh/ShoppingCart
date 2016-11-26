import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import CartItemActions from './CartItemActions';

export default class CartItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const product = this.props.product || {}
		return (
			<li>
				<div>
					<img src="../../assets/images/" />
				</div>
				<div>
					<h3>{product.p_variation} {product.p_name}</h3>
					<dl>
						<dt>Style #:</dt>
						<dd>{product.p_style}</dd>
						<dt>Colour:</dt>
						<dd>{product.p_selected_color.name}</dd>
						<dt>Size:</dt>
						<dd>{product.p_selected_size.code}</dd>
						<dt>QTY:</dt>
						<dd><input type="text" value={product.p_quantity} /></dd>
					</dl>
				</div>
				<CartItemActions id={product.p_id} db={this.props.db} />
			</li>
		);
	}
}

CartItem.propTypes = {
  product: PropTypes.Object.isRequired,
  db: PropTypes.Object.isRequired
}
