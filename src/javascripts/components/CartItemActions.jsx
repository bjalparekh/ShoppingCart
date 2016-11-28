import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { remoNumbertProduct } from '../actions';

class CartItemActions extends Component {
	constructor(props) {
		super(props)
		this.onClickHander = this.onClickHander.bind(this);
	}

	onClickHander() {
		this.props.dispatch(removeCartProduct(this.props.db, this.props.id))
	}

	render() {
		return (
			<ul className="cart-item-actions">
				<li className="cart-actions--item">Edit</li>
				<li className="cart-actions--seperator">|</li>
				<li className="cart-actions--item" onClick={this.onClickHander}>X Remove</li>
				<li className="cart-actions--seperator">|</li>
				<li className="cart-actions--item">Save for later</li>
			</ul>
		);
	}
}

CartItemActions.propTypes = {
  id: PropTypes.string.isRequired,
  db: PropTypes.object.isRequired
}

CartItemActions.defaultProps = {
	id: "",
	db: {},
};

export default CartItemActions = connect()(CartItemActions);
