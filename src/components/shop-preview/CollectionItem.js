import React from 'react';
import './collection.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
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
				<span>{price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
