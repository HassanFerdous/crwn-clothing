import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingBagIcon } from '../../images/shopping-bag.svg';
import { connect } from 'react-redux';
// import CartActionTypes from '../../redux/cart/cart.actionTypes';

import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingBagIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//It's called selector in redux
// itemCount: state.cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0),

//createStructuredSelector takes top label state by defualt
const mapStateTopProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateTopProps, mapDispatchToProps)(CartIcon);
