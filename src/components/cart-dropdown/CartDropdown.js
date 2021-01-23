import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItem }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItem.map(item => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateTopProps = state => ({
	cartItem: state.cart.cartItem,
});

export default connect(mapStateTopProps)(CartDropdown);
