import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import userReducer from './user/user.reducer';

//Redux persit
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['cart'],
};
const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

// export out  updated rootReducer with reduxpersist
export default persistReducer(persistConfig, rootReducer);
