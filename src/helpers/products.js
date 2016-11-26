export const getPriceDetails = (products) => {
	return products.map((product)=>{
		return { price: product.p_originalprice, quantity: product.p_quantity}
	})
}
