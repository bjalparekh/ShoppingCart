import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class CartHeader extends Component {
	render() {
		return (
			<header className="cart-header">
				<h2 className="cart-header--heading">Your shopping bag</h2>
				<h3 className="cart-header--count">{this.props.items} items</h3>
			</header>
		)
	}
}

CartHeader.propTypes = {
  items: PropTypes.number.isRequired
}

CartHeader.defaultProps = {
	items: 0
};

