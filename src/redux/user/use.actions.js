import { userActionsTypes } from './user.types';

export const setCurrrentUser = user => ({
	type: userActionsTypes.SET_CURRENT_USER,
	payload: user,
});
