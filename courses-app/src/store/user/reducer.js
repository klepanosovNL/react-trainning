import { REGISTER_USER, LOGIN } from './actionTypes';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
		case LOGIN:
			return {
				...state,
				name: action.name,
				email: action.email,
				passwotd: action.password,
			};

		default:
			return state;
	}
};
