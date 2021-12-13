import { COURSES_LOADED, ADD_COURSE } from './actionTypes';

const initialState = {
	courses: [],
};

export const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case COURSES_LOADED:
		case ADD_COURSE:
			return {
				...state,
				courses: [...action.courses],
			};

		default:
			return state;
	}
};
