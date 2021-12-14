import { AUTHORS_LOADED } from './actionTypes';

const initialState = {
	authors: [],
};

export const authorReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHORS_LOADED:
			return {
				...state,
				authors: [...state.authors],
			};

		default:
			return state;
	}
};
