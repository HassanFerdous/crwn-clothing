import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemfromCart, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItemfromCart, addItem, removeItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<span className="remove-button" onClick={() => clearItemfromCart(cartItem)}>
				&#10005;
			</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItemfromCart: item => dispatch(clearItemfromCart(item)),
	removeItem: item => dispatch(removeItem(item)),
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
