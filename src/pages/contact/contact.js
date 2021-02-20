import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/collection/shopSelector';

const Contact = ({ collection }) => {
	console.log(collection);
	return <div className="contact">I'm contact page</div>;
};

const mapStateTopProps = createStructuredSelector({
	collection: selectCollections,
});

export default connect(mapStateTopProps)(Contact);
