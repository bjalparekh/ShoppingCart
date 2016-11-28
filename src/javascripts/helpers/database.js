const dbKey = 'products';

export default class Database {
	constructor(products) {
		if (!this._fetch()) {
			this._commit(products);
		}
	}

	getAllProducts() {
		let products = this._fetch() || [];
		return products;
	}

	removeProducts(productId) {
		let products = this._fetch() || [];
		let data = products.filter((product) => {
			return product.p_id !== productId
		})
		this._commit(data);
		return data;
	}

	editProductQuantity(quantity, productId) {
		let products = this._fetch() || [];
		let data = products.map((product) => {
			if (product.p_id === productId) {
				const productClone = Object.assign({}, product);
				productClone.p_quantity = quantity;
				return productClone;
			}
			return product;
		})
		this._commit(data);
		return data;
	}

	_fetch() {
		const data = sessionStorage.getItem(dbKey)
		if (data) {
			return JSON.parse(data);
		}
		return data;
	}

	_commit(data) {
		sessionStorage.setItem(dbKey, JSON.stringify(data))
	}
}
