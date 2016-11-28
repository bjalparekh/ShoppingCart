import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { editProductQuantity } from '../actions';

import CartItemActions from './CartItemActions';

class CartItem extends Component {
	constructor(props) {
		super(props)
		this.onQuantityChangeHandler = this.onQuantityChangeHandler.bind(this);
	}

	onQuantityChangeHandler(e) {
		this.props.dispatch(editProductQuantity(this.props.db, e.target.value, this.props.product.p_id))
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
							<dd className="item-quantity--value"><input type="number" value={product.p_quantity} className="cart-list--input" onChange={this.onQuantityChangeHandler} /></dd>
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

export default CartItem = connect()(CartItem);
