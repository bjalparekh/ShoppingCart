import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ShoppingActionItem from './ShoppingActionItem';

export default class ShoppingActionList extends Component {
	render() {
		return (
			<ul>
				<ShoppingActionItem action="Edit" />
				<ShoppingActionItem action="X Remove" />
				<ShoppingActionItem action="Save for later" />
			</ul>
		);
	}
}
