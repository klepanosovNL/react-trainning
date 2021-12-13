import { AUTHORS_LOADED } from './actionTypes';

export const authorsLoaded = (author) => {
	return {
		type: AUTHORS_LOADED,
		author,
	};
};
