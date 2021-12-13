import { REGISTER_USER, LOGIN } from './actionTypes';

export const userRegistration = ({ email, name, password }) => {
	return {
		type: REGISTER_USER,
		email,
		name,
		password,
	};
};

export const userLogIn = ({ email, name, password }) => {
	return {
		type: LOGIN,
		email,
		name,
		password,
	};
};
