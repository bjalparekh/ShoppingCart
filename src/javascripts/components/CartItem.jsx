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
			<li className="cart-list--item">
				<div className="cart-list--itemLeft">
					<img src={`./dist/images/T${product.p_id}.jpg`} />
				</div>
				<div className="cart-list--itemRight">
					<div className="cart-list-col1">
						<h2><span>{product.p_variation}</span><span>{product.p_name}</span></h2>
						<dl>
							<dt>Style #:</dt>
							<dd className="item-style--value">{product.p_style}</dd>
							<dt>Colour:</dt>
							<dd className="item-color--value">{product.p_selected_color.name}</dd>
						</dl>
					</div>
					<div className="cart-list-col2">
						<dl>
							<dt className="offscreen-desktop">Size:</dt>
							<dd className="item-code--value">{product.p_selected_size.code}</dd>
						</dl>
					</div>
					<div className="cart-list-col2">
						<dl>
							<dt className="item-quantity offscreen-desktop">QTY:</dt>
							<dd className="item-quantity--value"><input type="text" defaultValue={product.p_quantity} className="cart-list--input" /></dd>
						</dl>
					</div>
					<div className="cart-list-col2">
						<span className="item-price--value"><sup>{product.c_currency}</sup>{product.p_price}</span>
					</div>
				</div>
				<CartItemActions id={product.p_id} db={this.props.db} />
			</li>
		);
	}
}

CartItem.propTypes = {
	product: PropTypes.object.isRequired,
	db: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
}

CartItem.defaultProps = {
	product: {},
	db: {},
	index: 0
};
