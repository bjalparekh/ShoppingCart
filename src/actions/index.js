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

// export const editCartProduct = () => ({
// 	type: types.EDIT_CART_PRODUCT,
// })

export const removeCartProduct = (db, productId) => ({
	type: types.REMOVE_CART_PRODUCT,
	products: db.removeProducts(productId)
})

// export const editProductQuantity = (productId) => ({
// 	type: types.EDIT_PRODUCT_QUANTITY,
// })
