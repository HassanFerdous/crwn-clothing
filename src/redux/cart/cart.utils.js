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
