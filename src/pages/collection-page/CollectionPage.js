import React from 'react';
import CollectionItem from '../../components/shop-preview/CollectionItem';

import { selectCollection } from '../../redux/collection/shopSelector';
import { connect } from 'react-redux';

import '../../components/shop-preview/collection.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h1 className="collection__title">{title}</h1>
			<div className="collection__wrapper">
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateTopProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateTopProps)(CollectionPage);
