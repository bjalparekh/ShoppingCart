import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ShoppingCart from './pages/ShoppingCart';
import reducer from '../reducers';
import Database from '../helpers/database';

import products from '../data/cart.json';

const db = new Database(products.productsInCart);
const store = createStore(reducer);

render(
	<Provider store={store}>
		<ShoppingCart db={db} />
	</Provider>, document.getElementById('root'));
