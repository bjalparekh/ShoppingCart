import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CartCheckout from '../components/CartCheckout';
import CartCoupon from '../components/CartCoupon.jsx';
import CartFooter from '../components/CartFooter';
import CartHeader from '../components/CartHeader';
import CartList from '../components/CartList';
import CartPriceTotals from '../components/CartPriceTotals';

export default class ShoppingCart extends Component {
    render() {
        return(
            <div className="wrapper">
                <CartHeader />
								<main>
									<CartList />
									<CartCoupon />
									<CartPriceTotals />
									<CartCheckout />
								</main>
								<CartFooter />
						 </div>
        );
    }
}
