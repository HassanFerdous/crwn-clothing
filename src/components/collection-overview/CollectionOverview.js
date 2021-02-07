import React from 'react';

import CollectionPreview from '../shop-preview/CollectionPreview';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/collection/shopSelector';
import { connect } from 'react-redux';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapDispatchToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapDispatchToProps)(CollectionOverview);
