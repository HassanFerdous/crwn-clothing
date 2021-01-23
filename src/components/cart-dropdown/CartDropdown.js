import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map(item => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateTopProps = state => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateTopProps)(CartDropdown);
