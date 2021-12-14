import { REGISTER_USER, LOGIN, LOGOUT } from './actionTypes';

export const userRegistration = ({ email, name, password }) => {
	return {
		type: REGISTER_USER,
		email,
		name,
		password,
	};
};

export const userLogIn = ({ email, name }) => {
	return {
		type: LOGIN,
		email,
		name,
	};
};

export const userLogout = () => {
	return {
		type: LOGOUT,
	};
};
