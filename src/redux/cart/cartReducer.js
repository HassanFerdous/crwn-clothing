import { act } from 'react-dom/test-utils';
import CartActionTypes from './cart.actionTypes';
import { addItemToCart } from './cart.utils';

const INNITIAL_STATE = {
	hidden: true,
	cartItem: [],
};

const cartReducer = (state = INNITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItem: addItemToCart(state.cartItem, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
