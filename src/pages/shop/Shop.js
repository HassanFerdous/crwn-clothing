import React, { Component } from 'react';
import shopData from './shopData';
import CollectionPreview from '../../components/shop-preview/CollectionPreview';

class Shop extends Component {
	constructor() {
		super();
		this.state = {
			collections: shopData,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollections }) => {
					return <CollectionPreview key={id} {...otherCollections} />;
				})}
			</div>
		);
	}
}

export default Shop;
