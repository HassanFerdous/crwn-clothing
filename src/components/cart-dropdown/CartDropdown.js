import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';

import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map(item => <CartItem key={item.id} item={item} />)
			) : (
				<span className="empty-cart">Your cart is emty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push('/checkout');
				toggleCartHidden();
			}}>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateTopProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(connect(mapStateTopProps, mapDispatchToProps)(CartDropdown));
