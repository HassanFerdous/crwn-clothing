import { userActionsTypes } from './user.types';

export const setCurrrentUser = user => ({
	type: userActionsTypes,
	payload: user,
});
