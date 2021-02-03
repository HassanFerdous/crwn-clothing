/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

//Redux Persist
import { persistStore } from 'redux-persist';

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store, persistor };
