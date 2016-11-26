import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { remoNumbertProduct } from '../../actions';

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
			<ul>
				<li onClick={this.onClickHandler}>Edit</li>
				<li onClick={this.onClickHandler} onClick={this.onClickHander}>X Remove</li>
				<li onClick={this.onClickHandler}>Save for later</li>
			</ul>
		);
	}
}

CartItemActions.propTypes = {
  id: PropTypes.Number.isRequired,
  db: PropTypes.Object.isRequired
}

export default CartItemActions = connect()(CartItemActions);
