import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import userReducer from './user/user.reducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});