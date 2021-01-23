import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingBagIcon } from '../../images/shopping-bag.svg';
import { connect } from 'react-redux';
// import CartActionTypes from '../../redux/cart/cart.actionTypes';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingBagIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
