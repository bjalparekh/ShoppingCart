import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchProducts } from '../../actions';

import CartCheckout from '../components/CartCheckout';
import CartCoupon from '../components/CartCoupon.jsx';
import CartFooter from '../components/CartFooter';
import CartHeader from '../components/CartHeader';
import CartItems from '../components/CartItems';
import CartPriceTotals from '../components/CartPriceTotals';

class ShoppingCart extends Component {
		constructor(props) {
			super(props);
		}

		componentDidMount() {
			this.props.dispatch(fetchProducts(this.props.db))
		}

	render() {
		console.log("props", this.props.products)
		return (
			<div className="wrapper">
				<CartHeader />
				<main>
					<CartItems products={this.props.products} db={this.props.db} />
					<CartCoupon />
					<CartPriceTotals priceDetails={this.props.priceDetails} />
					<CartCheckout />
				</main>
				<CartFooter />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.cart.products,
		priceDetails: state.cart.priceDetails
	}
};

ShoppingCart.propTypes = {
  products: PropTypes.Array.isRequired,
  priceDetails: PropTypes.Array.isRequired,
  db: PropTypes.Object.isRequired
}

export default ShoppingCart = connect(
	mapStateToProps
)(ShoppingCart)
