import { REGISTER_USER, LOGIN, LOGOUT } from './actionTypes';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	password: '',
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				name: action.name,
				email: action.email,
				password: action.password,
			};

		case LOGIN:
			return {
				...state,
				isAuth: true,
				name: action.name,
				email: action.email,
			};

		case LOGOUT:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
			};

		default:
			return state;
	}
};
