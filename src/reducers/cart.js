const setProductsState = (state, action) => {
	const newState = {};
	return Object.assign(newState, state, {products: action.products, priceDetails: action.priceDetails})
}

export const cart = (state = { products: [], priceDetails: []}, action) => {
	switch(action.type) {
		case 'FETCH_PRODUCTS':
			return setProductsState(state, action)

		// case 'EDIT_CART_PRODUCT':
		// 	return state

		case 'REMOVE_CART_PRODUCT':
			console.log("state", state, action)
			return setProductsState(state, action)

		// case 'EDIT_PRODUCT_QUANTITY':
		// 	return state

		default:
			return state
	}
}


