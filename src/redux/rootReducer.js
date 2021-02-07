import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directroyReducer';

//Redux persit
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import collectionReducer from './collection/collectionReducer';

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['cart'],
};
const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: collectionReducer,
});

// export out  updated rootReducer with reduxpersist
export default persistReducer(persistConfig, rootReducer);
