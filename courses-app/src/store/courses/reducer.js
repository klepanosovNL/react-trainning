import {
	COURSES_LOADED,
	ADD_COURSE,
	GET_COURSE,
	DELETE_COURSE,
} from './actionTypes';

const initialState = {
	courses: [],
	currentCourse: {
		title: '',
		description: '',
		creationDate: '',
		duration: '',
		authors: [],
		id: '',
	},
};

export const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case COURSES_LOADED:
		case ADD_COURSE:
		case DELETE_COURSE:
			return {
				...state,
				courses: [...action.courses],
			};

		case GET_COURSE:
			return {
				...state,
				currentCourse: action.course,
			};

		default:
			return state;
	}
};
