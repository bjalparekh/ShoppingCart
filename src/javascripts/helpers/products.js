export const getPriceDetails = (products) => {
	return products.map((product)=>{
		return { price: product.p_price, quantity: product.p_quantity}
	})
}
