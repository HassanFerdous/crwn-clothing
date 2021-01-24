export const addItemToCart = (cartItems, cartItemToadd) => {
	const exsitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToadd.id);

	if (exsitingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToadd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	} else {
		return [...cartItems, { ...cartItemToadd, quantity: 1 }];
	}
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const exsitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
	if (exsitingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
	} else {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
		);
	}
};
