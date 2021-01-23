import React from 'react';
import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collections">
			<h1 className="collection__title">{title.toUpperCase()}</h1>
			<div className="collection__wrapper">
				{items
					.filter((item, idx) => idx < 4)
					.map(item => {
						return <CollectionItem key={item.id} item={item} />;
					})}
			</div>
		</div>
	);
};
export default CollectionPreview;
