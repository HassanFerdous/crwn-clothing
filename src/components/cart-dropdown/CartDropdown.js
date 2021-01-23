import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../button/CustomButton';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items"></div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;