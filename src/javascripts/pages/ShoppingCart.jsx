import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';

import CartCheckout from '../components/CartCheckout';
import CartContact from '../components/CartContact.jsx';
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
		return (
			<div className="wrapper">
				<CartHeader />
				<main>
					<div className="cart-top">
						<CartItems products={this.props.products} db={this.props.db} />
					</div>
					<div className="cart-bottom">
						<div className="cart-bottom-left">
							<CartContact />
						</div>
						<div className="cart-bottom-right">
							<CartCoupon />
							<CartPriceTotals priceDetails={this.props.priceDetails} />
							<CartCheckout />
						</div>
					</div>
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
  products: PropTypes.array.isRequired,
  priceDetails: PropTypes.array.isRequired,
  db: PropTypes.object.isRequired
}

ShoppingCart.defaultProps = {
	products: [],
	priceDetails: [],
	db: {},
};

export default ShoppingCart = connect(
	mapStateToProps
)(ShoppingCart)
