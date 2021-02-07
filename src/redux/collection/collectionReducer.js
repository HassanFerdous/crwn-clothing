import shopData from '../../pages/shop/shopData';

const INNITIAL_STATE = {
	collections: shopData,
};

const collectionReducer = (state = INNITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default collectionReducer;
