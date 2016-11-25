import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ShoppingItem from './ShoppingItem';

export default class ShoppingList extends Component {
	render() {
		return (
			<ul>
				<ShoppingItem />
			</ul>
		);
	}
}
