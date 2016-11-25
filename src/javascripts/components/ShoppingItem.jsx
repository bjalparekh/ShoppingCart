import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ShoppingActionList from './ShoppingActionList';

export default class ShoppingList extends Component {
	render() {
		return (
			<li>
				<div>
					<img src="../../assets/images/" />
				</div>
				<div>
					<h3>Solid Green Cotton Tshirt</h3>
					<dl>
						<dt>Style #:</dt>
						<dd>MS13KT1906</dd>
						<dt>Colour:</dt>
						<dd>Blue</dd>
						<dt>Size:</dt>
						<dd>S</dd>
						<dt>QTY:</dt>
						<dd>1</dd>
					</dl>
				</div>
				<ShoppingActionList />
			</li>
		);
	}
}
