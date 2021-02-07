import React from 'react';

import { selectCollection } from '../../redux/collection/shopSelector';
import { connect } from 'react-redux';

const CollectionPage = ({ collection }) => {
	console.log(collection);
	return (
		<div className="collection-page">
			<h1>CollectionPage Page</h1>
		</div>
	);
};

const mapStateTopProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateTopProps)(CollectionPage);
