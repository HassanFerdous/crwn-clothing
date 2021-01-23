import React from 'react';
import './cart-item.scss';

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => {
	return (
		<div className="cart-item">
			<img src={imageUrl} alt="cart-img" />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					${price} X {quantity}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
