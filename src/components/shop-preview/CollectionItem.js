import React from 'react';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../button/CustomButton';
import './collection.scss';

import { connect } from 'react-redux';

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<div className="collection-item">
			<div
				className="collection-item__bg"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span>{name}</span>
				<span>{`$${price}`}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
