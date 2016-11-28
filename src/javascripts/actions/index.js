import * as types from '../constants/actionTypes';
import { getPriceDetails } from '../helpers/products';

export const fetchProducts = (db) => {
	const products = db.getAllProducts();
	const priceDetails = getPriceDetails(products);
	return {
	type: types.FETCH_PRODUCTS,
	products,
	priceDetails
}}

export const removeCartProduct = (db, productId) => {
	const products = db.removeProducts(productId);
	const priceDetails = getPriceDetails(products);
	return {
		type: types.REMOVE_CART_PRODUCT,
		products,
		priceDetails
	}
}

export const editProductQuantity = (db, quantity, productId) => {
	const products = db.editProductQuantity(quantity, productId);
	const priceDetails = getPriceDetails(products);
	return {
	type: types.EDIT_PRODUCT_QUANTITY,
	products,
	priceDetails
	}
}
